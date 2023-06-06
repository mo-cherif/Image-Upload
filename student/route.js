import {Router}  from 'express';

const studentRouter = Router();

/**
 * Student
 */
studentRouter.post("/student", () => {})
studentRouter.get("/studentImage/:id", () => {})
studentRouter.put("/studentImage/:id", () => {})
studentRouter.delete("/studentImage/:id", () => {})

export default studentRouter;