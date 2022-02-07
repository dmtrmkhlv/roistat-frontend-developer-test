<template>
    <div class="table">
        <div class="table__row">
            <div v-on:click="sortContacts('name')" class="table__row__item button">Имя</div>
            <div v-on:click="sortContacts('phone')" class="table__row__item button">Телефон</div>
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
    data() {
        return {
            nameSortByAsc: 1,
            phoneSortByAsc: 1
        }
    },
    computed:{
        contacts(){
            return this.$store.getters.getAllContactToOneLevel;
        },
    },
    methods:{
        sortContacts(by){
            let nameSortByAsc = this.nameSortByAsc;
            let phoneSortByAsc = this.phoneSortByAsc;
            if(by === "name"){
                this.$store.commit('setSortOrder', {'by': by, 'asc': nameSortByAsc});
                this.nameSortByAsc = -this.nameSortByAsc;
            }
            if(by === "phone"){
                this.$store.commit('setSortOrder', {'by': by, 'asc': phoneSortByAsc});
                this.phoneSortByAsc = -this.phoneSortByAsc;
            }
        },
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
.button{
    cursor: pointer;
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