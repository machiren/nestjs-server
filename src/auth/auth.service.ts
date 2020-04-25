import { Injectable } from '@nestjs/common';
import { UsersService } from '../modules/users/users.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(private readonly jwtService: JwtService, private readonly usersService: UsersService) { }

	/**
	 * @description localStrategy内でで呼ばれる認証メソッド
   * @param name bodyのname
	 * @param password bodyのpassword
   */
	async validate(name: string, password: string) {
		const user = await this.usersService.findValidateUser(name);
		if (user && compareSync(password, user.password)) {
			const { password, ...result } = user;
			return result;
		} else {
			return null;
		}
	}

	/**
	 * @description 認証に成功したuserのidをjwtTokenにしてresponseする
   * @param user 認証に成功したuser情報
   */
	signIn(user: any) {
		return {
			accessToken: this.jwtService.sign({
				sub: user.id,
				iss: process.env.API_ORIGIN,
				id: user.id,
			})
		};
	}
}
