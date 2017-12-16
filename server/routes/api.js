const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/ckeditor', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get Doc
router.get('/doc', (req, res) => {
    connection((db) => {
        db.collection('doc')
            .find()
            .toArray()
            .then((docs) => {
                response.data = docs;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//Save Doc

router.post('/savedoc', (req,res)=>{
    connection((db) => {
        db.collection('doc')
            .save(req.body)
            .toArray()
            .then((docs) => {
                console.log(docs)
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
})

module.exports = router;