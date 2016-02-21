var express = require('express'),
    app = express(), 
    path = require("path"), 
    multer = require("multer"),
    upload = multer({ dest: 'uploads/' });

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.post('/', upload.single('file'), function (req, res, next) {
  console.log(req.file.size);
  res.send("{" + "\n" + "'filesize':" + JSON.stringify(req.file.size) + "\n" + "}" );
})

app.listen(8081);