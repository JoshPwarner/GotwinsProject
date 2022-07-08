const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const { readFileSync, writeFileSync, readFile, writeFile } = require('fs');  
const jsonfile = require('jsonfile')
const allJsonData = require('./data.json');

async function writeJSONCareer(postData){
    let data = await jsonfile.readFile('./data.json', 'utf8');
    
        data.allPosts.career.posts.push(postData)
        await jsonfile.writeFile('./data.json', data);

}

async function writeJSONCareerComments(postData, reqId){
    let data = await jsonfile.readFile('./data.json', 'utf8');
    reqId = parseInt(reqId) - 1;
    data.allPosts.career.posts[reqId].comments.push(postData);
    await jsonfile.writeFile('./data.json', data);

}



async function writeJSONFamily(postData){
    let data = await jsonfile.readFile('./data.json', 'utf8');
    
        data.allPosts.family.posts.push(postData)
        await jsonfile.writeFile('./data.json', data);

}

async function writeJSONFamilyComments(postData, reqId){
    let data = await jsonfile.readFile('./data.json', 'utf8');
    reqId = parseInt(reqId) - 1;
    data.allPosts.family.posts[reqId].comments.push(postData);
    await jsonfile.writeFile('./data.json', data);

}



async function writeJSONRelationships(postData){
    let data = await jsonfile.readFile('./data.json', 'utf8');
    
        data.allPosts.relationships.posts.push(postData)
        await jsonfile.writeFile('./data.json', data);

}

async function writeJSONRelationshipsComments(postData, reqId){
    let data = await jsonfile.readFile('./data.json', 'utf8');
    reqId = parseInt(reqId) - 1;
    data.allPosts.relationships.posts[reqId].comments.push(postData);
    await jsonfile.writeFile('./data.json', data);

}

async function writeJSONGeneral(postData){
    let data = await jsonfile.readFile('./data.json', 'utf8');
    
        data.allPosts.general.posts.push(postData)
        await jsonfile.writeFile('./data.json', data);

}

async function writeJSONGeneralComments(postData, reqId){
    let data = await jsonfile.readFile('./data.json', 'utf8');
    reqId = parseInt(reqId) - 1;
    data.allPosts.general.posts[reqId].comments.push(postData);
    await jsonfile.writeFile('./data.json', data);

}



function readJSONCareer() {
    let wholeFile = readFileSync('./data.json', 'utf8');
    wholeFile = JSON.parse(wholeFile);
    return wholeFile.allPosts.career;

}

function readJSONCareerId(idNumber) {
    idNumber = idNumber - 1;
    let wholeFile = readFileSync('./data.json', 'utf8');
    wholeFile = JSON.parse(wholeFile);
    return wholeFile.allPosts.career.posts[idNumber];


}

function readJSONCareerComments(idNumber) {
    idNumber = idNumber - 1;
    let wholeFile = readFileSync('./data.json', 'utf8');
    wholeFile = JSON.parse(wholeFile);
    return wholeFile.allPosts.career.posts[idNumber].comments;

}


function readJSONFamily() {
    let wholeFile = readFileSync('./data.json', 'utf8');
    wholeFile = JSON.parse(wholeFile);
    return wholeFile.allPosts.family;

}

function readJSONFamilyId(idNumber) {
    idNumber = idNumber - 1;
    let wholeFile = readFileSync('./data.json', 'utf8');
    wholeFile = JSON.parse(wholeFile);
    return wholeFile.allPosts.family.posts[idNumber];


}

function readJSONFamilyComments(idNumber) {
    idNumber = idNumber - 1;
    let wholeFile = readFileSync('./data.json', 'utf8');
    wholeFile = JSON.parse(wholeFile);
    return wholeFile.allPosts.family.posts[idNumber].comments;

}

function readJSONRelationships() {
    let wholeFile = readFileSync('./data.json', 'utf8');
    wholeFile = JSON.parse(wholeFile);
    return wholeFile.allPosts.relationships;

}

function readJSONRelationshipsId(idNumber) {
    idNumber = idNumber - 1;
    let wholeFile = readFileSync('./data.json', 'utf8');
    wholeFile = JSON.parse(wholeFile);
    return wholeFile.allPosts.relationships.posts[idNumber];


}

function readJSONRelationshipsComments(idNumber) {
    idNumber = idNumber - 1;
    let wholeFile = readFileSync('./data.json', 'utf8');
    wholeFile = JSON.parse(wholeFile);
    return wholeFile.allPosts.relationships.posts[idNumber].comments;

}


function readJSONGeneral() {
    let wholeFile = readFileSync('./data.json', 'utf8');
    wholeFile = JSON.parse(wholeFile);
    return wholeFile.allPosts.general;

}

function readJSONGeneralId(idNumber) {
    idNumber = idNumber - 1;
    let wholeFile = readFileSync('./data.json', 'utf8');
    wholeFile = JSON.parse(wholeFile);
    return wholeFile.allPosts.general.posts[idNumber];


}

function readJSONGeneralComments(idNumber) {
    idNumber = idNumber - 1;
    let wholeFile = readFileSync('./data.json', 'utf8');
    wholeFile = JSON.parse(wholeFile);
    return wholeFile.allPosts.general.posts[idNumber].comments;

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
        res.send(readJSONCareerId(idNumber));
    } catch {
        res.send(err);

    }
    

})



router.get('/career/:id/comments', (req, res) => {
    try {
        const idNumber = parseInt(req.params.id);
        res.send(readJSONCareerComments(idNumber));
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

router.get('/family/:id', (req, res) => {
    try {
        const idNumber = parseInt(req.params.id);
        res.send(readJSONFamilyId(idNumber));
    } catch {
        res.send(err);

    }
    

})



router.get('/family/:id/comments', (req, res) => {
    try {
        const idNumber = parseInt(req.params.id);
        res.send(readJSONFamilyComments(idNumber));
    }
    catch {
        res.send(err);

    }
})

router.post('/family', urlEncodedParser, (req, res) => {
    const { time, postID, category, story, comments, reactions, gifs } = req.body;
    let postData  = req.body;
    writeJSONFamily(postData);
})

router.post('/family/:id/comments', urlEncodedParser, (req, res) => {
    try {
        const { comment, postID } = req.body;
        console.log(comment);
        writeJSONFamilyComments(comment, postID);
    }
    catch {
        console.log(err);
    }

    
})


router.get('/relationships', (req, res) => {
    res.send(readJSONRelationships());
})

router.post('/relationships', urlEncodedParser, (req, res) => {
    const { time, postID, category, story, comments, reactions, gifs } = req.body;
    let postData  = req.body;
    writeJSONRelationships(postData);
})

router.get('/relationships/:id', (req, res) => {
    try {
        const idNumber = parseInt(req.params.id);
        res.send(readJSONRelationshipsId(idNumber));
    } catch {
        res.send(err);

    }
    

})



router.get('/relationships/:id/comments', (req, res) => {
    try {
        const idNumber = parseInt(req.params.id);
        res.send(readJSONRelationshipsComments(idNumber));
    }
    catch {
        res.send(err);

    }
})

router.post('/relationships/:id/comments', urlEncodedParser, (req, res) => {
    try {
        const { comment, postID } = req.body;
        console.log(comment);
        writeJSONRelationshipsComments(comment, postID);
    }
    catch {
        console.log(err);
    }

    
})

router.get('/general', (req, res) => {
    res.send(readJSONGeneral());
})

router.post('/general', (req, res) => {
    const { time, postID, category, story, comments, reactions, gifs } = req.body;
    let postData  = req.body;
    writeJSONGeneral(postData);

})

router.get('/general/:id', (req, res) => {
    try {
        const idNumber = parseInt(req.params.id);
        res.send(readJSONGeneralId(idNumber));
    } catch {
        res.send(err);

    }
    

})



router.get('/general/:id/comments', (req, res) => {
    try {
        const idNumber = parseInt(req.params.id);
        res.send(readJSONGeneralComments(idNumber));
    }
    catch {
        res.send(err);

    }
})

router.post('/general/:id/comments', urlEncodedParser, (req, res) => {
    try {
        const { comment, postID } = req.body;
        console.log(comment);
        writeJSONGeneralComments(comment, postID);
    }
    catch {
        console.log(err);
    }

    
})


router.all('*', (req, res) => {
    res.send(`<h1>Error, broken URL</h1>`);
})

module.exports = router;