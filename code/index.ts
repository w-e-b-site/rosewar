import express, { Express, Request, Response, NextFunction } from 'express';

const app: Express = express();

// app.set('port', PORT || 8080);

app.listen(3000, () => {
    console.log(`Runninng :: http://localhost:3000`)
});