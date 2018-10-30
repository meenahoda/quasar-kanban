<template>
  <div>
    <q-input
      v-model="text"
      float-label="Add a task"
      @keyup.enter="submit"
      color="secondary"
    />
  </div>
</template>

<script>
export default {
  name: 'NewItem',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    submit () {
      if (this.text.trim().length > 0) {
        this.$store.commit('app/addItem', { text: this.text })
        this.text = ''
      }
    }
  }
}
</script>

<style>

</style>
