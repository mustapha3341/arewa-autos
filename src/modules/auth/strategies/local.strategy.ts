import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import type { LoginCredentials } from '../dtos/login.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authServie: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(credentials: LoginCredentials) {
    const { email, password } = credentials;
    const user = { email: 'mustapha3341@gmail.com', password: 'password' };

    if (email === user.email && password === user.password) {
      return user;
    }

    throw new UnauthorizedException('Invalid login credentials');
  }
}
