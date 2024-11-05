import { Body, Controller,Get, Post } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CreatCatDTO } from "./cats.createCatDTO";

@Controller('cats')

export class CatsController{
    constructor(private readonly catsService: CatsService){}

    @Post('addCat')
    createCats(@Body() createCatDTO: CreatCatDTO):object{
        return this.catsService.createCat(createCatDTO);
    }
    @Get()
    findAllCats():string{
        return this.catsService.findAllCats();
    }
}