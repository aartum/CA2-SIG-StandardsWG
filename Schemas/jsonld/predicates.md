Any `thing` may have one or more `description`(s).
Any `thing` may have one or more `state`(s).
Any `thing` may have one or more `location`(s).
Any `thing` may have one or more `identification`(s). (Note: a name is one such identification.)
Any `thing` may have an `event` as `provenance`.

An `agent` must have at least one `identification`.

An `identification` must have exactly one `identifier`.

Any `state` must have exactly one `temporalLocation`.
Any `state` must have exactly one `indicator`.

An `activity` must have a `temporalLocation` as a start date.
An `activity` may have a `temporalLocation` as an end date.
An `activity` must be referenced in at least one `agentRelation`.

An `agentRelation` must identify at least one `agent`, one `activity` and one `role`.

A `claim` must have exactly one `thing` as its subject.
A `claim` must have exactly one predicate.
A `claim` must have exactly one object.
A `claim` must have at least one `agent` as its claimant.

We've actually been confounding at least three different ontologies:

- an ontology for anthropogenic impact (accounting);
- an ontology for dealing with claims, their validation and verification, and who is accountable for their veracity; and
- an ontology for dealing with communication and everything that goes with it, like medium, format etc. Representation?
- ? an ontology for accountability?
- ? an ontology for representation?

Loose thoughts:
A representation always has a purpose.
Separation of concerns. Every ontology must necessarily assume certain aspects/facets of reality as "given" and therefore not required to be explained by the ontology.

1. AN ONTOLOGY FOR IMPACT
   -> Concerned with describing state differences.
   -> Thing, state, indicator, event, provenance.
   -> A thing has a state relative to an indicator. An event is defined as a change/difference (whether temporary or permanent) in the state of a thing. An event has a provenance which is in itself another event.

2. AN ONTOLOGY FOR INFORMATION COMMUNICATION
   -> Concerned with describing how information is passed on from one entity to another (but it is NOT concerned with the veracity of the information).
   -> Information, sender (/transmitter), recipient, medium, format, encoding.

3. AN ONTOLOGY FOR CLAIMS
   -> Concerned with the veracity of information (but NOT concerned with the impact/implications of spreading true or false information).
   -> Subject, predicate, object, claimant, substantiation, attestation, veracity.
   -> Veracity is always relative (to some measure of truth or accuracy).

These ontologies interact:
I engage in an activity that has an impact on some thing. I make a claim about the activity and its impact. I communicate that claim to someone else.
But communication itself is an activity that inevitably has an impact of some sort, and someone can make a claim about what the impact of some communication was.

## Representation: purpose, forum/context of power/validity, scope. Medium?

So where do anthropogenic impact accounting fit in?
Relative to the Ontology for Impact it is concerned specifically with events that are activities initiated and/or engaged in by humans.
Relative to the Ontology for Claims it is concerned with claims made by human claimants about human activities. AIA adds the subclasses of "state claim" and "impact claim".
Relative to the Ontology for Communication/Transmission it is concerned with the communication of those claims ^.
Or, paraphrased, the discipline of anthropogenic impact accounting really just employ these other ontologies - it doesn't really need an ontology of its own. It only needs a clear explanation/demonstration of how these other ontologies should employed for / applied to anthropogenic impact accounting.
An activity is only of interest to AIAO if we are asking what the impact of that activity was. "Reporting", for example, is not usually one that we assess the impact of.
