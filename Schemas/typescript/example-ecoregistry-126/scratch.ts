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

//  WE NEED TO COMMUNICATE THIS IN JSON! DO NOT LET THE TYPESCRIPT BITS DISTRACT YOU!
