import { z } from "zod";

// Just an example of what the SystemId type may look like.
export const SystemId = z.string().length(19); // Is technically a special type of attribute.

export const Thing = z.object({
  id: SystemId.optional(),
});
export type Thing = z.infer<typeof Thing>;

export const Claim = Thing.extend({
  claimantId: SystemId.optional(), // Must be limited to IDs of agents.
  content: z.unknown(),
});
export type Claim = z.infer<typeof Claim>;

export const Control = Thing.extend({
  mode: z.string().optional(), // TODO: "binding" or "non-binding".
  x: z.unknown(),
  operator: z.string().optional(),
  y: z.unknown(),
  controls: z.array(z.unknown()).optional(), // TODO: An array of Control.
  applicability: z.array(z.unknown()).optional(), // TODO. An array of Control.
});
export type Control = z.infer<typeof Control>;

export const Attribute = Thing.extend({
  key: z.string(),
  description: z.string().optional(),
  control: Control.optional(),
});
export type Attribute = z.infer<typeof Attribute>;

export const AttributeValue = Claim.extend({
  attributeId: SystemId, // TODO: or attributeKey. Restrict.
  value: z.unknown(),
});
export const ParameterValue = Claim.extend({
  parameterId: SystemId, // TODO. Restrict.
  value: z.unknown(),
});

export const Agent = Thing.extend({
  attributeValues: z.array(AttributeValue).optional(),
});
export type Agent = z.infer<typeof Agent>;

export const IdentityClaim = Claim.extend({});
export type IdentityClaim = z.infer<typeof IdentityClaim>;

export const ImpactClaim = Claim.extend({});
export type ImpactClaim = z.infer<typeof ImpactClaim>;

export const StateClaim = Claim.extend({});
export type StateClaim = z.infer<typeof StateClaim>;

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

export const Objective = Control.extend({});
export type Objective = z.infer<typeof Objective>;

export const Parameter = Control.extend({});
export type Parameter = z.infer<typeof Parameter>;

export const SpatialParameter = Parameter.extend({});
export type SpatialParameter = z.infer<typeof SpatialParameter>;

export const TemporalParameter = Parameter.extend({});
export type TemporalParameter = z.infer<typeof TemporalParameter>;

export const Role = Control.extend({});
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
  parameters: z.array(Parameter),
});
export type Event = z.infer<typeof Event>;

export const Activity = Event.extend({});
export type Activity = z.infer<typeof Activity>;

export const Substantiation = Thing.extend({});
export type Substantiation = z.infer<typeof Substantiation>;

export const Instrument = Thing.extend({});
export type Instrument = z.infer<typeof Instrument>;

export const Medium = Thing.extend({});
export type Medium = z.infer<typeof Medium>;

export const Process = Thing.extend({});
export type Process = z.infer<typeof Process>;

export const Project = Process.extend({});
export type Project = z.infer<typeof Project>;

export const State = Thing.extend({
  subjectId: SystemId,
  timestamp: z.string(), // TODO: An ISO8601 date-time string.
  indicatorId: SystemId.optional(),
  indicatorValue: z.unknown().optional(),
  states: z.array(z.unknown()).optional(), // TODO: Replace z.unknown() here with a recursive reference to State.
});
export type State = z.infer<typeof State>;

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

const allKnownAttributes: Attribute[] = [
  {
    id: "2345-2345-2345-2345",
    key: "agentType",
    description:
      "The type of agent. Allowable values are NATURAL_PERSON, LEGAL_ENTITY and CYBERPERSONA.",
    control: {
      mode: "binding",
      x: "AttributeValue.value",
      operator: "oneOf",
      y: ["NATURAL_PERSON", "LEGAL_ENTITY", "CYBER_PERSONA"],
    },
  },
  {
    id: "3456-3456-3456-3456",
    key: "naturalPersonlegalName",
    description:
      "The legal name of the person according to the national register of names for natural persons of their country of citizenship.",
    control: {
      mode: "binding",
      x: "AttributeVvalue.value",
      operator: "oneOf",
      y: "<all names in the natural persons register of the agent's country of citizenship>",
    },
  },
  {
    id: "4567-4567-4567-4567",
    key: "bodyMassInKg",
    description: "The mass of the natural person expressed in kilogramme.",
    control: {
      // Well, unit of measure should be kg. Must be greater than 0, etc.
    },
  },
];

const agent1: Agent = {
  id: "1234-1234-1234-1234",
  attributeValues: [
    {
      attributeId: "2345-2345-2345-2345", // The system ID for the 'agent type' attribute.
      value: "NATURAL_PERSON",
    },
    {
      attributeId: "3456-3456-3456-3456", // The system ID for the 'legal name according to national register for names of natural persons' attribute.
      value: "Marcus Alex-Ivan Howard",
    },
    {
      attributeId: "4567-4567-4567-4567", // The system ID for the 'body mass in kg' attribute.
      value: 56,
    },
  ],
};
