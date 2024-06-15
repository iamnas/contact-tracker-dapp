import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as mongoose from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';

import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/common-evm-utils';

import { User } from './schemas/user.schema';

import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private userModel: mongoose.Model<User>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,

    private config: ConfigService,
  ) {}

  async getUsers() {
    const address = this.config.get('CONTRACT_ADDRESS');

    const chain = EvmChain.MUMBAI;

    const topic = this.config.get('TOPIC');

    const abi = {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: '_name',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_phoneNumber',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: '_email',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_time',
          type: 'uint256',
        },
      ],
      name: 'AddContract',
      type: 'event',
    };

    const response = await Moralis.EvmApi.events.getContractEvents({
      address,
      chain,
      topic,
      abi,
    });

    await this.cacheManager.set('cached_item', response.toJSON());

    const data = await this.cacheManager.get('cached_item');

    return data;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async create(user: User): Promise<User> {
    const res = await this.userModel.create(user);
    return res;
  }
}
