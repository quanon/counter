<template>
  <div class="item" :data-value="emoji">
    <img class="ui avatar image" :src='src'>
    {{ emoji }}
  </div>
</template>

<script>
import emojione from 'emojione';

export default {
  props: {
    emoji: {
      type: String
    }
  },
  computed: {
    src() {
      return emojione.toImage(this.emoji).match(/src="([^"]+)"/)[1];
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
