import { Module } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CatsController } from "./cats.controller";

@Module({
    imports: [],
    controllers: [CatsController],
    providers:[CatsService],
    exports: [CatsService]

})

export class CatsModule{

}