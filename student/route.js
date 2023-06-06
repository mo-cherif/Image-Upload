import {Router}  from 'express';
import multer from "multer";
import uploadImage from './controller';

// Multer configuration
const upload = multer();

const studentRouter = Router();

/**
 * Student
 */
studentRouter.post("/student", upload.single('image'), uploadImage)
studentRouter.get("/studentImage/:id", () => {})
studentRouter.put("/studentImage/:id", () => {})
studentRouter.delete("/studentImage/:id", () => {})

export default studentRouter;