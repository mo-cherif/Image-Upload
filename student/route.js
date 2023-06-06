import {Router}  from 'express';
import multer from "multer";
import uploadImage from './controller.js';

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

const studentRouter = Router();

/**
 * Student
 */
studentRouter.post("/student", upload.single('x'), uploadImage)

studentRouter.get("/student", (req,res) => {
    console.log(" getting student 😁");
    res.json({message: "hello"}).status(200);
});
studentRouter.put("/studentImage/:id", () => {})
studentRouter.delete("/studentImage/:id", () => {})

export default studentRouter;