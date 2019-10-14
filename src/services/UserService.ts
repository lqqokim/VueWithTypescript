/**
 * singleton 방식
 */

// class UserService {

// }

// const userService = new UserService(); 


// export default userService;


/**
 * 1. UserService 의 Interface 를 만든다.
 * 2. User Service 관련 관심사들만 분리할 수 있다.
 * 3. Like Angular Service
 */

import axios from 'axios';

export interface User {
    id: number;
    login: string;
}

export interface IUserService {
    getUsers(): Promise<User[]>;
}

export default class UserService implements IUserService{
    public async getUsers(): Promise<User[]> {
        const res = await axios.get('http://api.github.com/users');
        return res.data;
    }
}