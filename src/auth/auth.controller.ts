import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guard/passport-local.guard';
import { JwtGuard } from './guard/passport-jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalGuard)
  @Post('login')
  login(@Request() request) {
    return this.authService.singIn(request.user);
  }

  @UseGuards(JwtGuard)
  @Get('me')
  getUserInfo(@Request() request) {
    return request.user;
  }
}
