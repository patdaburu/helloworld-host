import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as logger from 'morgan';
// If you need the path module to find your UI files, uncomment the line below.
// import * as path from 'path';


// TODO: Import your routers...


/**
 * This is the primary server class.
 */
export class Server {
    /**
     * This is the Express application object.
     */
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    /**
     * Perform general configuration on the Express application.
     */
    public config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(helmet());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(cors());
    }

    /**
     * Set up the routes.
     */
    public routes(): void {
        let router: express.Router;
        router = express.Router();
        this.app.use('/', router);

        // TODO: Set up routes here...
        this.app.get('*', (req, res) => {
            res.send('It worked!  Now remove this handler and modify your server setup.');
        });
        // Here are some examples...
        // this.app.use('/nertz/api/version/service1', MyRouter1);
        // this.app.use('/nertz/api/version/service2', MyRouter2);

        // If you have an UI component, you can uncomment the lines below.
        /*
        // Angular dist output folder.
        this.app.use(express.static(path.join(__dirname, 'path/to/dist')));
        // Send all other requests to the Angular app.
        this.app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'path/to/dist/index.html'));
        });
        */
    }
}

export default new Server().app;
