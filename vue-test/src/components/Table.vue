<template>
    <div class="table">
        <div class="table__row">
            <div class="table__row__item">Имя</div>
            <div class="table__row__item">Телефон</div>
        </div>
        <div class="table__box">
            <ContactCard v-for="contact of contacts"
            v-bind:key="contact.id" 
            v-bind:data="contact" />
        </div>
    </div>
</template>

<script>
import ContactCard from '@/components/ContactCard.vue'

export default {
     components: {
        ContactCard,
      },
    computed:{
            contacts(){
            return this.$store.getters.getContacts;
        }
    }
}
</script>

<style>
.table{
    margin-top: 30px;
    width: 100%;
}
.table__row{
    display: flex;
    justify-content: flex-end;
    width: 100%;
}

.table__row .table__row__item:last-child{
    max-width: 50%;
}

.table__row__item{
    max-width: 50%;
    width: 50%;
    border: 1px solid #000;
    box-sizing: border-box;
    margin-left: -1px;
    margin-bottom: -1px;
    padding: 5px 15px;
    text-align: left;
}
.table__row__item.level{
    width: 45%;
}
</style>