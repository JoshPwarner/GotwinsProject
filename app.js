const express = require('express');
const app = express();
const cors = require('cors');
const postsAndComments = require('./postsAndComments');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const port = process.env.PORT || 5000
const path = require("path");


app.use('/api/posts', postsAndComments);

app.use(express.urlencoded({extended: false}));



// app.use(cors({
//     origin: 'http://127.0.0.1:5500'
// }));

app.use(cors());

app.use(express.json());

app.use('/', express.static('./index.html'));

app.get('/', (req, res) => {
    res.send(path.resolve(__dirname, './index.html'));
})



app.listen(port, () => {
    console.log(`This server is now running at port ${port}`);
})