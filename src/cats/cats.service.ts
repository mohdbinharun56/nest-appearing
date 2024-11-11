import { Injectable } from "@nestjs/common";
// import { CreatCatDTO } from "./cats.createCatDTO";
import { Cat } from "src/interfaces/cat.interface";

@Injectable()
export class CatsService{
   private readonly cats: Cat[] =[];

    // createCat(createCatDTO:CreatCatDTO):object{
    //     createCatDTO = {
    //         name: "picaso",
    //         age: 20,
    //         breed: "fish"
    //     }
    //     return createCatDTO;

    // }

    createCat(cat:Cat){
        this.cats.push(cat);
        // return cats[];
    }
    
    // findAllCats():string[]{
    //     return ['picaso','miniso','shipu'];
    // }

    async findAllCats(): Promise<Cat[]>{
        return this.cats;
    }
}