const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const postsAndComments = require('./controllers/postsAndComments');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const posts = require('./data');


app.use('/api/posts', postsAndComments);

app.use(express.urlencoded({extended: false}));



// app.use(cors({
//     origin: 'http://127.0.0.1:5500'
// }));

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is my axios test homepage');
})


app.listen(port, () => {
    console.log(`This server is now running at port ${port}`);
})