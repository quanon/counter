<template>
  <div class="ui container">
    <div class="ui three stackable cards">
      <Counter v-for="counter in counters" :key="counter.title" :counter="counter"/>
      <AddCounter/>
    </div>
  </div>
</template>

<script>
import Counter from '~/components/Counter.vue';
import AddCounter from '~/components/AddCounter.vue';

export default {
  components: {
    Counter,
    AddCounter
  },
  computed: {
    counters() {
      return this.$store.state.counters;
    }
  }
};

</script>

<style lang="scss" scoped>
.container {
  margin-top: 14px + 12.250px;
  margin-bottom: 14px + 12.250px;
}

.extra.content {
  padding: 0 !important;
}
</style>
