import { Body, Controller,Get, HttpStatus, Post, Res } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CreatCatDTO } from "./cats.createCatDTO";
import { Response } from "express";
import { Cat } from "src/interfaces/cat.interface";

@Controller('cats')

export class CatsController{
    constructor(private readonly catsService: CatsService){}

    @Post('addCat')
    createCats(@Body() createCatDTO: CreatCatDTO){
        return this.catsService.createCat(createCatDTO);
    }

    @Post('c')
    crete(@Res() res:Response){
        res.status(HttpStatus.CREATED).send();
    }
    @Get()
    async findAllCats(): Promise<Cat[]>{
        return this.catsService.findAllCats();
    }

}