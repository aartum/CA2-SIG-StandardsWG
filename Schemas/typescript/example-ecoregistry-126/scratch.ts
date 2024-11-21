const state1 = {
  environment: "4545-4545-4545-4549", // Earth's atmosphere for its first 6 kms.
  parameters: [
    {
      id: "temporal_extent_00012",
      value: ["2020-09-20", "2023-09-30"],
    },
  ],
  indicators: [
    // indicator-value pairs
    {
      id: "", // ID for "The amount of GHGs, directly attributable to human activity and expressed in tCO2e, in the specified environment."
      value: "?",
    },
  ],
};

// Remember:
// We are not trying to describe our own technical implementation in terms of AIAO;
// we are trying to create a technical implementation that will allow us to describe
// the world out there (the world of impact accounting) in terms of AIAO.

// WE NEED TO COMMUNICATE THIS IN JSON. DO NOT LET THE TYPESCRIPT BITS DISTRACT YOU.

// START FROM THE IMPACT CLAIM AND WORK BACKWARDS TO MORE AND MORE DETAIL.

// Hedera token descriptions:
// "This token represents the holder's right to claim that they were responsible for <1 unit of the associated impact>."

// Rights claims
{
  // The right of the project owner to claim that they were responsible for the (project's) impact.
  id: "9656-9655-9654-9653";
  claimant: "7777-8888-9999-4141"; // Kalyon Güneş Enerjisi Üretim A.Ş.
  description: "The claimant hereby claims that they have the right to claim responsibility for the specified proportion of the specified state change.";
  stateChange: "5852-8525-8882-2258";
  proportion: "2955.365 / 2955.365";
  substantiations: [
    // The Cercarbono Credits Issuance Certificate
  ];
}

("This token instance represents the right of the holder to claim responsibility for the specified proportion of the specified impact.");
