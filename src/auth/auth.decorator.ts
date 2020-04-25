import { createParamDecorator } from '@nestjs/common';

/**
	 * @description 認証でreqにattachされたuserを返す
	 * @param data data郡
	 * @param req requestに関するobject
	 * @returns local戦略の時はuserでjwtの時はuserIdが入る
	 */
export const Auth = createParamDecorator((data, req) => {
	return req.user;
});