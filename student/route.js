import {Router}  from 'express';
import multer from "multer";
import uploadImage from './controller.js';
import storage from '../configurations/storage.js';

const upload = multer({storage: storage});
const studentRouter = Router();

/**
 * Student
 */
studentRouter.post("/student", upload.single('x'), uploadImage)

studentRouter.get("/student", () => {});
studentRouter.put("/studentImage/:id", () => {})
studentRouter.delete("/studentImage/:id", () => {})

export default studentRouter;