import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true, comment: 'ユーザーのプライマリーID' })
    id: string;

    @Column({ comment: 'メールアドレス', unique: true, nullable: true })
    email?: string;


    @Column({ comment: '名前' })
    name: string;

    @Column({ comment: '暗号化したログインパスワード', select: false, nullable: true })
    password?: string;


    @Column('tinyint', { comment: '性別', nullable: true })
    gender?: number;

    @Column('date', { comment: '生年月日', nullable: true })
    birthday?: Date;

    @CreateDateColumn()
    readonly createdAt?: Date;

    @UpdateDateColumn()
    readonly updatedAt?: Date;
}