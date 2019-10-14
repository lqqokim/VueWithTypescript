<template>
    <div>
        <h1>Vue Property</h1>
        <p>name: {{name}}</p>
        <p>fullName: {{fullName}}</p>
        <p>age: {{age}}</p>
        <p>birthday: {{birthday}}</p>
        <p>person.age: {{person.age}}</p>
        <button @click="click">data 테스트</button>
        <button @click="emitTest(2019, 2018)">emit test</button>
    </div>
</template>

<script lang="ts">
// import Vue from 'vue';
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';

interface Person{
    name: string;
    age: number;
}

@Component // vue-property-decorator 로 가져온 컴포넌트 필수
export default class Test extends Vue {
    name: string = 'Tony';
    private time: string = ''; // 내부적으로 숨기고 싶은 변수 구분

    @Prop(Number) readonly age!: number; // Number: vue, number: ts, !: 생성시가 아닌 이후에 값을 할당함
    @Prop({ // default: 상위에 해당 prop에 없을때 바인딩, 가장 이상적인 형태의 prop
        default: '8월 15일'
    })
    readonly birthday!: string;

    /**
     * method: {}
     */

    click() {
        // 템플릿에서 사용하는 메서드
        this._hello();
        this.person.age--;
    }

    private _hello() {
        // 내부에서만 쓰는 함수는 private
        this.name = 'Jieun';
    }

    /**
     * computed: {}
     */

    get fullName() {
        return `${this.name} Kim`;
    }

    /**
     * lifecycle hooks
     */

    created() {
        console.log('create');
    }

    /**
     * watch: {}
     */

    @Watch('name') // age가 변경되면 호출되는 함수
    onNameChange(newVal: string, oldVal: string) {
        console.log('Watch name:: ', newVal, oldVal);
    }

    person: Person = {
        name: 'Insu Kim',
        age: 30
    };

    @Watch('person', {
        deep: true, // object 내부 full scan
        immediate: true // 컴포넌트 create되기 전에 즉시 한번 Watch에 있는 내용을 한번 출력한다. 때문에 oldValue는 undefined
    })
    onPersonChange(newVal: Person, oldVal: Person) {
        console.log('Watch person :: ', newVal, oldVal);
    }

    /**
     * Emit
     */

    @Emit('emit-func')
    emitTest(year: number, year2: number) {
        // this.$emit(eventname, param)
        return 1990;
    }
}
</script>

<style>
</style>
