<template>
    <button class="button" v-on:click="onClick">{{text}}</button>
</template>

<script>
export default {
        props: ['text', 'buttonFunction'],
        methods: {
            onClick() {
                this.buttonFunction()
            }
        }
    }
    
</script>

<style scoped>
    .button{
        padding: 10px 20px;
        border-radius: 20px;
        cursor: pointer;
        transition: all .2s;
        align-self: flex-end;
        outline: none;
    }
    .button:hover{
        filter:brightness(.9);
    }
</style>