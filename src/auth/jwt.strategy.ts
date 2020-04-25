import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: process.env.SECRET,
		});
	}

	/**
	 * @description idでauthUserを取得する
   * @param payload Bearerで送られてきたjwtをdecodeしたオブジェクト
   */
	async validate(payload: { id: any }) {
		return { id: payload.id };
	}
}