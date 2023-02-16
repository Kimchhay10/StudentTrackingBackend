import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth, AuthDocument } from 'src/models/auth.model';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from 'src/dto/signup.dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel('auth') private readonly authModel: Model<AuthDocument>,
    private jwtService: JwtService,
  ) {}
  async hashedPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }
  async getAuthByEmail(email: string): Promise<Auth> {
    return this.authModel.findOne({ email }).exec();
  }
  getAuth() {
    return this.authModel
      .find({})
      .then((auth) => {
        return auth;
      })
      .catch((err) => {
        return err;
      });
  }
  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { username, email, password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.authModel.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }
  async loginAuth(
    loginDto: LoginDto,
  ): Promise<{ email: string; token: string }> {
    const { email, password } = loginDto;
    const user = await this.authModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: user._id });
    return { email: user.email.toString(), token };
  }
}
