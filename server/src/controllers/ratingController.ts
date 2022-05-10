import { Response, Request } from 'express'
import Rating from '../models/Rating'

export const getRating = async(req: Request, res: Response): Promise<Response> => {
    try{
        const result = await Rating.find({rezId: req.params.id});

        return res.status(200).json(result);
    }catch(err){
        return res.status(404).json(err);
    }
}

export const uploadRating = async(req: Request, res: Response): Promise<Response> => {
    try{

        const rating = new Rating(req.body);
        const result = await rating.save();
        
        return res.status(200).json(result);

    }catch(err){
        return res.status(404).json(err);
    }
}