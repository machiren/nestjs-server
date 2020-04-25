import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
	constructor(private readonly authService: AuthService) {
		super({
			usernameField: 'name',
			passwordField: 'password',
		});
	}

	/**
	 * @description パスワードが一致していれば認証成功
   * @param name bodyのname
	 * @param password bodyのpassword
   */
	async validate(name: string, password: string): Promise<any> {
		const account = await this.authService.validate(name, password);
		if (!account) {
			throw new UnauthorizedException('ユーザーネームかパスワードが間違っています', 'Unauthorized');
		}
		return account;
	}
}
