import { JsonController, Get } from 'routing-controllers';

@JsonController('')
export class HelloworldController {

  @Get('/')
  hello() {
    return {msg: 'Hello world', code: 200};
  }
}
