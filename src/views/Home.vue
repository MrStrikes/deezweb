<template>
  <div class="home">
    <div class="song">
      <song-card :track="favorites"/>
    </div>
    <a class="button is-info" @click.prevent="shuffleFavorites()">Info</a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SongCard from "@/components/SongCard.vue";
import { getFavorites, shuffleFavorites } from "@/service/ActionService";
import { AlbumInterface } from "@/interfaces/AlbumInterface";

export default Vue.extend({
  name: "home",
  components: {
    SongCard
  },
  data() {
    return {
      favorites: [] as any[],
      allTracks: [] as any[]
    };
  },
  methods: {
    async setFavorites() {
      await (this.allTracks = getFavorites());
      return await (this.favorites = getFavorites());
    },
    async shuffleFavorites() {
      return await (this.favorites = this.allTracks[shuffleFavorites()]);
    }
  },
  async created() {
    await this.setFavorites();
  },
  async mounted() {
    await this.shuffleFavorites();
  }
});
</script>

<style>
.song {
  margin: 10px 100px;
  display: flex;
  justify-content: center;
}
</style>
