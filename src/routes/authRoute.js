const express = require("express");
const authController = require("../controller/AuthController");
const multer = require('multer');
// import Middleware
const authMidleware = require("../middleware/authMiddleware");

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads')
    },
    filename: function (req, file, cb){
        const filename = file.fieldname  + Date.now() + '-' + Math.round(Math.random() * 1E9)+'.jpg';
        req.body.profile_picture_path = filename;
        cb(null, filename);
    }
})

const upload = multer({storage: storage}) 

const router = express.Router();

//router.post('/register',upload.single('image'), authController.register);

/*router.get('/register',(req, res) => {
    res.json({message:[]});
})*/

router.post('/register', upload.single('image'), authController.register);
router.post('/login', authController.login);
router.post('/check-auth', authMidleware,authController.checkAuth);

module.exports = router;