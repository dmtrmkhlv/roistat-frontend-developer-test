<template>
  <div class="table__row">
    <div class="table__row__item">{{data.name}}</div>
    <div class="table__row__item">{{data.phone}}</div>
  </div>
</template>

<script>
  export default {
    props: ['data'],
  }

</script>
