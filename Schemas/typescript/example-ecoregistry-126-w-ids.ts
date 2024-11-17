// This file has a .ts extension simply because a .json file does not allow commenting.

// Example:
// Karapınar YEKA Solar Power Plant Project
// Country: Turkey
// Registry: EcoRegistry
// Methodology: CDM - ACM0002: Grid-connected electricity generation from renewable sources
// URL: https://www.ecoregistry.io/projects/126
//
// Document: Project Description Document

// START FROM THE IMPACT CLAIM AND WORK BACKWARDS TO MORE AND MORE DETAIL.

// Agents
{
  {
    id: "7777-8888-9999-4141";
    attributes: [
      // {
      //   key: "id_00000",
      //   value: "7777-8888-9999-4141"
      // }
    ];
    // Kalyon Güneş Enerjisi Üretim A.Ş
    // Identification 705818
    // Location Ehlibeyt, Mevlana Blv. No:201, NEV201 İş Merkezi C Blok
    // Kat: 33 PK:06520 Çankaya/ANKARA-TÜRKİYE
    // Telephone number(s) +90 536 271 81 13
    // E-mail address enerji-iletisim@kalyonenerji.com
    //
    // role: project owner
  }

  {
    id: "1234-1234-1234-1234";
    attributes: [
      // {
      //   key: "id_00000",
      //   value: "1234-1234-1234-1234"
      // },
      {
        key: "commercial_entity_type_00000",
        value: "LIMITED_LIABILITY_COMPANY",
      },
      {
        key: "name_5a99c",
        value:
          "Ekobil Cevre Hizmetleri Danismanlik Egitim Tarim Hayvancilik Madencilik Insaat Ithalat Ihracat Turizm ve Ticaret Ltd. Sti.",
      },
      {
        key: "name_5a99d",
        value: "Ekobil Environmental Services and Consultancy Ltd.",
      },
      {
        key: "physical_address_00000",
        value:
          "<Ahlatlibel Mahallesi 1839 Sokak No 56 , 06805 Çankaya/Ankara, TURKEY>",
      },
      {
        key: "email_address_00000",
        value: "asli.ozcelik@ekobil.com",
      },
      {
        key: "phone_number_00000",
        value: "+905057089098",
      },
    ];
    // Ekobil Environmental Services and Consultancy Ltd.
    // Ekobil Cevre Hizmetleri Danismanlik Egitim Tarim Hayvancilik Madencilik Insaat Ithalat Ihracat Turizm ve
    // Ticaret Ltd. Sti. Is a limited liability company registered to the Ankara Chamber of Commerce with the
    // trade registration number of 145009
    // Location Ahlatlıbel Mahallesi 1839 Sokak No 56 , 06805 Çankaya/Ankara, TURKEY
    // Telephone number(s) +905057089098
    // E-mail address asli.ozcelik@ekobil.com
    //
    // role in the project: project developer (i.e., service provider) (Prepared the Project Description Document)
  }

  {
    // TODO: The project design validator(s).
  }

  {
    // TODO: The monitoring period result verifier(s).
  }

  {
    // Ahlatlıbel Mahallesi 1839 Sokak No 56, 06805 Çankaya/ Ankara, Turkey
    // info@ekobil.com
    // +903124891338
    // www.ekobil.com
    //
    // role: contact person at/for Ekobil w.r.t. this project
  }

  {
    // Dr. Murtaza Ata
    // CEO of Kalyon Güneş Enerjisi Üretim A.Ş
  }

  {
    // Dr. G. Aslı Sezer Özçelik
    // Contact person at Ekobil Environmental Services and Consultancy Ltd.
  }
}

// Environments
{
  {
    id: "4545-4545-4545-4549";
    description: "The atmosphere of planet Earth.";
    attributes: [
      // {
      //   key: "id_00000",
      //   value: "4545-4545-4545-4549"
      // }
    ];
    parameters: [
      // parameter-value pairs
      {
        id: "", // ID for the parameter that is a vertical extent measured in meter, starting from sea level.
        value: 6000,
      },
      {
        // temporal parameter
      },
      {
        // content parameter
      },
    ];
    indicators: []; // Which indicators can be used to express the state of this environment?
  }
}

// Activities
{
  {
    id: "2222-1111-2222-4241";
    description: "Construction and operation of the solar power plant. <Can be an entire paragraph or more here.>";
    attributes: [
      {
        name: "Karapinar YEKA Solar Power Plant Project",
      },
    ];
    parameters: [
      {
        // Spatial extent
      },
      {
        // Temporal extent
        startDate: "2020-09-20",
        endDate: "2030-09-19",
      },
    ];

    controls: [
      // Objectives
      {
        // Contribute to the reduction of GHG emissions of Turkey by providing a greenfield power source
      },
      {
        // Contribute solving of the unemployment problem by recruiting local workforce during construction and operation stages.
      },
      {
        // Contribute energy independency of Turkey by providing an alternative for the electricity mix
      },
      {
        // Help reduce thermal power related environmental problems such as air pollution
      },

      // The PDD as a control.
      {},
    ];
    activities: [
      // The IDs of all the activities listed hereafter.
    ];
  }
  {
    // description: Creating and running The Social Development Program
    // ...focuses on the
    // households directly affected by the investment during the construction and operation
    // phases of the Karapınar Solar Power Plant Project in line with Kalyon Energy's
    // Social Development Policy commitments. this program offers ways for especially
    // communities close to the project site to benefit from the positive effects of the
    // investment to the maximum extent, on the other hand, it proposes activities that
    // will have a positive impact on economic, social and environmental development
    // directly or indirectly.

    // environments:
    {
      // The target area of the program has been determined as "households engaged in animal husbandry or agriculture
      // in Büyükkarakuyu, Küçükkarakuyu, Kirkitoğlu, Ekmekçi, Seyit Hacı villages which are the closest neighbourhoods.
    }

    // (sub-)activities:
    {
      //       In April 2021, the project site was opened for grazing for sheep for a while, and 8
      // animal crossing ramps were built for sheep to pass through concrete borders. The
      // company has started experiments to support the successful implementation of
      // grazing within solar energy plants by developing a viable business model. These experiments involve grazing flocks of sheep in the Karapınar Solar Power Plant area.
      // In Turkey, the practice of opening solar power plant areas for grazing is not yet
      // widespread among plant operators.3
    }
    {
      //       The first grazing trial took place on August 10, 2023, between 06:00 AM and 07:00
      // AM, with a flock of around 70 sheep, and it was successfully completed. The
      // following day, another trial was conducted using a flock of approximately 300
      // sheep under the solar panels.
    }
    {
      //       As of August 21, 2023, grazing experiments continue with a flock of 600 sheep, and
      // the continuation of these trials is planned. In Turkey, the practice of opening solar
      // power plant areas for grazing is not yet widespread among plant operators. This is
      // mainly due to lack of information, fear of innovation, and numerous
      // misconceptions. There is a common concern that sheep might damage solar
      // energy installations. However, according to the companies literature research,
      // grazing with sheep, particularly aside from goats and cattle, does not harm the
      // solar panels and does not pose any security risks from the perspective of the
      // sheep. The field studies conducted so far also support this data.(See Annex 3)
    }
  }
  {
    // description: develop and implement a biodiversity management plan
    // In order to protect fauna and flora
    // in the Project area, the Company aims to continue the monitoring and on-site
    // conservation studies performed to minimize the effects of the Project’s activity on
    // the species present in the Project area. With the presence of the project, as there
    // are security patrols at the area, the hunting pressure at the vicinity especially at
    // the nearby Hotamış Marshes have significantly dropped.

    // controls:
    {
      // objectives
      {
        // ...achieve a net positive impact on biodiversity.
      }
    }
  }
  {
    // Each of the following is an activity in its own:
    // * Food boxes were donated to 100 households in need during Ramadan.
    // • Saplings were planted by participating in the sapling planting event organized by
    // the Karapınar Municipality.
    // • A Kalyon Energy Memorial Forest with 10000 saplings is being built.
    // • On 1.09.2021, an environmental cleaning event was held in Acıgöl with the project
    // employees.
    // • On 23.09.2021, the Red Crescent blood donation truck came to the project site and
    // a blood donation event was held for 2 days.
    // • In order to draw attention to the importance of seat belts in traffic on 28.10.2022,
    // a traffic activity was organized with a simulation tool for the project employees
    // and the people of Karapınar.
    // • In the project, 773 employees completed the vocational training process and their
    // documents were delivered by the Karapınar Public Education Center.
    // • In the campuses close to the project, dust and noise measurements are made from
    // 2 points for 5 days.
    // • A teacher's lodge is being built by Kalyon Energy in the city center of Karapınar
    // • Student trips to the project are organized frequently.
  }
}

// Agent-activity relations
{
  agentId: "";
  activityId: "";
  agentRole: "";
  startDate: "";
  endDate: "";
  controls: [];
}

// Impacts
{
  {
    id: "5852-8525-8882-2258";
    environment: "4545-4545-4545-4549";
    parameters: [
      {
        id: "temporal_extent_00012",
        value: ["2020-09-20", "2023-09-30"],
      },
      // {
      //   id: "spatial_extent_00004",
      //   value: "<same as that of environment 4545-4545-4545-4549>",
      // },
    ];
    indicator: "anthropogenic_ghgs_00000";
    impactType: "AVOIDED_INCREASE";
    impactValue: 2955.365;
    //impacts: [];
  }
  {
    // Social benefits to the local area through their The Social Development Program
  }
}

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

// Claim substantiations
{
  {
    claim: "9878-8787-7676-5444";
    substantiation: "8887-7776-5554-4443";
  }
}

// Other "Things"
{
  {
    // The Cercarbono carbon credits issuance certificate
    id: "8887-7776-5554-4443";
    description: "Cercarbono carbon credits issuance certificate to Kalyon Güneş Enerjisi Üretim A.Ş. for the first impact verification period of their Karapinar YEKA Solar Power Plant Project.";
    attributes: [
      {
        id: "external_url_0000",
        value:
          "<the URL to the Cercarbono carbon credits issuance certificate>",
      },
    ];
  }
  {
    // Project Description Document
    // url: ...
    // Author: Ekobil Environmental Services and Consultancy Ltd
    // date: 01.03.2024
  }
  {
    // The verification report for the first impact verification period
  }
}
