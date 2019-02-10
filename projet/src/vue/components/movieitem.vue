<template>
  <div class="movie">
    <h3>{{ movie.title }}</h3>
    <p>
      Genre: {{movie.genre}}
      <br>
      Date de sortie: {{ movie.year }}
      <br>
      De: {{ movie.real.name }} 
      (réalisateur/trice {{ movie.real.nationality}})
    </p>
    <h4>Synopsis</h4>
    <p>{{movie.synopsys}}</p>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.movie {
  border: 5px solid rgb(122, 35, 139);
  margin-bottom: 10px;
  box-shadow: 4px 4px 4px 4px #000000;
  padding-inline-start: 1em;
}
</style>
