<template>
  <div class="row text-center">
    <div class="col q-mt-md">
      <q-btn
        label="Backlog"
        @click="$router.push('/backlog')"
        color="secondary"
        :outline="!isPath('/backlog')"
        class="q-mr-md"
      />
      <q-btn
        label="Board"
        @click="$router.push('/board')"
        color="secondary"
        :outline="!isPath('/board')"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navigation',
  methods: {
    isPath (path) {
      return this.$route.path === path
    }
  }
}
</script>
