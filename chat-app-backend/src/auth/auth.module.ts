import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local-strategy';

@Module({
  imports: [PassportModule, ConfigModule, UsersModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}