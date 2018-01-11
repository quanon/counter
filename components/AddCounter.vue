<template>
  <div class="ui card">
    <div class="center aligned content">
      <div class="ui form">
        <div class="field">
          <input type="text" placeholder="タイトル" v-model="title">
        </div>
        <div class="field">
          <ColorDropdown @change="onChangeColor"/>
        </div>
      </div>
    </div>
    <div class="center aligned extra content">
      <div class="ui one buttons">
        <div class="ui basic button" @click="onClickAdd">
          追加
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorDropdown from '~/components/ColorDropdown.vue';

export default {
  data() {
    return {
      title: null,
      color: null
    };
  },
  components: {
    ColorDropdown
  },
  methods: {
    onChangeColor(value) {
      this.color = value;
    },
    onClickAdd() {
      if (!this.title) return;
      if (!this.color) return;
      if (this.$store.getters.exist(this.title)) return;

      this.$store.dispatch('addCounter', {
        title: this.title,
        color: this.color
      });

      this.title = null;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
