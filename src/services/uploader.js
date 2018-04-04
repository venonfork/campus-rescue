/* jshint esversion : 6 */
const multer = require('multer');

// configuration de la destination
// du stockage des fichiers uploadés
// le dossier ./static/uploads/ est créé automatiquement
const storage = multer.diskStorage({
  destination: "./static/uploads/",
  filename: (req, file, clbk) => {
    clbk(null, Date.now() + "_" + file.originalname);
  }
});
// filtre des fichiers (on ne garde que les images...)
const filter = (req, file, clbk) => {
  console.log("in file filter");
  console.log(file);

  if (!file.mimetype.match("image/")) {
    clbk(null, false);
  } else {
    clbk(null, true);
  }
};
// on exécute multer avec ces options
const uploader = multer({
  fileFilter: filter, // une fonction
  limits: 2097152, // en octet
  storage: storage, // un objet
});
// multer configuré est exporté
module.exports = uploader;
