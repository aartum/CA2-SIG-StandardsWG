---
title: "An Open Source Exploration of a Semantic Structure for Climate Accounting"
author: "Hyperledger CA2SIG Standards WG"
date: "26/04/2022"
output:
  slidy_presentation: 
    incremental: yes
    keep_md: yes
  ioslides_presentation:
    toc: yes
    incremental: yes
    keep_md: yes
  beamer_presentation:
    toc: yes
    incremental: yes
    theme: Montpellier
    colortheme: whale
    fonttheme: professionalfonts
---



# Abstract

<!-- decide when to use 'semantic structure', 'ontology' or 'taxonomy'--> 

As the world accelerates towards decarbonisation, the need for climate impact accounting at scale becomes more pressing. One of the greatest challenges in this regard is the description, comparison and aggregation of impact claims due to the multitude of existing accounting and reporting standards. The reconciliation and aggregation of these claims, in the interest of climate impact “bookkeeping” at a global scale, requires a common underlying semantic structure – which currently does not exist. 

The Standards Working Group (Standards WG) of the Hyperledger Climate Action and Accounting Special Interest Group (CA2-SIG) aims to lay out such a semantic structure. Working from the premise that agents engage in activities that impact environments, the WG is actively searching out standards to distil their semantic structures into an ontology that most adequately describes these elements and the relationships between them. The ontology is by design open source, collaborative, dynamic and technology agnostic. 

The presentation will provide: 

  * an overview of the WG's work to date,
  * introduce the latest version of the basic ontology, and 
  * demonstrate the ontology's application by means of an exemplary use case. 

<!--
1. Background. 
2. Brief overview of existing standards. 
3. An exercise in comparing and aggregating impact claims based on different standards, without the use of a common ontology. 
4. Introduction to the ontology being developed by the Hyperledger CA2-SIG Standards WG. 
5. An exercise in applying the ontology to climate impact accounting. 
6. A brief exploration of the application of the ontology in other fields of impact accounting. 
7. Conclusion & how to get involved.
-->

# The challenge

<!--
As the world accelerates towards decarbonisation, the need for climate impact accounting at scale becomes more pressing. One of the greatest challenges in this regard is the description, comparison and aggregation of impact claims due to the multitude of existing accounting and reporting standards. The reconciliation and aggregation of these claims, in the interest of climate impact “bookkeeping” at a global scale, requires a common underlying semantic structure – which currently does not exist.

Standards, protocols, taxonomies and ontologies
What is the difference between 'semantic structure', 'ontology' and 'taxonomy'?
-->

## Description

Describing impact is a challenge because different terms mean different things to different people.

The term *environment*

Terms *Climate neutral* and *Carbon Neutral*

___

## Comparison 

Comparing is difficult because there are different standards ...

Even when terms are the same (e.g. 6 Kyoto gasses), calculation methods may differ

(stove methods)

(Brickstar vs. TACS)

___

## Aggregation

It follows that aggregation is difficult when description and comparison are problematic ...

If assumption are not made explicit ...

Uncertainty leads to semantic ascent which reduces accuracy

___

# Standards

## Different standards have different aims

<!-- extract or derive objectives of each standard -->
### What are standards for?


Standards are agreements to guide “common and repeated use of rules, conditions, guidelines or characteristics for products or related processes and production methods, and related management systems practices”

Standards aggregate norms that help shape interests, constrain behavior, prescribe actions, and support a logic of appropriateness and consequences.

Norms are social constructs that emerge from persuasion, cascade through acceptance, and internalize compliant behavior.

Standard documents include “definition of terms; classification of components; delineation of procedures; specification of dimensions, materials, performance, designs, or operations; measurement of quality and quantity; test methods and sampling procedures; or descriptions of fit and measurements of size or strength.”

Source: https://en.wikipedia.org/wiki/Technical_standard + "Developing Operational Requirements: A Guide to the Cost-Effective and
Efficient Communication of Needs" (PDF). US Department of Homeland Security. November 2008

___
### Examples of interests

#### Perspective of investor 
Announced at COP26 in November 2021, the ISSB is a first step in developing a global, baseline, corporate reporting standard on climate change and sustainability. It aims to provide investors and other capital market participants with information about companies’ sustainability-related risks and opportunities to help them make informed decisions. 
*Forging the path to international standards in sustainable finance. 2022 OMFIF.* [https://www.omfif.org/forging-the-path-to-international-standards-in-sustainable-finance/]

#### Regulatory perspective 
Compliance to international treaties (EU, Paris) and local laws and regulations

"The Paris Agreement sets out a global framework to avoid dangerous climate change by limiting global warming to well below 2°C and pursuing efforts to limit it to 1.5°C. It also aims to strengthen countries' ability to deal with the impacts of climate change and support them in their efforts."

___

#### Voluntary climate action
"The Gold Standard (GSF) was established in 2003 by WWF and other international NGOs to ensure projects that reduced carbon emissions featured the highest levels of environmental integrity and also contributed to sustainable development."

"The VCS Program allows certified projects to turn their greenhouse gas (GHG) emission reductions and removals into tradable carbon credits. "

(-- narrow or broad context)
 
#### Project or institutional focus

GHG Project protocol vs CAS

___

## Standards use different metrics

<!-- extract or derive metrics used of various standard (see GHG protocol for performance standard approach -->

Performance standard (resource efficiency per output)


Emission reduction / avoidance (against a counterfactual baseline - i.e. the question of additionality) 


Carbon sinks vs. carbon emission (question of 'net zero')

___

## Examples of standards in use
<!-- Kyle -->

Sustainability Accounting Standards Board

Task Force on Climate-Related Financial Disclosure

Global Reporting Initiative (GRI) - 
  * Universal standards, sector standards, topic standards

ISSB

Climate Disclosure Standard Board 
  (importance of policy, strategy, management and scenario analysis )

WEF

IR

___

## Example: Comparison of standards

(Alex)
CDM: https://cdm.unfccc.int/filestorage/e/x/t/extfile-20210921115752581-reg_stan04_v03.0.pdf/reg_stan04_v03.0?t=QjB8cmM0ZDRnfDBV7GVs5k5cf3k7WEJwicbL

Implied taxonomy or semantic structure 

Compare two reports (same company) or two companies according to two standards 

___

## The need for a "deep" shared taxonomy

Html example (power of consensus on profoundly simple, opportunity-generating, enabling standards)

Burners Lee

FIN sector example (OMFIF article) <!-- CJP check -->




# A semantic structure for climate accounting

## Premise of our ontology

(Not another standard )

Agent - activity - environment

### Agent

### Activity

### Environment

### Applicability to *impact accounting* in general 
(skuif)

Carbon tunnel vision

planetary well-being



___

## Ontology diagram

___

## How we envision our ontology can be used: 

All operations require standardisation as a starting point

<!-- * A standard is a query OR a presentation -->

<!-- VC presentation according to a standard -->

### Use of the ontology: Description

The ontology helps us be precise  .....

### Use of the ontology: Camparison 

The ontology helps translate .... (Rosetta Stone)

### Use of the ontology: Aggregation

Improve the IWA .....

It follows that the more precise and comparable, ... 

# What's next and how to get involved

(what's next)

(feedback)

(contacts, and channels)

(wiki)

