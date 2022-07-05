const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const posts = require('../data');
const { readFileSync, writeFileSync, readFile, writeFile }= require('fs');  
const data = require('../') 
const jsonfile = require('jsonfile')

async function writeJSON(postData){
    let data = await jsonfile.readFile('../data.json', 'utf8');
    
        data.allPosts.push(postData)
        console.log(true)
        await jsonfile.writeFile('../data.json', data);

}

function readJSON() {
    return readFileSync('../data.json', 'utf8');
}


router.use(cors());

router.use(express.json());

router.get('/', (req, res) => {
    res.json();
})

router.get('/career', (req, res) => {
    res.send(readJSON());
})

router.post('/career', urlEncodedParser, (req, res) => {
    const { title, category, story } = req.body;
    writeJSON(req.body);
    if ( title && category && story) {
        return res.send(readJSON());
    }

})


router.all('*', (req, res) => {
    res.send(`<h1>Error, broken URL</h1>`);
})

module.exports = router;