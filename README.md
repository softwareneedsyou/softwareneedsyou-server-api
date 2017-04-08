# softwareneedsyou-server-api
Software Needs You ! [**Server API** + BDD]

Serveur exposant l'API du service de donnée.

## Structure _(simplifiée)_
Ce package propose 2 module Express :
- une API REST en JSON
    - _ne propose pour l'instant que du contenu statique_
    - _une base de données sera prochainement ajouté_ 
- une interface web d'administration
    - sera pour l'instant le seul moyen d'administration depuis l'extérieur

L'API et l'interface sont exposé en 2 module Express différents (et non des Routers) car la configuration diffère (comme le support d'un moteur de vue, gestion des erreurs ...), et cela permet une meilleure séparation, permettant ainsi l'utilisation du module voulu, comme on veut sur le serveur.

## Exemple
Un exemple d'utilisation "prêt à l'emploi" est porposé avec la commande `npm start`.
