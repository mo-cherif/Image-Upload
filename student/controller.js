const uploadImage = (req,res) => {
    const file = req.file;
    console.log(file);
    return res.status(200).send({Message: "file uploaded"})
}

export default uploadImage;