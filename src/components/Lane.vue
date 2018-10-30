<template>
  <div class="q-mr-md">
    <div class="row q-mb-md text-faded">
      <div class="col">
        {{title}}
      </div>
      <div class="col text-right">
        <q-chip small dense color="secondary">
          {{items.length}}
        </q-chip>
      </div>
    </div>
    <draggable v-model="draggables" :options="{ group: 'default' }" style="min-height: 150px;">
      <div
        v-for="(item, idx) in items"
        :key="idx"
      >
        <item :item="item" />
      </div>
    </draggable>
  </div>
</template>
<script>
import Draggable from 'vuedraggable'
import Item from 'components/Item.vue'

export default {
  name: 'Lane',
  props: [ 'items', 'title', 'id' ],
  components: { Draggable, Item },
  computed: {
    draggables: {
      get () {
        return this.items
      },
      set (items) {
        this.$store.commit('app/updateItems', { items, id: this.id })
      }
    }
  }
}
</script>
