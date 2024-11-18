// Claims
{
  // Activity-impact claims
  {
    {
      id: "1111-2222-7771-8881";
      activity: "2222-1111-2222-4241";
      impacts: ["5852-8525-8882-2258"];
    }
  }

  // Agent-impact claims
  {
    {
      id: "2221-3332-4443-5554";
      agent: "7777-8888-9999-4141"; // The project owner.
      impacts: ["5852-8525-8882-2258"];
    }
    {
      id: "1471-2582-3693-9879";
      agent: "<id of the eventual buyer of the right to make the impact claim>";
      impacts: ["5852-8525-8882-2258"];
      // The publication of this on the Hashgraph marks the end of the validity period of the previous claim.
    }
  }
}
