<template>
  <div id="q-app" class="bg-grey-4">
    <q-layout>
      <navigation />

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import Navigation from 'components/Navigation.vue'
export default {
  name: 'App',
  components: { Navigation }
}
</script>

<style>
</style>
