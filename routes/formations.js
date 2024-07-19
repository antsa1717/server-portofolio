const express = require('express');
const router = express.Router();
const cors = require('cors');

router.get('/', cors(), async (req, res, next) => {
    return res.status(200).json([
        {
            "id": 1,
            "title": "Etudes",
            "study": [
                {
                    title: 'Lycee Andohalo : 2012 - 2013',
                    diploma: 'BACC serie A2'
                },
                {
                    title: 'IS - info (Université Supérieur) : 2013 - 2017',
                    diploma: 'echnicien supérieur en informatique'
                },
                {
                    title: 'GSI : 2017',
                    diploma: 'Certificat  création de site web'
                }
            ]
        },
        {
            "id": 2,
            "title": "Expériences professionnelles",
            "study": [
                {
                    title: 'wiclick : 2017 - 2018',
                    desc: 'Maintenance site et intégration de contenue web'
                },
                {
                    title: 'ODiTY - ODL : 2019 - ...',
                    desc: 'Intégrateur web'
                }
            ]
        }
    ])
});

module.exports = router;