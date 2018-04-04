/* jshint esversion : 6 */
// ./src/api/file.js

module.exports = (app) => {

  const fs = require("fs");
  const uploaderService = require("./../services/uploader");
  const uploader = uploaderService.single('image_upload');
  // ci-dessus, "image_upload" correspond au name envoyé dans le formdata par le client !

  const fileAPI = (app) => {

    app.get('/file/uploads', (req, res) => {
      fs.readdir("./static/uploads", (err, files) => {
        if (err) throw new Error(err);
        res.status(200).send(files);
      });
    });

    app.post('/file/upload', uploader, (req, res) => {
      if (!req.file) { // pas de fichier reçu, retour au client
        return res.status(400).send({message: "No file received"});
      } else { // fichier ok
        uploader(req, res, (err) => { // multer lance l'upload
          if (err) { // si une erreur survient pendant l'upload...
            return res.status(500).send({message: "Error during upload"});
          } // si tout s'est bien passé ...
          res.status(201).send({message: "file received"});
        });
      }
    });
  };

  return fileAPI(app);

};
