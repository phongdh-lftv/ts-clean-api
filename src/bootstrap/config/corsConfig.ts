import { CorsOptions } from 'cors';

// Define CORS options
const corsOptions: CorsOptions = {
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ['Content-Type', 'Authorization'],
};

export default corsOptions;
