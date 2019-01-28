<template>
  <div class="hello"></div>
</template>

<script lang="ts">
import Vue from "vue";
import { AlbumInterface } from "@/interfaces/AlbumInterface";

export default Vue.extend({
  name: "RandomSong",
  props: {
    track: Object as () => AlbumInterface
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
