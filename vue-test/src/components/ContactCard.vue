<template>
  <div class="table__row">
    <div class="table__row__item" v-bind:style="{ width: setWidth }">
        <span v-if="data.sub.length > 0">+</span>
        {{data.name}}</div>
    <div class="table__row__item">{{data.phone}}</div>
  </div>
</template>

<script>
  export default {
    props: ['data'],
    computed:{
        setWidth(){
            return 50 - this.data.margin + '%';
        }
    },
  }

</script>
