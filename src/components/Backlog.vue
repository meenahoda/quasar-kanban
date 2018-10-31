<template>
  <q-page padding>
    <new-item />

    <div
      v-for="item in items"
      :key="item.id"
      class="row bg-white q-my-md q-pa-md shadow-1"
    >
      <div class="col-xs-2 col-sm-1 text-weight-light">
        #{{item.id}}
      </div>
      <div class="col ellipsis">
        {{item.text}}
      </div>
      <div class="col text-right">
        <q-chip small dense :color="getChipColor(getLane(item))">
          {{getLane(item)}}
        </q-chip>
        <q-btn icon="delete" flat round dense color="light" @click="removeItem(item)" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'
import NewItem from 'components/NewItem.vue'

export default {
  name: 'Backlog',
  components: { NewItem },
  computed: mapState({
    items: s => [...s.app.items.todo, ...s.app.items.inProgress, ...s.app.items.done]
  }),
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
    },
    getLane (item) {
      if (this.$store.state.app.items.todo.includes(item)) {
        return 'To-Do'
      } else if (this.$store.state.app.items.inProgress.includes(item)) {
        return 'In Progress'
      }
      return 'Done'
    },
    getChipColor (lane) {
      return {
        'To-Do': 'red',
        'In Progress': 'orange',
        'Done': 'green'
      }[lane]
    }
  }
}
</script>

<style>

</style>
