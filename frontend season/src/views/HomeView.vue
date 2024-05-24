<script setup>
import DataService from "../services/dataservice";
import { ref } from "vue";

const seasons = ref([]);
const seasonId = ref("");
const episodes = ref([])
const limit = ref(3)
const page = ref(1)
const maxPage = ref(1)


DataService.getAllSeasons()
  .then((resp) => {
    seasons.value = resp;
    console.log(seasons.value);
  })
  .catch((err) => {
    console.log(err);
  });

const valaszto = (actPage) => {
  if ( actPage < 0 || actPage > maxPage.value){
    return;
  }
  console.log(maxPage.value);
  page.value = actPage;
  DataService.getByID(seasonId.value, page.value, limit.value)
    .then((resp) => {
      maxPage.value = Math.ceil(resp.headers["x-total-count"] / limit.value)
      episodes.value = resp.data;
      console.log(episodes.value);
    })
    .catch((err) => {
      console.log(err);
    });
};


</script>

<template>
  <div class="form">
    <div class="data">
      <label for="seasons">Season:</label>
      <select name="seasonId" id="season" v-model="seasonId" @change="valaszto(1)">
        <option value="" selected>Kérem válasszon</option>
        <option v-for="season in seasons" :value="season._id">{{ season._id }}</option>
      </select>
    </div>
  </div>

  <div id="viewpoints" >
    <div class="viewpoint" v-for="episode in episodes">
      <h2>{{ episode.title }}</h2>
      <div>
        <ul>
          <li>
            <label>megneztek:</label>
            <span>{{ episode.us_viewers_in_millions }}</span>
          </li>
          <li>
            <label>rész:</label>
            <span>{{ episode.episode_in_season }}</span>
          </li>
          <li>
            <label>written by:</label>
            <span>{{ episode.written_by }}</span>
          </li>
          <li>
            <label>airDate:</label>
            <span>{{ episode.air_date }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div>

      <button @click="valaszto(page - 1)">le</button>
      <span>{{ page }}</span>
      <button @click="valaszto(page + 1)">fel</button>
    </div>


  </div>

</template>
