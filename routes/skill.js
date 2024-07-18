const express = require("express");
const router = express.Router();
const cors = require('cors');

router.get('/', cors(), async (req, res, next) => {
    return res.status(200).json([
        {
            "id": 1,
            "title": "Language",
            "icon": "fa-solid fa-code",
            "skills": [
                {
                    title: 'JS',
                    desc: 'Jquery, React , Angular 1.0'
                },
                {
                    title: 'CSS',
                    desc: 'Bootstrap, Materialize, Bulma, Tailwindcss, Knacss'
                }
            ]
        },
        {
            "id": 2,
            "title": "Outils",
            "icon": "fa-solid fa-gear",
            "skills": [
                {
                    title: 'JS',
                    desc: 'Gulp, webpack'
                },
                {
                    title: 'Préprocesseur css',
                    desc: 'Sass, Scss, Less'
                },
                {
                    title: 'Template php',
                    desc: 'Twig, pug'
                },
                {
                    title: 'Outils de versionning',
                    desc: 'Git , gitlab, github, svn , tortoiseSvn'

                },
                {
                    title: 'Design',
                    desc: 'Photoshop, Lightroom, CorelDraw, Avocode, adobe XD'
                }
            ]
        },
        {
            "id": 3,
            "title": "Cms",
            "icon": "fa-solid fa-laptop-code",
            "skills": [
                {
                    title: 'Cms',
                    desc: 'Wordpress, Prestashop'
                }
            ]
        }
    ]
    )
});

module.exports = router;