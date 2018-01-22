<template>
  <div class="ui card">
    <div class="center aligned content">
      <div class="ui form">
        <div class="field">
          <input type="text" name="title" placeholder="Title" v-model="title">
        </div>
        <div class="field">
          <ColorDropdown @change="onChangeColor"/>
        </div>
      </div>
    </div>
    <div class="center aligned extra content">
      <div class="ui one buttons">
        <div class="ui basic submit button" @click="onClickAdd">
          Add
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
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
  mounted() {
    $('.form')
      .form({
        on: 'blur',
        fields: {
          title: ['empty'],
          color: ['empty']
        }
      });
  },
  methods: {
    onChangeColor(value) {
      this.color = value;
    },
    onClickAdd() {
      if ($('.form').form('validate form') === false) return;

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
.ui.basic.button {
  box-shadow: none !important;

  &:active, &:hover, &:focus {
    background: transparent none !important;
  }
}
</style>
