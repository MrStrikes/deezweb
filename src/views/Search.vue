<template>
  <div class="search-main">
    <search-bar/>
    <song-card/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SongCard from "@/components/SongCard.vue";
import SearchBar from "@/components/SearchBar.vue";

export default Vue.extend({
  components: {
    SongCard,
    SearchBar
  }
});
</script>

<style>
</style>
