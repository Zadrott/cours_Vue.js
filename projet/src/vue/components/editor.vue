<template>
  <div class="box">
    <h2>Editor:</h2>
    <p>{{ this.$route.params.id }}</p>
    <p>Movie number : {{ movies }}</p>
    <button v-on:click="back">Back to list</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: window.shared_data.movies
    };
  },
  methods: {
    back: function() {
      this.$router.push("home");
    }
  }
};
</script>

<style>
</style>

    