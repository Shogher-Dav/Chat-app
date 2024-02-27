import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('apiv1')
export class AppController {
  constructor() {}

  @UseGuards(AuthGuard('local'))
  @Post('signin')
  async login(@Request() req) {
    console.log(req.body);
    return req.body;
  }
}
