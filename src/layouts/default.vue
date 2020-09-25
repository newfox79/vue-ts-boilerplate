<template lang="pug">
  v-main.layout-default(app)
    base-navigation-drawer(:items="items")
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseNavigationDrawer from '@/components/utils/BaseNavigationDrawer.vue'

@Component({
  components: {
    BaseNavigationDrawer
  }
})
export default class LayoutDefault extends Vue {
  public items = [
    {
      linkName: 'index',
      title: 'Главная',
      icon: 'mdi-bat',
      divider: false
    }
  ]
}
</script>

<style lang="sass">
.layout-default
  height: 100%
</style>
