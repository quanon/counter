<template>
  <div class="ui card">
    <div class="center aligned content">
      <div class="ui form">
        <div class="field">
          <EmojiDropdown @change="onChangeEmoji"/>
        </div>
        <div class="field">
          <input type="text" placeholder="タイトル" v-model="title">
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
import EmojiDropdown from '~/components/EmojiDropdown.vue';

export default {
  data() {
    return {
      emoji: null,
      title: null
    };
  },
  components: {
    EmojiDropdown
  },
  methods: {
    onChangeEmoji(value) {
      this.emoji = value;
    },
    onClickAdd() {
      if (!this.emoji) return;
      if (!this.title) return;
      if (this.$store.getters.exist(this.title)) return;

      this.$store.dispatch('addCounter', {
        emoji: this.emoji,
        title: this.title
      });

      this.title = null;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
