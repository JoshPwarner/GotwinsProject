const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const { readFileSync, writeFileSync, readFile, writeFile } = require('fs');  
const jsonfile = require('jsonfile')
const allJsonData = require('../../data.json');

async function writeJSONCareer(postData){
    let data = await jsonfile.readFile('../data.json', 'utf8');
    
        data.allPosts.career.posts.push(postData)
        await jsonfile.writeFile('../data.json', data);

}

async function writeJSONCareerComments(postData, reqId){
    let data = await jsonfile.readFile('../data.json', 'utf8');
    reqId = parseInt(reqId) - 1;
    data.allPosts.career.posts[reqId].comments.push(postData);
    await jsonfile.writeFile('../data.json', data);

}



async function writeJSONFamily(postData){
    let data = await jsonfile.readFile('../data.json', 'utf8');
    
        data.allPosts.family.posts.push(postData)
        await jsonfile.writeFile('../data.json', data);

}


async function writeJSONRelationships(postData){
    let data = await jsonfile.readFile('../data.json', 'utf8');
    
        data.allPosts.relationships.posts.push(postData)
        await jsonfile.writeFile('../data.json', data);

}

async function writeJSONGeneral(postData){
    let data = await jsonfile.readFile('../data.json', 'utf8');
    
        data.allPosts.general.posts.push(postData)
        await jsonfile.writeFile('../data.json', data);

}



function readJSONCareer() {
    let wholeFile = readFileSync('../data.json', 'utf8');
    wholeFile = JSON.parse(wholeFile);
    return wholeFile.allPosts.career;

}

function readJSONFamily() {
    let wholeFile = readFileSync('../data.json', 'utf8');
    wholeFile = JSON.parse(wholeFile);
    return wholeFile.allPosts.family;

}

function readJSONRelationships() {
    let wholeFile = readFileSync('../data.json', 'utf8');
    wholeFile = JSON.parse(wholeFile);
    return wholeFile.allPosts.relationships;

}


function readJSONGeneral() {
    let wholeFile = readFileSync('../data.json', 'utf8');
    wholeFile = JSON.parse(wholeFile);
    return wholeFile.allPosts.general;

}


router.use(cors());

router.use(express.json());

router.get('/', (req, res) => {
    res.json();
})

router.get('/career', (req, res) => {
    res.send(readJSONCareer());
})

router.post('/career', urlEncodedParser, (req, res) => {
    const { time, postID, category, story, comments, reactions, gifs } = req.body;
    let postData  = req.body;
    writeJSONCareer(postData);

})

router.get('/career/:id', (req, res) => {
    try {
        const idNumber = parseInt(req.params.id);
        res.send(allJsonData.allPosts.career.posts[idNumber - 1]);
    } catch {
        res.send(err);

    }
    

})

router.get('/career/:id/comments', (req, res) => {
    try {
        const idNumber = parseInt(req.params.id);
        res.send(allJsonData.allPosts.career.posts[idNumber - 1].comments);
    }
    catch {
        res.send(err);

    }
})

router.post('/career/:id/comments', urlEncodedParser, (req, res) => {
    try {
        const { comment, postID } = req.body;
        console.log(comment);
        writeJSONCareerComments(comment, postID);
    }
    catch {
        console.log(err);
    }

    
})

router.get('/family', (req, res) => {
    res.send(readJSONFamily());


})

router.post('/family', urlEncodedParser, (req, res) => {
    const { time, postID, category, story, comments, reactions, gifs } = req.body;
    let postData  = req.body;
    writeJSONFamily(postData);
})

router.get('/relationships', (req, res) => {
    res.send(readJSONRelationships());
})

router.post('/relationships', urlEncodedParser, (req, res) => {
    const { time, postID, category, story, comments, reactions, gifs } = req.body;
    let postData  = req.body;
    writeJSONRelationships(postData);
})

router.get('/general', (req, res) => {
    res.send(readJSONGeneral());
})

router.post('/general', (req, res) => {
    const { time, postID, category, story, comments, reactions, gifs } = req.body;
    let postData  = req.body;
    writeJSONGeneral(postData);

})


router.all('*', (req, res) => {
    res.send(`<h1>Error, broken URL</h1>`);
})

module.exports = router;