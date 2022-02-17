const multer  = require('multer');
const path  = require('path');


const types = ['image/png', 'image/jpeg', 'image/jpg']

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '../public/images') )
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()+ '-' + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  if(types.includes(file.mimetype)){
    return cb(null, true)
  }
  cb(null, false)
}


module.exports.upload = multer({ storage, fileFilter }).single('image')

