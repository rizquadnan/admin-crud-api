import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // HEALTH CHECK
  @Get('/')
  healthCheck() {
    return this.appService.healthCheck();
  }
}
