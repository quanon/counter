<template>
  <div class="ui selection labeled icon dropdown">
    <input type="hidden" name="color" @change="onChange($event.target.value)">
    <i class="dropdown icon"></i>
    <div class="default text">Color</div>
    <div class="menu">
      <div class="item" v-for="color in colors" :data-value="color.value">
        <div class="ui empty circular label" :class="color.value"></div>
        {{ color.name }}
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  props: {
    emoji: {
      type: String
    }
  },
  mounted() {
    $('.ui.dropdown').dropdown();
  },
  computed: {
    colors() {
      return [
        { name: 'Red', value: 'red' },
        { name: 'Orange', value: 'orange' },
        { name: 'Yellow', value: 'yellow' },
        { name: 'Olive', value: 'olive' },
        { name: 'Green', value: 'green' },
        { name: 'Teal', value: 'teal' },
        { name: 'Blue', value: 'blue' },
        { name: 'Violet', value: 'violet' },
        { name: 'Purple', value: 'purple' },
        { name: 'Pink', value: 'pink' },
        { name: 'Brown', value: 'brown' },
        { name: 'Grey', value: 'grey' },
        { name: 'Black', value: 'black' }
      ];
    }
  },
  methods: {
    onChange(value) {
      this.$emit('change', value);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
