const express = require('express');

const Projects = require('../data/helpers/projectModel');
const Actions = require('../data/helpers/actionModel');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    Projects.get()
    .then(project => {
        res.status(200).json(`We Found them! ${project}`)
    })
    .catch(error => {
        console.log(error);
        res.status(404).json(`We can't find ANYTHING!!!!`)
    })
});
