import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-book.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<unknown>;
    getAllUsers(): Promise<User[]>;
    createBook(user: CreateUserDto): Promise<User>;
}
