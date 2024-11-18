// This file has a .ts extension simply because a .json file does not allow commenting.

// Attribute definitions

{
  key: "id_00000";
  definition: "The identifier for the thing in Tolam's system.";
  controls: [
    // Must be a string of the format [alnum]{6}-[alnum]{6}-[alnum]{6}-[alnum]{4}.
  ];
  aliases: ["id"];
}
{
  key: "description_00000";
  definition: "A textual elaboration about a thing.";
  controls: [
    // Type must be 'string'.
  ];
  aliases: ["description"];
}
{
  key: "id_00054";
  definition: "The registration number of a non-natural legal entity as assigned to them by the Ankara Chamber of Commerce.";
  controls: [
    {
      mode: "BINDING",
      operator: "IN",
      target: "7878-4545-5656-2323",
    },
  ];
}
{
  key: "name_5a8b2";
  definition: "The legal name of a natural person as registered in the natural persons register of Turkey.";
  controls: [
    {
      mode: "BINDING",
      operator: "IN",
      target: "2487-1652-8442-1646",
    },
  ];
}
{
  key: "name_5a99c";
  definition: "The full name of a non-natural legal entity registered with the Ankara Chamber of Commerce.";
  controls: [
    {
      mode: "BINDING",
      operator: "IN",
      target: "8513-5778-2232-5444",
    },
  ];
}
{
  key: "name_5a99d";
  definition: "The trading name of a non-natural legal entity registered with the Ankara Chamber of Commerce.";
  controls: [
    {
      mode: "BINDING",
      operator: "IN",
      target: "8513-5778-2232-5447",
    },
  ];
}
{
  key: "name_24145";
  definition: "The name of an activity, project or programme as recorded in the corresponding register of Cercarbono Certified Carbon Standard.";
  {
    mode: "BINDING";
    operator: "IN";
    target: "5959-1515-3535-5757";
  }
}
{
  key: "phone_number_00000";
  definition: "The number that can be used to reach the agent telephonically.";
  controls: [
    // Must start with a valid country code.
    // Can only contain digits and the characters '-' and '+'.
    // Must be at least ... characters in length.
    // Can be at most ... characters in length.
  ];
}
{
  key: "physical_address_00000";
  definition: "...";
  controls: [
    // Must at least specify two of the following elements: street, country, ...
  ];
}
{
  key: "email_address_00000";
  definition: "...";
  controls: ["..."];
}
{
  key: "commercial_entity_type_00000";
  definition: "The type of a non-natural legal entity engaging in commercial activities, as per the relevant regulatory body.";
  controls: [
    {
      mode: "BINDING",
      operator: "IN",
      target: [
        "LIMITED_LIABILITY_COMPANY",
        "PRIVATE_COMPANY",
        "SOLE_PROPRIETORSHIP",
        "PARTNERSHIP",
        "LIMITED_PARTNERSHIP",
        "CORPORATION",
        "CO_OPERATIVE",
        "NOT_FOR_PROFIT_ORGANISATION",
        "NOT_FOR_PROFIT_COMPANY",
      ],
    },
  ];
}
