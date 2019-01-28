<template>
  <div class="search-main">
    <section class="research">
      <b-field class="search" label="Search">
        <b-input
          placeholder="Search..."
          type="search"
          icon-pack="fas"
          icon="search"
          @input="debounceInput"
        ></b-input>
      </b-field>

      <b-field label="Type">
        <b-select v-model="type" @input="debounceInput" required>
          <option v-for="(type, index) in types" :key="index" :value="type">{{ type }}</option>
        </b-select>
      </b-field>
    </section>
    <div class="songs">
      <song-card v-for="(track, index) in result" :key="index" :track="track"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SongCard from "@/components/SongCard.vue";
import _ from "ts-lodash";
import { search } from "@/service/SearchService";
import { AlbumInterface } from "@/interfaces/AlbumInterface";

export default Vue.extend({
  components: {
    SongCard
  },
  data() {
    return {
      search: "" as string,
      types: ["artist", "album", "track"] as Array<string>,
      type: "artist" as string,
      result: [] as Array<AlbumInterface>
    };
  },
  methods: {
    debounceInput: _.debounce(function(this: any, ev) {
      this.search = ev;
      let data = search(this.type, this.search);
      data.then(result => {
        this.result = result;
      });
    }, 500)
  }
});
</script>

<style>
.research {
  display: flex;
  justify-content: center;
}
.search {
  margin: 0 20px 0 0;
}
.songs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 25px;
}
</style>
