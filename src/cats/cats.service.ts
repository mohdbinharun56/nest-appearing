import { Injectable } from "@nestjs/common";
import { CreatCatDTO } from "./cats.createCatDTO";

@Injectable()
export class CatsService{
    createCat(createCatDTO:CreatCatDTO):object{
        createCatDTO = {
            name: "picaso",
            age: 20,
            breed: "fish"
        }
        return createCatDTO;

    }
    findAllCats():string[]{
        return ['picaso','miniso','shipu'];
    }
}