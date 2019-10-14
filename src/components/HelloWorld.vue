<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,
            <br>check out the
            <a
                href="https://cli.vuejs.org"
                target="_blank"
                rel="noopener"
            >vue-cli documentation</a>.
        </p>
     

        <Test v-bind:age="10" birthday="8월 18일"></Test>
        <ModelTest v-model="checked"></ModelTest>
        <InjectTest></InjectTest>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue,  Provide } from 'vue-property-decorator';
import Test from './Test.vue';
import ModelTest from './ModelTest.vue';
import InjectTest from './InjectTest.vue';
import UserService from './../services/UserService';

@Component({
    components: {
        Test,
        ModelTest,
        InjectTest
    }
})
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;

    /**
     * 1. UserService 객체를 생성해서 주입해준다.
     * 2. DI의 주체
     */
    @Provide() userService = new UserService(); 

    checked: boolean = false;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
