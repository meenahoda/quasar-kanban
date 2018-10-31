<template>
  <q-card
    color="white"
    text-color="dark"
    class="q-mb-md"
  >
    <q-card-title>#{{item.id}}</q-card-title>
    <q-card-main>
      <span class="ellipsis-3-lines">{{item.text}}</span>
    </q-card-main>
    <q-card-actions align="end">
      <q-btn icon="delete" flat round dense color="light" @click="removeItem(item)" />
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
  name: 'Item',
  props: [ 'item' ],
  methods: {
    removeItem (item) {
      this.$q.dialog({
        title: 'Remove',
        message: `Are you sure you want to remove Task #${item.id}?`,
        ok: 'Yes',
        cancel: 'No',
        color: 'secondary'
      }).then(() => {
        this.$store.commit('app/removeItem', item)
      }).catch(() => {})
    }
  }
}
</script>
