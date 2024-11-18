// This file has a .ts extension simply because a .json file does not allow commenting.

// Other "Things"

// Agent-activity relations
{
  agent: "7777-8888-9999-4141"; // Kalyon Güneş Enerjisi Üretim A.Ş.
  activity: "2222-1111-2222-4241"; // "Karapinar YEKA Solar Power Plant Project"
  controls: [
    {
      // role: 'PROJECT_OWNER' // synonym (alias) for 'ACTIVITY_OWNER'
    },
  ];
}
{
  agent: "1234-1234-1234-1234"; // "Ekobil Environmental Services and Consultancy Ltd."
  activity: "2222-1111-2222-4241"; // "Karapinar YEKA Solar Power Plant Project"
  controls: [
    {
      // role: 'PROJECT_DEVELOPER' // A type of service provider to the activity.
    },
  ];
}

// Claim substantiations
{
  {
    claim: "1111-2222-7771-8881"; // The monitoring report for the first impact verification period (as produced by the project owner, not the verifier).
    substantiations: [
      {
        // Monitoring data; instrument calibration certificates, etc.
      },
      {
        // The VVB's verification report for the first monitoring period.
      },
      {
        // The verification certificate issued by the VVB for the project's first monitoring period.
      },
    ];
  }

  {
    claim: "9656-9655-9654-9653"; // The claim of the project owner to claim that they have the right to state that they were responsible for the project's impact.
    substantiations: [
      "8887-7776-5554-4443", // The Cercarbono credits issuance certificate
    ];
  }
}
