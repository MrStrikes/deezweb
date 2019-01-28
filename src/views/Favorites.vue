<template>
  <div class="songs">
    <song-card v-for="(favorite, index) in favorites" :key="index" :track="favorite"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SongCard from "@/components/SongCard.vue";
import { AlbumInterface } from "@/interfaces/AlbumInterface";
import { getFavorites } from "@/service/ActionService";

export default Vue.extend({
  components: {
    SongCard
  },
  data() {
    return {
      favorites: [] as AlbumInterface[]
    };
  },
  methods: {
    async getFavoriteSongs() {
      this.favorites = getFavorites();
    }
  },
  async created() {
    await this.getFavoriteSongs();
  }
});
</script>

<style scoped>
.songs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 25px;
}
</style>
