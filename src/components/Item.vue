<template>
  <q-card
    color="white"
    text-color="dark"
    class="q-mb-md"
  >
    <q-card-title>#{{item.id}}</q-card-title>
    <q-card-main>{{item.text}}</q-card-main>
  </q-card>
</template>
<script>
export default {
  name: 'Item',
  props: [ 'item' ]
}
</script>
