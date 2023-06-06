import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})

const uploadImage = (req,res) => {
    const upload = multer({ storage: storage })
    upload(req, res, (err) => {
        if(err) {
            return res.status(500).send({message: "Failed to upload the image."});
        }

        return res.status(200).send({message: "Image uploaded successfully."});
    })
}

export default uploadImage;