<template>
  <div class="home">
    <random-song/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RandomSong from "@/components/RandomSong.vue";

export default Vue.extend({
  name: "home",
  components: {
    RandomSong
  }
});
</script>
