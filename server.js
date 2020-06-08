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
server.use('/api/actions', actionRouter);

server.use(notFound);

module.exports = server;

