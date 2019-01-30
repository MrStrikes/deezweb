<template>
  <div class="home">
    <song-card :track="favorites"/>
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
      favorites: [] as any[]
    };
  },
  methods: {
    async setFavorites() {
      return await (this.favorites = getFavorites());
    },
    async shuffleFavorites() {
      return await (this.favorites = this.favorites[shuffleFavorites()]);
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
.home {
  margin: 10px 100px;
  display: flex;
  justify-content: center;
}
</style>
