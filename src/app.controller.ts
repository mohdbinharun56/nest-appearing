import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}
  // Get method
  @Get()
  getHello(): string {
    // return "All the users";
    return this.appService.getHello();
  }

  // Async Await and Promise
  @Get('async')
  async getAsync():Promise<number>{
    return this.appService.getAsync();
  }
}

