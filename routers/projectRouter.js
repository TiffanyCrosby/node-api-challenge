const express = require('express');

const Projects = require('../data/helpers/projectModel');
const Actions = require('../data/helpers/actionModel');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
    Projects.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        console.log(error);
        res.status(404).json(`We can't find ANYTHING!!!!`)
    })
});

router.get('/:id',  (req, res) => {
    Projects.get(req.params.id)
    .then(project => {
      if(!project){
        res.status(404).json({ errorMessage: "The user with the specified ID does not exist." })
      } else {
        res.status(200).json(project)
      }
    })
  });


//   function validateProjectId(req, res, next) {
//         Projects.get(req.params.id)
//         .then(project => {
//             if (!user){
//                 res.status(400).json({ errorMessage: "Invalid user ID" })
//             } else {
//                 req.project = project;
//                 next();
//         }
//         })
//   }

module.exports = router;