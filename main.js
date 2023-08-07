require('dotenv').config()

const Discord = require("discord-user-bots");
const client = new Discord.Client(process.env.TOKEN);

client.on.ready = function () {
    console.log(`Bot ${client.info.user.username} logged in !`);
};

async function sendMessage(id, content) {
    return new Promise((resolve, reject) => {
        client.send(id, {
            content: content
        }).then(() => {
            resolve();
        }).catch((err) => {
            reject(err);
        })
    })
}

client.on.message_create = function (message) {
    if (message.mentions.some(mention => mention.id === client.info.user.id)) {
        switch(true) {
            case message.content.includes("recommendations pc"):
                sendMessage(message.channel_id, 
`**PC**
Les recommandations de l'INSA en termes d'informatique sont obsolètes. (celles dans le guide de rentrée, qui ont étées relayées par les CdP sur Insta)
En effet, les specs recommandées sont bien trop élevées pour ce que l'on fait, et je refuse que les étudiants qui s'y connaissent moins en informatique se fassent avoir par ces recommandations.
Je vous propose donc de vous donner les recommandations que je juge plus adaptées, en fonction de votre utilisation.

Je vais ici faire les recommandations pour un PC et pas un Mac, mais les Mac sont tout à fait adaptés à l'INSA, quoi qu'en disent l'administration. (me mentionner avec "recommendations mac" pour plus de détails)

__**Pour les étudiants qui ne font que de la bureautique :**__
- CPU : 4 coeurs, un i3 ou un Ryzen 3 récent est donc souvent suffisant.
- RAM : 8Go, 16Go si vous avez beaucoup d'onglets ouverts en même temps.
- Stockage : 256Go de SSD, 512Go si vous avez beaucoup de fichiers. Prendre un SSD NVMe si possible, c'est ce qui se fait de mieux.
- GPU : intégré au CPU, pas besoin de plus.
- Écran : 14\" ou 15\" c'est la taille idéale pour les amphis
- Poids : C'est le plus important, essayer d'en prendre un en dessous de 1.8kg pour pouvoir le transporter facilement.

__**Pour les étudiants qui veulent jouer :**__
*Même recommandations, que pour la bureautique, sauf : *
- CPU : Essayer d'en prendre un avec une fréquence correcte, 3.5GHz en Turbo c'est bien.
- GPU : Là ça va dépendre des jeux auxquels vous voulez jouer : une 3060/4050 pour les gros jeux, une 3050Ti/1660Ti pour des jeux moins gourmands (CS:GO, LoL,...)
- RAM : 16 Go
- Ecran : 15" ou 17" pour avoir un écran plus grand et un meilleur refroidissement, mais c'est plus lourd.

Pour moi, les pc portables ne devraient pas dépasser les 1000€ pour un pc de bureautique, et les 1500€ pour un pc de jeu.
__Si vous avez des questions, n'hésitez pas à mentionner <@446685950383226886>__`);
                return;
            case message.content.includes("recommandations mac"):
                sendMessage(message.channel_id, `**Mac**
Je m'y connais moins en Mac, mais je sais qu'ils sont parfaitements adaptés.
Attention tout de même, les Macs plus anciens seront peut être un peu court niveau puissance, mais les nouveaux sont très bien.
Il vous faudra en revanche installer une machine virtuelle Windows pour certains logiciels (principalement SolidEdge), j'ai entendu dire que Parallels Desktop était très bien si vous avez le budget.
(Sinon voilà un tuto pour le cracker : https://www.highapproach.com/parallels-for-free/)
Autrement, il vous sera possible de faire tourner SolidEdge sur un PC de la salle info, ou sur le bureau virtuel qui est fourni par l'INSA.`);
                return;
            case message.content.includes("quantic"):
                sendMessage(message.channel_id, `**Quantic**
Si vous voulez une connexion Internet filaire, vous allez devoir passer chez Quantic. En effet, ils ont passé un partenariat avec l'INSA et donc ont le monopole sur la connexion filaire dans les bâtiments.
L'abonnement coûte 120€/an, ce qui est très peu cher comparé aux autres fournisseurs, mais c'est car vous n'avez pas réellement d'accès à Internet, tout passe par leur serveur.
Mais il y a une méthode pour pouvoir partager l'abonnement avec son coturne !

Même si vous ne voulez pas partager l'abonnement, cette méthode permet aussi de mettre tous vos appareils en Wi-Fi, et de ne pas avoir à vous reconnecter souvent.
Elle permet aussi de faire un sous-réseau que vous gérer, ce qui est très pratique pour l'automatisation par exemple.

__**Matériel nécessaire :**__
- Un routeur Wi-Fi (j'utilise un Asus RT-AX55, mais n'importe quel routeur fera l'affaire tant qu'il supporte l'émulation d'adresse MAC)

__**Procédure :**__
> Voir le message : https://discord.com/channels/1107715043849670780/1118514138902179954/1123645316990771300

Cette méthode marche très bien. Sachez juste que partager votre abonnement est techniquement interdit par Quantic, mais ils ne peuvent pas le savoir.
Je ne connais personne qui s'est fait prendre, et je ne pense pas que ça arrivera. En revanche, vous pouvez recevoir un mail si votre taux de téléchargement est anormalement élevé.
Un de mes amis a reçu ce mail il y a quelques années après avoir leech et seedé 4 To en un mois (respect franchement).`).then(() => {
    sendMessage(message.channel_id, `**Aparté sur la Quantic Box**
La Quantic Box est un routeur Wi-Fi vendu 20€ par Quantic, qui permet juste d'avoir accès au Wi-Fi.
Si vous voulez mon avis, c'est une arnaque monumentale, c'est juste un routeur chinois obsolète à 10€ qu'ils ont castré pour pas que vous puissez le contrôler.
Donc si quelqu'un veut se connecter à votre réseau, il lui faudra un compte Quantic quand même. (et donc payer 120€/an)
Par pitié ne l'achetez pas, en plus ils mettent 2 mois à les livrer, vous pouvez trouver des routeurs à 15€ sur Amazon (Xiaomi, TP-Link, Asus, Netgear, etc.) qui seront bien mieux.
            
__**Si vous avez des questions, n'hésitez pas à mentionner <@446685950383226886>**__`)
})
                return;
            default:
                return;
        }
    }
}