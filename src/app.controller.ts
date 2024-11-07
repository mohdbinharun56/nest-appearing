import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user') // controller decorator that's make this file a base of Controller. This is contains all of the application routes and recieve the request from the client/server.
export class AppController {
  constructor(private readonly appService: AppService) {}
  // Get method
  @Get() // HTTP GET method
  getHello(): string { //route for HTTP get request 
    // return "All the users";
    return this.appService.getHello();
  }

  // Async Await and Promise
  @Get('async')
  async getAsync():Promise<number>{ // this is asynchronous mthod. 
    return await this.appService.getAsync();
  }

  // Route Parameter
  @Get(':id')
   findUserWithId(@Param('id') id:any):number{ // Dynamic programming. Used the path here dynamically change denpends on ID of Parameter. Here @Param() is used to take the properties from the url which is dynamically used. it's actually adopt a properti name which are same as url variable name exactly.
    console.log(id);
    return  this.appService.findUserWithId(id); 
  }
}

