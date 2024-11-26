import { z } from "zod";

export const Thing = z.object({
    attributes: z.array(AttributeValue).optional(),
    boundaries: z.array(ParameterValue).optional(),
    // and then indicators that can be used to express the state(s) of the thing
});

export const Attribute = z.object({
    //
    // Is technically a subclass of Thing with the value of the 'aiao_class' attribute always equal to "ATTRIBUTE".
    //
    key: z.string(), // Must be unique across the system.
    definition: z.string(),
    controls: z.array(Control).optional(),
    // Common controls are:
    // * type, e.g., 'string', 'number', 'boolean',
    // * format, e.g., [alnum][16]
    // * unit of measure, e.g., 'kilogramme'
    // * range
    aliases : z.array(z.string()).optional()
});

export const AttributeValue = Claim.extend({
  key: z.string(), // The key of the attribute
  value: z.unknown(),
  provenance: Thing
});



export const Control = z.object({
    //
    // Is technically a subclass of Thing with the value of the 'aiao_class' attribute always equal to "CONTROL".
    //
    mode: z.union([z.literal("BINDING"), z.literal("NON_BINDING")]),
    subject: z.unknown().optional(), // e.g., Agent.attributes['name'] // This is technically a parameter-value pair - it's the answer to "What (i.e., scope) does this control apply to?"
    operator: z.union([
        z.literal("EQUAL_TO"),
        z.literal("NOT_EQUAL_TO"),
        z.literal("LESS_THAN"),
        z.literal("LESS_THAN_OR_EQUAL_TO"),
        z.literal("MORE_THAN"),
        z.literal("MORE_THAN_OR_EQUAL_TO"),
        z.literal("IN"),
        z.literal("NOT_IN"),
        z.literal("ADHERE_TO"),
    ]),
    target: z.unknown(),
    applicability: z.array(Control).optional(), // These are techinically parameter-value pairs - it is the answer to "When (i.e., temporal scope) is this control applicable?"
    controls: z.array(Control).optional(), 
});



export const Parameter = Control.extend({});

export const ParameterValue = Claim.extend({
  parameterId: SystemId, // TODO. Restrict.
  value: z.unknown(),
  provenance: Thing
});

export const Indicator = Control.extend({});

export const IndicatorValue = Claim.extend({
  indicatorId: SystemId,
  value: z.unknown(),
  provenance: Thing
});



export const Agent = Thing.extend({
  attributes: z.array(AttributeValue).optional(),
});

export const Claim = Thing.extend({
  claimant: z.union([SystemId, Agent]),
  subject: z.union([SystemId, Thing]),
  content: z.unknown(),
  substantiations: z.array(z.union([SystemId, Thing])).optional()
});

export const IdentityClaim = Claim.extend({});

export const StateClaim = Claim.extend({});

export const State = Thing.extend({
  subjectId: SystemId,
  timestamp: z.string(), // TODO: An ISO8601 date-time string.
  indicators: z.array(IndicatorValue),
  states: z.array(State).optional(),
});

export const Report = Claim.extend({});

export const ClassificationSystem = Control.extend({});

export const IdentificationSystem = Control.extend({});

export const MeasurementSystem = Control.extend({});

export const SpatialMeasurementSystem = MeasurementSystem.extend({});

export const TemporalMeasurementSystem = MeasurementSystem.extend({});

export const CalculationFormula = Control.extend({});a>;



export const Objective = Control.extend({});



export const SpatialParameter = Parameter.extend({});

export const TemporalParameter = Parameter.extend({});

export const Role = Control.extend({
  requirements: z.array(z.union([z.string(), Control])),
  responsibilities: z.array(z.unknown()),
  restrictions: z.array(z.unknown()),
});

export const SpatialReferenceSystem = Control.extend({});

export const TemporalReferenceSystem = Control.extend({});

export const Environment = Thing.extend({
  parameters: z.array(Parameter),
});

export const Event = Thing.extend({
  parameters: z.array(ParameterValue), // typically spatial and temporal
  parent: z.union([SystemId, Event]).optional(),
  events: z.array(z.union([SystemId, Event])).optional(),
});

export const Activity = Event.extend({
  controls: z.object({
    objectives: z.array(z.union([SystemId, Control])).min(1),
    methodologies: z.array(z.union([SystemId, Control])),
  }),
  parent: z.union([SystemId, Activity]).optional(),
  activities: z.array(z.union([SystemId, Activity])).optional(),
});

export const StateChange = Event.extend({
  subject: z.union([SystemId, Thing]), // The (ID of the) thing that underwent a state change.
  parameters: z.array(ParameterValue),
  // The spatial parameters will typically be the same as the spatial parameters of the thing
  // that underwent the state change, so if that thing has been specified and properly defined, 
  // then the spatial parameters do not have to be repeated here.
  // The temporal parameters should indicate the period over which the state change occurred.
  indicator: z.union([SystemId, Indicator]),
  stateChangeType: z.union([
    z.literal("INCREASE"),
    z.literal("DECREASE")
  ]),
  stateChangeMagnitude: z.number(),
  stateChanges: z.array(z.union([SystemId, StateChange])).optional(),
});

export const ActivityAgentRelation = Claim.extend({
  agent: z.union([SystemId, Agent]),
  role: z.union([SystemId, Role]),
  activity: z.union([SystemId, Activity]),
});

export const ActivityImpactClaim = Claim.extend({
    activity: z.union([SystemId, Activity]),
    stateChanges: z.array(z.union([SystemId, StateChange])),
    causalRelation: z.union([z.literal("CAUSED"), z.literal("PREVENTED")]),
    proportion: z.number().optional().default(1)
    activityImpactClaims: z.array(z.union([SystemId, ActivityImpactClaim])).optional()
});

export const AgentImpactClaim = Claim.extend({
    agent: z.union([SystemId, Agent]),
    stateChanges: z.array(z.union([SystemId, StateChange])),
    causalRelation: z.union([z.literal("CAUSED"), z.literal("PREVENTED")]),
    proportion: z.number().optional().default(1),
    agentImpactClaims: z.array(z.union([SystemId, AgentImpactClaim])).optional()
});

export const ClaimSubstantiation = Thing.extend({
  claim: z.union([SystemId, Claim]),
  substantiation: z.union([SystemId, Thing]), // Note that a substantiation can be a claim in itself.
});

export const Instrument = Thing.extend({});

export const Medium = Thing.extend({});

export const Process = Thing.extend({});

export const Project = Process.extend({});

