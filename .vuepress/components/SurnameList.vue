<template>
  <ul>
    <li v-for="(surname, i) in sortedSurnames" :key="i">
      <Surname :surname="surname.surname" :generation="surname.generation" />
    </li>
  </ul>
</template>

<script>
import Surname from "./Surname";

export default {
  components: {
    Surname
  },
  data() {
    return {
      surnames: [
        { surname: "Mazač, Mazáč", generation: 0 },
        { surname: "Foit, Fojt", generation: 1 },
        { surname: "Recsky, Recký, Récky, Réczky", generation: 2 },
        { surname: "Řezáč", generation: 2 },
        { surname: "Míč", generation: 3 },
        { surname: "Balla", generation: 3 },
        { surname: "Vítek", generation: 3 },
        { surname: "Bartoš", generation: 3 },
        { surname: "Marek", generation: 4 },
        { surname: "Šístek", generation: 4 },
        { surname: "Kiss, Kiš, Kišš", generation: 4 },
        { surname: "Chromý", generation: 4 },
        { surname: "Hons", generation: 4 },
        { surname: "Pech", generation: 4 },
        { surname: "Bačkora", generation: 4 },
        { surname: "Škobis", generation: 5 },
        { surname: "Šverma", generation: 5 },
        { surname: "Laurich", generation: 5 },
        { surname: "Pavelka", generation: 5 },
        { surname: "Csinger, Czinger, Činger", generation: 5 },
        { surname: "Brat", generation: 5 },
        { surname: "Lacza", generation: 5 },
        { surname: "Záhumenický, Zahumenitzky", generation: 5 },
        { surname: "Matoušek", generation: 5 },
        { surname: "Veleba", generation: 5 },
        { surname: "Kalců", generation: 5 },
        { surname: "Přenosil", generation: 5 },
        { surname: "Šimon", generation: 5 },
        { surname: "Salač", generation: 5 },
        { surname: "Jelínek", generation: 5 },
        { surname: "Šinor, Šiňor", generation: 6 },
        { surname: "Vrabec", generation: 6 },
        { surname: "Horák", generation: 6 },
        { surname: "Frumar", generation: 6 },
        { surname: "Tauchmann", generation: 6 },
        { surname: "Příhoda", generation: 6 },
        { surname: "Tomsa", generation: 6 },
        { surname: "Szlanyi", generation: 6 },
        { surname: "Ferenci", generation: 6 },
        { surname: "Hajdu", generation: 6 },
        { surname: "Barcsa", generation: 6 },
        { surname: "Kotil", generation: 6 },
        { surname: "Holubec", generation: 6 },
        { surname: "Oburka", generation: 6 },
        { surname: "Rys", generation: 6 },
        { surname: "Klubal", generation: 6 },
        { surname: "Nečad", generation: 6 },
        { surname: "Jůzl", generation: 6 },
        { surname: "Hübner", generation: 6 },
        { surname: "Bohuslav", generation: 6 },
        { surname: "Vančura", generation: 6 },
        { surname: "Benda", generation: 6 },
        { surname: "Kňákal", generation: 6 },
        { surname: "Hradecký", generation: 6 },
        { surname: "Čihák", generation: 7 },
        { surname: "Macek", generation: 7 },
        { surname: "Potůček", generation: 7 },
        { surname: "Hrdina", generation: 7 },
        { surname: "Mansfeld", generation: 7 },
        { surname: "Cink", generation: 7 },
        { surname: "Borecký", generation: 7 },
        { surname: "Pošva", generation: 7 },
        { surname: "Sucharda", generation: 7 },
        { surname: "Hák", generation: 7 },
        { surname: "Škopek", generation: 7 },
        { surname: "Nykodým", generation: 7 },
        { surname: "Kerner", generation: 7 },
        { surname: "Holý", generation: 7 },
        { surname: "Škarka", generation: 7 },
        { surname: "Dobral", generation: 7 },
        { surname: "Homolka", generation: 7 },
        { surname: "Rod", generation: 7 },
        { surname: "Nosálek", generation: 7 },
        { surname: "Krček", generation: 7 },
        { surname: "Vávra", generation: 7 },
        { surname: "Mendlík", generation: 7 },
        { surname: "Zvoník", generation: 7 },
        { surname: "Šípek", generation: 7 },
        { surname: "Novák", generation: 7 },
        { surname: "Koklar", generation: 8 },
        { surname: "Šebor", generation: 8 },
        { surname: "Nechvátal", generation: 8 },
        { surname: "Škvor", generation: 8 },
        { surname: "Jeřábek", generation: 8 },
        { surname: "Martinec", generation: 8 },
        { surname: "Maděra", generation: 8 },
        { surname: "Tlustý", generation: 8 },
        { surname: "Klouda", generation: 8 },
        { surname: "Slabý", generation: 8 },
        { surname: "Píša", generation: 8 },
        { surname: "Šteiner", generation: 8 },
        { surname: "Fousek", generation: 8 },
        { surname: "Jedlička", generation: 8 },
        { surname: "Zeman", generation: 8 },
        { surname: "Kratochvíl", generation: 8 },
        { surname: "Bečka", generation: 8 },
        { surname: "Elda", generation: 8 },
        { surname: "Hoblant", generation: 8 },
        { surname: "Munc", generation: 8 },
        { surname: "Kejzval", generation: 8 },
        { surname: "Koliáš", generation: 8 },
        { surname: "Neumann", generation: 8 },
        { surname: "Svatoň", generation: 8 },
        { surname: "Havel", generation: 8 },
        { surname: "Cimerhakl, Zimmerhakl", generation: 8 },
        { surname: "Pícha", generation: 8 }
      ]
    };
  },
  computed: {
    sortedSurnames() {
      return this.getSorted(this.surnames, "surname");
    }
  },
  methods: {
    getSorted(arr, param) {
      return arr.sort((a, b) => {
        return a.surname.localeCompare(b.surname, "cs", {
          sensitivity: "variant"
        });
      });
    }
  }
};
</script>

<style scoped>
ul {
  padding: 0;
  list-style: none;
  text-align: center;
}
li {
  display: inline-block;
  margin-right: 1em;
}
</style>
