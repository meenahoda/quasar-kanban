<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <lane :items="todoItems" title="To-Do" id="todo" />
      </div>
      <div class="col">
        <lane :items="inProgressItems" title="In Progress" id="inProgress" />
      </div>
      <div class="col">
        <lane :items="doneItems" title="Done" id="done" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'
import Lane from 'components/Lane.vue'

export default {
  name: 'Board',
  components: { Lane },
  computed: mapState({
    todoItems: s => s.app.items.todo,
    inProgressItems: s => s.app.items.inProgress,
    doneItems: s => s.app.items.done
  })
}
</script>

<style>

</style>
