const express = require('express');
const router = express.Router();
const cors = require('cors');

router.get('/', cors(), async (req, res, next) => {
    return res.status(200).json([
        {
            "id" : 1,
            "titleSite":"Telegramme",
            "descSite":"Le panel des lecteurs du Télégramme est une communauté de lecteurs du Télégramme qui souhaitent faire entendre leur voix, en répondant à des enquêtes en ligne. Les membres de ce panel seront interrogés sur des sujets variés tels que leur avis sur des contenus, des offres, des couvertures… Cela permet au Télégramme de mieux cerner les attentes de ses lecteurs.",
            "linkSite":"https://panel-letelegramme.fr/accueil/",
            "image":"https://res.cloudinary.com/demuk3vws/image/upload/v1721400661/ltnityjlmbyivxcmqfl8.webp"
         },
         {
            "id" : 2,
            "titleSite":"Sudouest",
            "descSite":"Le Panel Sud Ouest est constitué de lecteurs qui donnent leur avis grâce à un système d’enquêtes en ligne. L’objectif de SUD OUEST est de connaître les attentes des lecteurs pour pouvoir y répondre au mieux.",
            "linkSite":"https://panels.odity.net/sudouest/",
            "image":"https://res.cloudinary.com/demuk3vws/image/upload/v1721400661/edq2kq4i5tjb691k9bw0.webp"
         },
         {
            "id" : 3,
            "titleSite":"Figaro",
            "descSite":"Les Enquêtes du Figaro et TV Magazine sont l’occasion pour des lecteurs des publications du Figaro de nouer un dialogue avec nos journaux et nos sites Internet grâce à un système d’enquêtes en ligne. Les lecteurs membres sont interrogés régulièrement sur des sujets éditoriaux ou d’actualité, mais également sur leur style de vie, leurs habitudes culturelles ou leurs habitudes de consommation.",
            "linkSite":"https://lesenquetesdufigarotvmagazine.fr/",
            "image":"https://res.cloudinary.com/demuk3vws/image/upload/v1721400661/mectgeao4xm5cswcq7tl.webp"
         }
    ])
})

module.exports = router;