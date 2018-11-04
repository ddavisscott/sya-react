/**
 * Created by Zeeshan on March 27, 2018.
 */

//------------------------------------------------------
//LATEST-ANSWER @ March-2018 [ES8 STYLE]
//multi-part direct upload to s3 without saving on local disk
//Web Link=> http://stackoverflow.com/a/35902286/3539857
//OTHER IMPLEMENTATIONS=> see app.js in current directory
//Run : node app.js
//------------------------------------------------------

//https://stackoverflow.com/questions/40494050/uploading-image-to-amazon-s3-using-multer-s3-nodejs

const express = require('express'); //"^4.13.4"
const aws = require('aws-sdk'); //"^2.2.41"
const bodyParser = require('body-parser');
const multer = require('multer'); // "^1.3.0"
const multerS3 = require('multer-s3'); //"^2.7.0"

aws.config.update({
    secretAccessKey: 'YsC+Lifz1eqIIOIsg/4L/DEkCN4A2vKmjkcUnPWb',
    accessKeyId: 'AKIAIXBCOED6DBXG43AA',
    region: 'us-west-1'
});

const app = express();
const s3 = new aws.S3();
var imgURL; 

//calling app.whatever may be a problem now since this file is renamed.
app.use(bodyParser.json());

const upload = multer({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: 'sya-react-sample-image',
        key: function (req, file, cb) {
            console.log(file);
            imgURL = "https://s3-us-west-1.amazonaws.com/sya-react-sample-image/" + file.originalname;
            console.log(imgURL);
            cb(null, file.originalname); //use Date.now() for unique file keys
        }
    })
});

//open http://localhost:3000/ in browser to see upload form 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//used by upload form
app.post('/upload', upload.array('upl',1), (req, res, next) => {
    res.send("Uploaded!");
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

var username = Auth.currentAuthenticatedUser().username

console.log('starting writeURLtoDB function');

//const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-1'});

exports.handler = function (e, ctx, callback) {
    
    var params = {
        Item: {
            User: username, // User/URL should be string? ("User", "URL")
            URL: imgURL
        } ,
        TableName: artistImageTable
    };
    
    docClient.put(params, function(err, data){
        if (err) {
            callback(err,null);
        } else {
            callback(null,data);
        }
    });
}



//------------------------------------------------------
//NEW-ANSWER @ DEC-2016 [ES5 STYLE]
//------------------------------------------------------

/* SEE app.js in current directory Line#13*/