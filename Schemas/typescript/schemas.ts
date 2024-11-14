import { z } from "zod";

export const OwlThing = z.object({});
export type OwlThing = z.infer<typeof OwlThing>;

type Attribute = OwlThing & {
  name: string;
  //type: string;
  value: any;
};

export const AiaoAgent = OwlThing.extend({});
export type AiaoAgent = z.infer<typeof AiaoAgent>;

export const AiaoClaim = OwlThing.extend({});
export type AiaoClaim = z.infer<typeof AiaoClaim>;

export const AiaoIdentityClaim = AiaoClaim.extend({});
export type AiaoIdentityClaim = z.infer<typeof AiaoIdentityClaim>;

export const AiaoImpactClaim = AiaoClaim.extend({});
export type AiaoImpactClaim = z.infer<typeof AiaoImpactClaim>;

export const AiaoStateClaim = AiaoClaim.extend({});
export type AiaoStateClaim = z.infer<typeof AiaoStateClaim>;

export const AiaoReport = AiaoClaim.extend({});
export type AiaoReport = z.infer<typeof AiaoReport>;

export const AiaoControl = OwlThing.extend({});
export type AiaoControl = z.infer<typeof AiaoControl>;

export const AiaoClassificationSystem = AiaoControl.extend({});
export type AiaoClassificationSystem = z.infer<typeof AiaoClassificationSystem>;

export const AiaoIdentificationSystem = AiaoControl.extend({});
export type AiaoIdentificationSystem = z.infer<typeof AiaoIdentificationSystem>;

export const AiaoMeasurementSystem = AiaoControl.extend({});
export type AiaoMeasurementSystem = z.infer<typeof AiaoMeasurementSystem>;

export const AiaoSpatialMeasurementSystem = AiaoMeasurementSystem.extend({});
export type AiaoSpatialMeasurementSystem = z.infer<
  typeof AiaoSpatialMeasurementSystem
>;

export const AiaoTemporalMeasurementSystem = AiaoMeasurementSystem.extend({});
export type AiaoTemporalMeasurementSystem = z.infer<
  typeof AiaoTemporalMeasurementSystem
>;

export const AiaoCalculationFormula = AiaoControl.extend({});
export type AiaoCalculationFormula = z.infer<typeof AiaoCalculationFormula>;

export const AiaoIndicator = AiaoControl.extend({});
export type AiaoIndicator = z.infer<typeof AiaoIndicator>;

export const AiaoObjective = AiaoControl.extend({});
export type AiaoObjective = z.infer<typeof AiaoObjective>;

export const AiaoParameter = AiaoControl.extend({});
export type AiaoParameter = z.infer<typeof AiaoParameter>;

export const AiaoSpatialParameter = AiaoParameter.extend({});
export type AiaoSpatialParameter = z.infer<typeof AiaoSpatialParameter>;

export const AiaoTemporalParameter = AiaoParameter.extend({});
export type AiaoTemporalParameter = z.infer<typeof AiaoTemporalParameter>;

export const AiaoRole = AiaoControl.extend({});
export type AiaoRole = z.infer<typeof AiaoRole>;

export const AiaoSpatialReferenceSystem = AiaoControl.extend({});
export type AiaoSpatialReferenceSystem = z.infer<
  typeof AiaoSpatialReferenceSystem
>;

export const AiaoTemporalReferenceSystem = AiaoControl.extend({});
export type AiaoTemporalReferenceSystem = z.infer<
  typeof AiaoTemporalReferenceSystem
>;

export const AiaoEnvironment = OwlThing.extend({});
export type AiaoEnvironment = z.infer<typeof AiaoEnvironment>;

export const AiaoEvent = OwlThing.extend({});
export type AiaoEvent = z.infer<typeof AiaoEvent>;

export const AiaoActivity = AiaoEvent.extend({});
export type AiaoActivity = z.infer<typeof AiaoActivity>;

export const AiaoSubstantiation = OwlThing.extend({});
export type AiaoSubstantiation = z.infer<typeof AiaoSubstantiation>;

export const AiaoInstrument = OwlThing.extend({});
export type AiaoInstrument = z.infer<typeof AiaoInstrument>;

export const AiaoMedium = OwlThing.extend({});
export type AiaoMedium = z.infer<typeof AiaoMedium>;

export const AiaoProcess = OwlThing.extend({});
export type AiaoProcess = z.infer<typeof AiaoProcess>;

export const AiaoProject = AiaoProcess.extend({});
export type AiaoProject = z.infer<typeof AiaoProject>;

export const AiaoState = OwlThing.extend({});
export type AiaoState = z.infer<typeof AiaoState>;
