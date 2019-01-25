<template>
  <div class="hello"></div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "RandomSong",
  data() {
    return {};
  },
  methods: {
    getSong() {
      return axios
        .get(
          `${"https://cors-anywhere.herokuapp.com/"}https://api.deezer.com/user/2529`,
          {
            headers: { "Content-Type": "application/json" }
          }
        )
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
    }
  },
  mounted() {
    this.getSong();
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
