import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World NEST JS!';
  }

  async getAsync():Promise<number>{
    const a = 3;
    const b =1;
    const c = await this.add(a,b); 
    return c;
  }

  async add(a:number,b:number):Promise<number>{
    return a+b;
  }

  findUserWithId(id:number):number{
    return id;
  }
}
