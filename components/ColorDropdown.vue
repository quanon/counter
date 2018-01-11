<template>
  <div class="ui selection labeled icon dropdown">
    <input type="hidden" name="color" @change="onChange($event.target.value)">
    <i class="dropdown icon"></i>
    <div class="default text">色</div>
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
        { name: 'レッド', value: 'red' },
        { name: 'オレンジ', value: 'orange' },
        { name: 'イエロー', value: 'yellow' },
        { name: 'オリーブ', value: 'olive' },
        { name: 'グリーン', value: 'green' },
        { name: 'ティール', value: 'teal' },
        { name: 'ブルー', value: 'blue' },
        { name: 'バイオレット', value: 'violet' },
        { name: 'パープル', value: 'purple' },
        { name: 'ピンク', value: 'pink' },
        { name: 'ブラウン', value: 'brown' },
        { name: 'グレー', value: 'grey' },
        { name: 'ブラック', value: 'black' }
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
