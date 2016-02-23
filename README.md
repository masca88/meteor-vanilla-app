## Meteor Vanilla App
Applicazione sviluppata in MeteorJs e Semantic UI che realizza la base di una piattaforma con navigazione responsive, registrazione e  login dell'utente.

## How to run
  meteor --port 3100

## Custom packages
### Blaze
E' stata inserita una versione patchata del package Blaze, per fixare un bug che non permetteva di usare in maniera completa le Grid di Semantic UI, perchè venivano rimosse le classi doppie nello stesso tag HTML.
Riferimento alla pull request della patch: https://github.com/meteor/meteor/pull/5753
