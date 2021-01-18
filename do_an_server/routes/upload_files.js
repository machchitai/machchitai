const multer = require("multer");
var express = require('express');
var router = express.Router();
const path = require("path");
var fs = require('fs');

const upload = multer({
    dest: "../public/images/"
});
  

router.post('/', upload.single("upload_file_input"), (req, res) => {
    var tempPath = req.file.path;
    //const targetPath = path.join(__dirname, "./uploads/image.png");
    var pathSave = path.join(__dirname, '../public/images/uploads/image.jpg');

    console.log(tempPath);

    try{
        fs.renameSync(tempPath, pathSave);        
    }
    catch(err){
        console.log(err);
    }

    res.send('send file successfull ' + pathSave);
});

router.get('/', (req, res) => {
    
    res.send('get upload');
})

module.exports = router;