import { Router } from "express";
import { getRating, uploadRating } from "../controllers/ratingController";

export const ratingRouter: Router = Router();

ratingRouter.get('/rating/:id', getRating);
ratingRouter.post('/rating',uploadRating);