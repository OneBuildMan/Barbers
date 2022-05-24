import { Router } from "express";
import { getRating, uploadRating } from "../controllers/ratingController";

export const ratingRouter: Router = Router();

reviewRouter.get('/rating/:id', getRating);
reviewRouter.post('/rating',uploadRating);