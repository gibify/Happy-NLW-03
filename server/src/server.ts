import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ message: 'Hello'});
})
app.listen(3333, () => {
    console.log('Server started on port 3333');
});
