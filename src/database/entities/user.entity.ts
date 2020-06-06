import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true, comment: 'ユーザーのプライマリーID' })
    id: string;

    @Column({ comment: '名前', unique: true })
    name: string;

    @Column({ comment: '暗号化したログインパスワード', select: false, unique: true })
    password: string;

    @CreateDateColumn()
    readonly createdAt: Date;

    @UpdateDateColumn()
    readonly updatedAt: Date;

    @DeleteDateColumn()
    readonly deletedAt: Date
}