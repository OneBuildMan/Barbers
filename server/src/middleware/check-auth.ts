import jwt, { Secret } from 'jsonwebtoken';
import express, { Response , NextFunction} from 'express';

export interface Request {
    userData: jwt.Jwt & jwt.JwtPayload & void
}

export default (req: any, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization!.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY as Secret);
        req.userData = decoded;
        next();
    } catch (e) {
        res.status(401).json({
            message: 'Auth failed'
        });
    }
};