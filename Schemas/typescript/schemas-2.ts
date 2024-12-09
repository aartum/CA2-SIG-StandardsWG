import { z } from "zod";

// Just an example of what the SystemId type may look like.
export const SystemId = z.string().length(19); // Is technically a special type of attribute.

export const Thing = z.object({
  id: SystemId.optional(),
});
export type Thing = z.infer<typeof Thing>;

export const Control = Thing.extend({
  mode: z.string().optional(), // TODO: "binding" or "non-binding".
  x: z.unknown(),
  operator: z.string().optional(),
  y: z.unknown(),
  subinstances: z.array(z.unknown()).optional(), // TODO: An array of Control.
  applicability: z.array(z.unknown()).optional(), // TODO. An array of State.
});
export type Control = z.infer<typeof Control>;

export const Attribute = Thing.extend({
  key: z.string(), // Must be unique across Tolam's system.
  definition: z.string(),
  controls: z.array(Control).optional(),
  // Common controls are:
  // * type, e.g., 'string', 'number', 'boolean',
  // * format, e.g., [alnum][16]
  // * unit of measure, e.g., 'kilogramme'
  // * range
});
export type Attribute = z.infer<typeof Attribute>;

export const AttributeValue = Claim.extend({
  key: z.string(),
  value: z.unknown(),
});

export const Agent = Thing.extend({
  attributes: z.array(AttributeValue).optional(),
});
export type Agent = z.infer<typeof Agent>;

export const Claim = Thing.extend({
  claimant: z.union([SystemId, Agent]),
  subject: z.union([SystemId, Thing]),
  content: z.unknown(),
});
export type Claim = z.infer<typeof Claim>;

export const IdentityClaim = Claim.extend({});
export type IdentityClaim = z.infer<typeof IdentityClaim>;

export const ImpactClaim = Claim.extend({});
export type ImpactClaim = z.infer<typeof ImpactClaim>;

export const StateClaim = Claim.extend({});
export type StateClaim = z.infer<typeof StateClaim>;

export const State = Thing.extend({
  subjectId: SystemId,
  timestamp: z.string(), // TODO: An ISO8601 date-time string.
  indicatorId: SystemId.optional(),
  indicatorValue: z.unknown().optional(),
  subinstances: z.array(State).optional(),
});
export type State = z.infer<typeof State>;

export const Report = Claim.extend({});
export type Report = z.infer<typeof Report>;

export const ClassificationSystem = Control.extend({});
export type ClassificationSystem = z.infer<typeof ClassificationSystem>;

export const IdentificationSystem = Control.extend({});
export type IdentificationSystem = z.infer<typeof IdentificationSystem>;

export const MeasurementSystem = Control.extend({});
export type MeasurementSystem = z.infer<typeof MeasurementSystem>;

export const SpatialMeasurementSystem = MeasurementSystem.extend({});
export type SpatialMeasurementSystem = z.infer<typeof SpatialMeasurementSystem>;

export const TemporalMeasurementSystem = MeasurementSystem.extend({});
export type TemporalMeasurementSystem = z.infer<
  typeof TemporalMeasurementSystem
>;

export const CalculationFormula = Control.extend({});
export type CalculationFormula = z.infer<typeof CalculationFormula>;

export const Indicator = Control.extend({});
export type Indicator = z.infer<typeof Indicator>;

export const IndicatorValue = Claim.extend({
  indicatorId: SystemId,
  value: z.unknown(),
});

export const Objective = Control.extend({});
export type Objective = z.infer<typeof Objective>;

export const Parameter = Control.extend({});
export type Parameter = z.infer<typeof Parameter>;

export const ParameterValue = Claim.extend({
  parameterId: SystemId, // TODO. Restrict.
  value: z.unknown(),
});

export const SpatialParameter = Parameter.extend({});
export type SpatialParameter = z.infer<typeof SpatialParameter>;

export const TemporalParameter = Parameter.extend({});
export type TemporalParameter = z.infer<typeof TemporalParameter>;

export const Role = Control.extend({
  requirements: z.array(z.union([z.string(), Control])),
  responsibilities: z.array(z.unknown()),
  restrictions: z.array(z.unknown()),
});
export type Role = z.infer<typeof Role>;

export const SpatialReferenceSystem = Control.extend({});
export type SpatialReferenceSystem = z.infer<typeof SpatialReferenceSystem>;

export const TemporalReferenceSystem = Control.extend({});
export type TemporalReferenceSystem = z.infer<typeof TemporalReferenceSystem>;

export const Environment = Thing.extend({
  parameters: z.array(Parameter),
});
export type Environment = z.infer<typeof Environment>;

export const Event = Thing.extend({
  parameters: z.array(ParameterValue), // typically spatial and temporal
  superinstance: z.union([SystemId, Event]).optional(),
  subinstances: z.array(z.union([SystemId, Event])).optional(),
});
export type Event = z.infer<typeof Event>;

export const Activity = Event.extend({
  controls: z.object({
    objectives: z.array(z.union([SystemId, Control])).min(1),
    methodologies: z.array(z.union([SystemId, Control])),
  }),
  superinstance: z.union([SystemId, Activity]).optional(),
  subinstances: z.array(z.union([SystemId, Activity])).optional(),
});
export type Activity = z.infer<typeof Activity>;

export const StateChange = Event.extend({
  subject: z.union([SystemId, Thing]), // The (ID of the) thing that underwent a state change.
  parameters: z.array(ParameterValue),
  // The spatial parameters will typically be the same as the spatial parameters of the thing
  // that underwent the state change, so if that thing has been specified and properly defined,
  // then the spatial parameters do not have to be repeated here.
  // The temporal parameters should indicate the period over which the state change occurred.
  indicator: z.union([SystemId, Indicator]),
  stateChangeType: z.union([z.literal("INCREASE"), z.literal("DECREASE")]),
  stateChangeMagnitude: z.number(),
  subinstances: z.array(z.union([SystemId, StateChange])).optional(),
});

export const ActivityAgentRelation = Thing.extend({
  agentId: SystemId,
  roleId: SystemId,
  activityId: SystemId,
});
export type ActivityAgentRelation = z.infer<typeof ActivityAgentRelation>;

export const Substantiation = Thing.extend({
  claimId: SystemId,
  content: z.union([SystemId, Thing]),
});
export type Substantiation = z.infer<typeof Substantiation>;

export const Instrument = Thing.extend({});
export type Instrument = z.infer<typeof Instrument>;

export const Medium = Thing.extend({});
export type Medium = z.infer<typeof Medium>;

export const Process = Thing.extend({});
export type Process = z.infer<typeof Process>;

export const Project = Process.extend({});
export type Project = z.infer<typeof Project>;

export const SpatialLocation = Indicator.extend({
  spatialReferenceSystemId: SystemId,
});

export const TemporalLocation = Indicator.extend({
  temporalReferenceSystemId: SystemId,
});

// Examples of individuals

//
//
//
//  WE NEED TO COMMUNICATE THIS IN JSON! DO NOT LET THE TYPESCRIPT BITS DISTRACT YOU!
//
//
//
