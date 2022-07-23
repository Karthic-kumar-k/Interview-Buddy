const {uploadToS3} = require('../Middleware/aws'); 

module.exports = function(app){
    app.post("/uploadToS3" , async (req , res) =>{
        
        if ( !req.files || Object.keys(req.files).length === 0 ) {
            return res.status(400).send('No files were uploaded.');
          }
        
          // The name of the input field (i.e. "fileUploaded") is used to retrieve the uploaded file
          let   sampleFile = req.files.fileUploaded,
                filename   = sampleFile.name;
        
          // Use the mv() method to place the file somewhere on your server
          sampleFile.mv('./temp/'+filename, async function(err) {
            if (err)
              return res.status(500).send(err);
            
            var response = await uploadToS3(filename)
            res.send(response);
          });
    });
}