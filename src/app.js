import express from 'express';
import { PORT } from './config';
const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido al servidor')
})

app.listen(PORT);
console.log('Server on port', PORT);