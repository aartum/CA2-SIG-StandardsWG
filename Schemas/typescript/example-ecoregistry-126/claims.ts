// This file has a .ts extension simply because a .json file does not allow commenting.

// Claims

// Activity-impact claims
{
  // The (final version of the) monitoring report for the first impact verification period, WITHOUT the verifier's feedback.
  {
    id: "1111-2222-7771-8881";
    claimant: "7777-8888-9999-4141"; // Kalyon Güneş Enerjisi Üretim A.Ş (the project OWNER, not the project DEVELOPER - the latter, as a service provider to the former, always acts ON BEHALF OF the former, so the former always carries ultimate responsibility.)
    activity: "2222-1111-2222-4241"; // The Karapinar YEKA Solar Power Plant Project
    impacts: ["5852-8525-8882-2258"]; // TODO: Where do we list the additional, claimed but not formally quantified impacts?
    attributes: [
      {
        // external_reference: <the URL of the monitoring report for the first impact verification period>
      },
    ];
    substantiations: [
      {
        // monitoring data
      },
      {
        // Once the report has been reviewed and approved by a VVB, the report and certificate by the latter
        // can be added as substantiations.
      },
    ];
  }
}

// Agent-impact claims
{
  // With every retirement of 1 tonne of this FID, we publish this to the Hedera Hashgraph:
  {
    id: "2221-3332-4443-5554"; // The ID for this agent-impact claim.
    claimant: "7777-8888-9999-4141"; // The agent exercising their right to make the impact statement.
    description: "The claimant hereby exercises their right to claim responsibility for the specified proportion of the specified impact.";
    impact: "5852-8525-8882-2258";
    proportion: "1 / 2955.365";
    substantiations: [
      {
        // The transaction through which the agent obtained the right to make this impact claim.
      },
    ];
  }
}
