import { Injectable } from '@nestjs/common';
import { Repository, FindManyOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../../database/entities/user.entity';


@Injectable()
export class UsersService {
	constructor(@InjectRepository(UsersEntity) private readonly repository: Repository<UsersEntity>) { }

	findValidateUser(name: string) {
		return this.repository.createQueryBuilder('account').select().addSelect('account.password').where({ name }).getOne();
	}

	findOne(name: string) {
		return this.repository.findOne({ name });
	}

	find(options: FindManyOptions) {
		return this.repository.find(options)
	}

	signUp(body: any) {
		return this.repository.insert(body);
	}
}
