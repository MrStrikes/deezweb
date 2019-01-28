<template>
  <section class="research">
    <b-field label="Search">
      <b-input placeholder="Search..." type="search" icon="magnify" v-model="search"></b-input>
    </b-field>

    <b-field label="Type">
      <b-select v-model="type" required>
        <option v-for="(type, index) in types" :key="index" :value="type">{{ type }}</option>
      </b-select>
    </b-field>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      search: "" as string,
      types: ["Artist", "Album", "Track"] as Array<string>
    };
  }
});
</script>

<style>
.research {
  display: flex;
}
</style>
