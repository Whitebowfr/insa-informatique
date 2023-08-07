## Un petit projet rapide
C'est un selfbot discord qui sert juste à répéter les messages que j'envoie constamment dans le channel informatique du discord de promo de l'INSA.

Si vous voulez l'installer c'est simple, créez un fichier .env avec
`TOKEN=[Insérer token]`

Puis lancez la commande
`npm install`

Et finalement allez dans node_modules/discord-user-bots/src/auth/session.js et remplacez la ligne 
`const crypto = require("crypto");`
Par :
`const crypto = require("crypto").webcrypto;`

Puis lancez `node main` et paf !
