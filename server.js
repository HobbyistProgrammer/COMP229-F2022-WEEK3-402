/**
 * npm install body-parser cookie-parser ejs express-session morgan
 * 
 * 
 */
console.log('Server running at http://localhost:3000');

import debug from 'debug';
debug('COMP-229');
import http from 'http';

import app from './app/app.js';
const PORT = process.env.PORT || 3000;
app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT);