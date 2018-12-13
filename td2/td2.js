Vue.component("movie-item", {
  template: "{{ movie.title }} ({{ movie.real }}, {{ movie.year }})",
  props: ["movie"],
  methods: {},
});

var vm = new Vue({
  el: "#app",
  data: {
    message: "Bienvenue sur la super liste de films!",
    movies: [
      { title: "Grave", real: "Julia Ducournau", year: "2016" },
      { title: "V for Vendeta", real: "James McTeigue", year: "2005" },
      { title: "La Haine", real: "Mathieu Kassovitz", year: "1995" },
      { title: "Shutter Island", real: "Martin Scorsese", year: "2010" },
      { title: "American History X", real: "Tony Kaye", year: "1998" },
    ],
    display: true,
    search: "",
    lenght: document.getElementsByClassName("movie").length,
  },
  methods: {
    toggleDisplay() {
      this.display ? (this.display = false) : (this.display = true);
    },
    isSearched(title, year, real) {
      if (this.search === "") {
        return true;
      } else if (title.includes(this.search)) {
        return true;
      } else if (real.includes(this.search)) {
        return true;
      } else if (year.includes(this.search)) {
        return true;
      }
      return false;
    },
  },
});
