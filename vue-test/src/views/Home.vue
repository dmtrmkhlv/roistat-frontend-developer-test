<template>
  <div class="wrapper">
    <main class="main">
      <Button text="Добавить" :buttonFunction="setPopupStatus"/>
      <Table />
      <Form v-if="showPopup" :buttonFunction="setPopupStatus" />
    </main>
  </div>
</template>

<script>
  import Button from '@/components/Button.vue'
  import Form from '@/components/Form.vue'
  import Table from '@/components/Table.vue'
  export default {
    name: 'Home',
    components: {
        Button,
        Form,
        Table
      },
    data () {
      return {
        showPopup: false
      }
    },
    methods: {
      setPopupStatus() {
          this.showPopup = !this.showPopup;
      }
    }
}
</script>

<style scoped>
.wrapper{
  margin: 0 auto;
  max-width: 1440px;
}
.main{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 500px
}
</style>
