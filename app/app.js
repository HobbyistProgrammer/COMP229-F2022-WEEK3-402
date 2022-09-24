// import express
import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

// ES Modules fix for __dirname
import path, {dirname} from 'path';
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// Import Router
import indexRouter from './routes/index.route.server.js';

// instantiate app-server
const app = express();

//setup ViewEngine VJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Way for express to understand different URL's (Mac, windows).

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public'))); 
// secret encrypts local data
app.use(session({
    secret: 'MySecret',
    saveUninitialized: false,
    resave: false
}));

app.use('/', indexRouter);

export default app;