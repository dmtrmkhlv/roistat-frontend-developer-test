<template>
    <div class="popup">
        <form id="form" action="#" method="post" v-on:submit.prevent="">
        <p>Добавление пользователя</p>
        <div class="form__block">
            <label for="name">Имя</label>
            <input v-model="name" type="text" name="name" id="name">
        </div>
        <div class="form__block">
            <label for="phone">Телефон</label>
            <input v-model="phone" type="phone" name="phone" id="phone">
            </div>
        <div class="form__block">
            <label for="chief">Начальник</label>
            <select v-model="chiefId" name="chief" id="chief">
                <option v-for="contact of contacts"
            v-bind:key="contact.id" 
            v-bind:value="contact.id"
            >{{contact.name}}</option>
            </select>
        </div>
        <Button class="form__button"  :buttonFunction="onSubmit" type="submit" text="Сохранить"/>
        <div class="form__close" v-on:click="onClick">&#10006;</div>
    </form>
    </div>
</template>

<script>
  import Button from '@/components/Button.vue'
  import { nanoid } from 'nanoid'

export default {
    props: ['buttonFunction'],
     components: {
        Button,
      },
    data() {
        return {
            id: nanoid(),
            name: '',
            phone: '',
            chiefId: '',
            }
        },
        computed:{
            contacts(){
                return this.$store.getters.getContacts;
            }
         },
    methods: {
        onSubmit() {
            let dataFromForm = {
                id: this.id,
                name: this.name,
                phone: this.phone,
                chiefId: this.chiefId
            }
            this.$store.dispatch('addToContacts', dataFromForm);
            this.id = nanoid();
            this.name = '';
            this.phone = '';
            this.chiefId = '';
        },
        onClick(){
            this.buttonFunction();
        }
    }
    }
</script>

<style scoped>
.popup{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #00000091;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
}
#form{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #ffffff;
    width: 500px;
    border: 1px solid #000;
    padding: 15px 25px 35px 15px;
    box-sizing: border-box;
    align-items: flex-start;
    gap: 25px;
    position: relative;
}
.form__close{
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
}
.form__block{
    width: 100%;
    display: flex;
}
label{
    text-align: left;
    width: 30%;
    font-size: 18px;
    line-height: 28px;
}
input,
select{
    flex: 1;
    height: 25px;
}
.form__button{
    align-self: flex-start;
    width: 50%;
    text-align: left;
}
</style>