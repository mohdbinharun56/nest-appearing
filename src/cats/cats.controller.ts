import { Body, Controller,Get, HttpStatus, Post, Res } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CreatCatDTO } from "./cats.createCatDTO";
import { Response } from "express";

@Controller('cats')

export class CatsController{
    constructor(private readonly catsService: CatsService){}

    @Post('addCat')
    createCats(@Body() createCatDTO: CreatCatDTO):object{
        return this.catsService.createCat(createCatDTO);
    }

    @Post('c')
    crete(@Res() res:Response){
        res.status(HttpStatus.CREATED).send();
    }
    @Get()
    findAllCats():string[]{
        return this.catsService.findAllCats();
    }

}