// Internally defined sets of values
{
  // control modes:
  const controlModes = ["BINDING", "NON_BINDING"];

  // control operators:
  const controlOperators = [
    "EQUAL_TO",
    "NOT_EQUAL_TO",
    "LESS_THAN",
    "LESS_THAN_OR_EQUAL_TO",
    "MORE_THAN",
    "MORE_THAN_OR_EQUAL_TO",
    "IN",
    "NOT_IN",
    "ADHERE_TO",
  ];

  // agent attributes per layer
  const layer1AgentAttributes = [];
  const layer2AgentAttributes = [];
  const layer3AgentAttributes = [];

  // activity attributes per layer
  const layer1ActivityAttributes = [];
  const layer2ActivityAttributes = [];
  const layer3ActivityAttributes = [];

  // TODO: How to specify the level of detail to provide per layer for things like quantification methodologies?
  // TODO: How to specify which agents' details need to be provided per layer? I think this will come from claim-things-by-layer.
}

// Externally defined sets of values
{
  {
    id: "2487-1652-8442-1646"; // Tolam system ID.
    description: "The register of names of natural persons who are citizens of Turkey.";
  }
  {
    id: "8513-5778-2232-5444";
    description: "The register of full names of non-natural legal entities registered with the Ankara Chamber of Commerce.";
  }
  {
    id: "8513-5778-2232-5447";
    description: "The register of trading names of non-natural legal entities registered with the Ankara Chamber of Commerce.";
  }
  {
    id: "7878-4545-5656-2323";
    description: "The register of identifiers for non-natural legal entities registered with the Ankara Chamber of Commerce.";
  }
}

// Externally defined spatial reference systems
{
  {
    id: "utm_wgs_84_00000";
    definition: "Universal Transverse Mercator WGS 84, as defined at <external URL>.";
    controls: [
      // For systems concerned with automatic validation, this array should include the full list
      // of zone-agnostic rules and requirements that form part of the UTM WGS84 spatial reference system.
    ];
  }
  {
    id: "utm_wgs_84_36n_00000";
    definition: "Universal Transverse Mercator WGS 84 Zone 36N, as defined at <external URL>.";
    controls: [
      {
        mode: "BINDING",
        operator: "ADHERE_TO",
        object: "utm_wgs_84_00000",
      },
      {
        // Further rules and requirements applicable to specifically Zone 36N.
      },
    ];
  }
}
