<template>
    <div class="popup">
        <form id="form" action="#" method="post" v-on:submit.prevent="">
        <p>Добавление пользователя</p>
        <div class="form__block">
            <label for="name">Имя</label>
            <input v-model="name" type="text" name="name" id="name">
        <span class="form__error" v-if="errors.name">{{errors.name}}</span>
        </div>
        <div class="form__block">
            <label for="phone">Телефон</label>
            <input v-model="phone" type="number" name="phone" id="phone">
        <span class="form__error" v-if="errors.phone">{{errors.phone}}</span>
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
            phone: "",
            chiefId: '',
            errors: {
                name: "",
                phone: "",
            },
            }
        },
        computed:{
            contacts(){
                return this.$store.getters.getAllContactToOneLevel;
            }
         },
    methods: {
        onSubmit() {
            this.errors = {};

            if (this.name == "") {
                this.errors.name  = 'Напишите имя';
            }

            if (this.phone == "") {
                this.errors.phone = 'Напишите телефон';
            }else if(this.phone.length != 11){
                this.errors.phone = 'Не правильный формат';
            }

            if (!this.errors.length) {
                return true;
            }
            let dataFromForm = {
                id: this.id,
                name: this.name,
                phone: this.phone,
                chiefId: this.chiefId, 
                sub: []
            }
            this.$store.dispatch('addToContacts', dataFromForm);
            this.id = nanoid();
            this.name = '';
            this.phone = '';
            this.chiefId = '';
            this.buttonFunction();
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
    position: relative;
}
.form__error{
    color: orangered;
    font-size: 12px;
    line-height: 0;
    position: absolute;
    bottom: -12px;
    right: 0;
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.form__button{
    align-self: flex-start;
    width: 50%;
    text-align: left;
}
</style>