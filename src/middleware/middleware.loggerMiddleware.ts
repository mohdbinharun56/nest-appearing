import { NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

export class LoggerMiddleware implements NestMiddleware{
    use(req:Request , res:Response, next:NextFunction){
        console.log('Request...',req.method);
        console.log('Request...',req.url);
        next();
    }
}