// we declared all our imports
const express = require("express");
const app = express();
const fs = require("fs");
const multer = require("multer");
const { TesseractWorker } = require("tesseract.js")
const worker = new TesseractWorker();
var verification = "DEPARTMENT OF STATE SY C FOR VOTING PURPOSES ONLY F = o' FRANCESCA SAMPLE p i DOB: 0112/1967 oo) & Issue Date: 01/12/2012 | w SB Expiration Date: 01/31/2022 2 7 4 CONFIRMED REGISTERED VOTER & RZ AS OF ISSUE DATE Yomeoca Sample 99 999 999";

//storage
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "./uploads")
    },
    filename: (req,file,cb) => {
        cb(null, file.originalname);
    }   
});
const upload = multer({storage: storage}).single("avatar");

app.set('view engine', "ejs");

//routes

app.get('/', (req,res) => {
    res.render('index');
});

app.post('/upload', (req,res) => {
    upload(req,res, err =>{
        fs.readFile(`./uploads/${req.file.originalname}`, (err, data) => {
            if(err) return console.log('This is your error', err);

            worker
            .recognize(data, "eng", {tessjs_create_pdf: '1'})
            .progress(progress => {
                console.log(progress);
            })
            .then(result => {
                res.send(result.text);
                if (result === verification){
                    console.log('Yes')
                } else {
                    console.log('nah')
                }    
                //res.redirect('/download') // new update
            })
            .finally(() => worker.terminate());
        })
    })
});

app.get('/download', (req,res) => {
    const file = `${__dirname}/tesseract.js-ocr-result.pdf`;
    res.download(file);
});


//start up our server
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`Hey I'm running on port ${PORT}`));