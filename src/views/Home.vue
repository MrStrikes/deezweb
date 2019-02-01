<template>
  <div class="home">
    <div class="song">
      <song-card :track="favorites"/>
    </div>
    <a class="button is-info" v-if="allTracks.length != 0" @click.prevent="shuffleFavorites()">Get another random song</a>
    <h1 v-if="allTracks.length == 0">No song available</h1>
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
      favorites: Object,
      allTracks: [] as any[]
    };
  },
  methods: {
    setFavorites() {
      return (this.allTracks = getFavorites());
    },
    shuffleFavorites() {
      const shuffled = this.allTracks[shuffleFavorites()];
      return (this.favorites = shuffled);
    }
  },
  created() {
    this.setFavorites();
    this.shuffleFavorites();
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
