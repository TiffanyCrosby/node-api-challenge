const express = require('express');
const helmet = require('helmet');
// const Projects = require('./data/helpers/projectModel');
// const Actions = require('./data/helpers/actionModel');

const projectRouter = require('./routers/projectRouter');
const actionRouter = require('./routers/actionRouter');

const server = express();

server.use(helmet());
server.use(logger);
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json(`Success!!!! It's working!!!! From the server!`)
});

server.use('/api/projects', projectRouter);
// server.use('/api/actions', actionRouter);

server.use(notFound);

function logger(req, res, next){
    const method = req.method;
    const endpoint = req.originalUrl;
    
    console.log(`${method} to ${endpoint} ${base} at ${new Date().toISOString()}`);
    next();
}

function notFound(req, res, next){
    res.status(404).json({errorMessage: "Oops, we didn't find what you're looking for!"})
}

module.exports = server;

