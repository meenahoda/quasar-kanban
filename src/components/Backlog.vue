<template>
  <q-page padding>
    <new-item />

    <div>
      <q-card
        inline
        style="width: 30%"
        v-for="(item, idx) in items"
        :key="idx"
        class="q-mr-md q-mt-md"
        color="white"
        text-color="dark"
      >
        <q-card-title>
          <div class="row">
            <div class="col">#{{item.id}}</div>
            <div class="col text-right">
              <q-chip small dense :color="getChipColor(getLane(item))">
                {{getLane(item)}}
              </q-chip>
            </div>
          </div>
        </q-card-title>
        <q-card-main>{{item.text}}</q-card-main>
        <q-card-actions align="end">
          <q-btn icon="delete" flat round dense color="light" @click="removeItem(item)" />
        </q-card-actions>
      </q-card>
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
      this.$store.commit('app/removeItem', item)
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
