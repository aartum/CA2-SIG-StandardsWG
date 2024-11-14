import { z } from "zod";

export const OwlThing = z.object({});
export type OwlThing = z.infer<typeof OwlThing>;

type Attribute = OwlThing & {
  name: string;
  //type: string;
  value: any;
};

export const Agent = OwlThing.extend({});
export type Agent = z.infer<typeof Agent>;

export const Claim = OwlThing.extend({});
export type Claim = z.infer<typeof Claim>;

export const IdentityClaim = Claim.extend({});
export type IdentityClaim = z.infer<typeof IdentityClaim>;

export const ImpactClaim = Claim.extend({});
export type ImpactClaim = z.infer<typeof ImpactClaim>;

export const StateClaim = Claim.extend({});
export type StateClaim = z.infer<typeof StateClaim>;

export const Report = Claim.extend({});
export type Report = z.infer<typeof Report>;

export const Control = OwlThing.extend({});
export type Control = z.infer<typeof Control>;

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

export const Environment = OwlThing.extend({});
export type Environment = z.infer<typeof Environment>;

export const Event = OwlThing.extend({});
export type Event = z.infer<typeof Event>;

export const Activity = Event.extend({});
export type Activity = z.infer<typeof Activity>;

export const Substantiation = OwlThing.extend({});
export type Substantiation = z.infer<typeof Substantiation>;

export const Instrument = OwlThing.extend({});
export type Instrument = z.infer<typeof Instrument>;

export const Medium = OwlThing.extend({});
export type Medium = z.infer<typeof Medium>;

export const Process = OwlThing.extend({});
export type Process = z.infer<typeof Process>;

export const Project = Process.extend({});
export type Project = z.infer<typeof Project>;

export const State = OwlThing.extend({});
export type State = z.infer<typeof State>;
