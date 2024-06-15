"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose = require("mongoose");
const mongoose_1 = require("@nestjs/mongoose");
const moralis_1 = require("moralis");
const common_evm_utils_1 = require("@moralisweb3/common-evm-utils");
const cache_manager_1 = require("@nestjs/cache-manager");
let UserService = class UserService {
    constructor(userModel, cacheManager, config) {
        this.userModel = userModel;
        this.cacheManager = cacheManager;
        this.config = config;
    }
    async getUsers() {
        const address = this.config.get('CONTRACT_ADDRESS');
        const chain = common_evm_utils_1.EvmChain.MUMBAI;
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
        const response = await moralis_1.default.EvmApi.events.getContractEvents({
            address,
            chain,
            topic,
            abi,
        });
        await this.cacheManager.set('cached_item', response.toJSON());
        const data = await this.cacheManager.get('cached_item');
        return data;
    }
    async findAll() {
        const users = await this.userModel.find();
        return users;
    }
    async create(user) {
        const res = await this.userModel.create(user);
        return res;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [mongoose.Model, Object, config_1.ConfigService])
], UserService);
//# sourceMappingURL=user.service.js.map