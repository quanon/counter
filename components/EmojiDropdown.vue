<template>
  <div class="ui fluid selection dropdown">
    <input type="hidden" name="emoji" @change="onChange($event.target.value)">
    <i class="dropdown icon"></i>
    <div class="default text">絵文字</div>
    <div class="menu">
      <EmojiDropdownItem v-for="emoji in emojiList" :key="emoji" :emoji="emoji"/>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import EmojiDropdownItem from '~/components/EmojiDropdownItem.vue';

export default {
  props: {
    emoji: {
      type: String
    }
  },
  mounted() {
    $('.ui.dropdown').dropdown();
  },
  components: {
    EmojiDropdownItem
  },
  computed: {
    emojiList() {
      return [
        ':candy:',
        ':dog:',
        ':weight_lifter:'
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
