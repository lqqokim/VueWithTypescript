<template>
    <div>
        <p>{{checked ? 'ON' : 'OFF'}}</p>
        <P>
            <button @click="changed()">토글</button>
        </P>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Model, Prop, Emit } from 'vue-property-decorator';

@Component
export default class ModelTest extends Vue{
    @Prop()
    @Model('change')
    readonly checked!: boolean;

    /**
     * emit의 두가지 방식
     * 1. @Emit
     * 2. this.$emit
     */
    
    @Emit('change')
    changed() {
        return !this.checked;
    }

    // changed() {
    //     this.$emit('change', !this.checked);
    // }
}
</script>

<style>

</style>
