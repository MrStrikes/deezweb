<template>
  <article class="song-card">
    <figure>
      <img :src="track.album.cover" :alt="`Cover of the album or single ${track.album.title}`">
      <!--<font-awesome-icon :icon="['fas', 'star']" @click.prevent="saveToFavorites(track)"/>-->
      <!--<font-awesome-icon :icon="['fas', 'star']" @click.prevent="isInFavorites(track)"/>-->
      <font-awesome-icon :icon="['fas', 'star']" @click.prevent="removeFromFavorites"/>
    </figure>
    <div>
      <h1 v-if="track.title !== track.album.title">Album: {{ track.album.title }}</h1>
      <p>
        <strong>{{ track.artist.name }}</strong>
        / {{ track.title }}
      </p>
      <audio :src="track.preview" controls></audio>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import { AlbumInterface } from "@/interfaces/AlbumInterface";
import {
  saveToFavorites,
  getFavorites,
  isInFavorites
} from "@/service/ActionService";

export default Vue.extend({
  name: "SongCard",
  props: {
    track: Object as () => AlbumInterface,
    index: Number
  },
  methods: {
    async saveToFavorites(trackData: any) {
      let faved: [AlbumInterface] = getFavorites();
      faved.push(trackData);
      await saveToFavorites(faved);
    },
    async isInFavorites(track: Object) {
      let data = isInFavorites(track);
    },
    async removeFromFavorites() {
      await this.$emit("remove-favorite", this.index);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-card {
  display: inline-flex;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  box-shadow: 0 0 15px #c0c0c0;
  border-radius: 2px;
  background-color: #fafafa;
  text-align: left;
  padding: 0.25em 1.25em 0.25em 0;
}
.song-card > figure {
  margin: 0.25em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.song-card > figure > img {
  display: block;
  border-radius: 300px;
  max-width: 128px;
}
.song-card > div {
  margin: 0.25em;
  font-size: 0.8em;
  line-height: 1.6em;
}
</style>
