// This file has a .ts extension simply because a .json file does not allow commenting.

{
  id: "period_00000";
  definition: "A temporal extent expressed as a pair of ISO 8601 date strings.";
  controls: [
    {
      // Must be an array of length = 2.
    },
    {
      // Each element in the array must be of type 'string'.
    },
    {
      // Each string in the array must adhere to the ISO 8601 date format.
    },
  ];
}

{
  id: "spatial_extent_55587";
  definition: "A spatial extent expressed as a set of at least two pairs of Universal Transverse Mercator WGS 84 Zone 36N coordinates.";
  controls: [
    {
      // Universal Transverse Mercator WGS 84 Zone 36N
    },
  ];
}
