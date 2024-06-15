import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';
import { User } from './schemas/user.schema';
import { Cache } from 'cache-manager';
export declare class UserService {
    private userModel;
    private cacheManager;
    private config;
    constructor(userModel: mongoose.Model<User>, cacheManager: Cache, config: ConfigService);
    getUsers(): Promise<unknown>;
    findAll(): Promise<User[]>;
    create(user: User): Promise<User>;
}
