<template>
  <div class="ui card" :class="counter.color">
    <div class="center aligned content">
      <div class="ui pointing dropdown top right">
        <i class="ellipsis vertical grey icon"></i>
        <div class="menu">
          <div class="item" @click="onClickReset">Reset</div>
          <div class="item" @click="onClickDelete">Delete</div>
        </div>
      </div>
      <div class="header">
        {{ counter.title }}
      </div>
      <div class="description">
        <div class="ui huge statistic">
          <div class="value">
            {{ counter.count }}
          </div>
        </div>
      </div>
    </div>
    <div class="extra content">
      <div class="ui two buttons">
        <div class="ui basic button" @click="onClickMinus">
          <i class="minus big icon"></i>
        </div>
        <div class="ui basic button" @click="onClickPlus">
          <i class="plus big icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  props: {
    counter: {
      type: Object
    }
  },
  mounted() {
    $('.ui.dropdown').dropdown();
  },
  methods: {
    onClickMinus() {
      this.$store.dispatch('countDown', { title: this.counter.title });
    },
    onClickPlus() {
      this.$store.dispatch('countUp', { title: this.counter.title });
    },
    onClickReset() {
      this.$store.dispatch('reset', { title: this.counter.title });
    },
    onClickDelete() {
      this.$store.dispatch('removeCounter', { title: this.counter.title });
    }
  }
};
</script>

<style lang="scss" scoped>
.ui.dropdown {
  position: absolute;
  top: 0;
  right: 0;
  margin: 14px;
}

.extra.content {
  padding: 0 !important;
}
</style>
