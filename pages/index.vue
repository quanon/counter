<template>
  <div class="ui container">
    <div class="ui four doubling stackable cards">
      <Counter v-for="counter in counters" :key="counter.title" :counter="counter"/>
    </div>
    <div class="ui four doubling stackable cards">
      <AddCounter/>
    </div>
    <div class="ui footer">
      <a href="https://quanon.github.io/">quanon.github.io</a>
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

.footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 14px;

  a, a:visited, a:hover, a:active {
    color: rgba(0, 0, 0, .6)
  }
}
</style>
