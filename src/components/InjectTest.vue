<template>
    <div>
        <h1>Inject Test</h1>
        <ul>
            <li v-for="(user, index) in users" :key="user.id">{{user.login}}</li>
        </ul>
    </div>
</template>

<script lang=ts>
import { Vue, Component, Inject } from 'vue-property-decorator';
import axios, { AxiosStatic } from 'axios';
import { IUserService, User } from '@/services/UserService';

@Component
export default class InjectTest extends Vue {
    users: User[] = [];

    @Inject() userService!: IUserService;

    // async created() {
    //     const res = await axios.get('http://api.github.com/users');
    //     this.users = res.data;
    // }

    // async created() {
    //     const res = await this.myHttp.get('http://api.github.com/users');
    //     this.users = res.data;
    // }

    async created() {
       this.users = await this.userService.getUsers();
    }
}
</script>

<style>
</style>
