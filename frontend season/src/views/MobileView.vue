<template>

    <div class="d-flex">
        <input type="button" @click="lep(page - 1)" value="le">
        <input type="button" disabled :value="page">
        <input type="button" @click="lep(page + 1)" value="fel">
    </div>


    <div id="viewpoints">
        <div class="viewpoint" v-for="watche in watches">
            <h2>{{ watche.id }}</h2>
            <p class="description">
                {{ watche.ProductDescription }}
            </p>
        </div>
    </div>



</template>

<script setup>
import { ref } from 'vue';
import dataservice from '../services/dataservice';

const page = ref(1);
const totalCount = ref()
const watches = ref([])
const maxPage = ref(1)


dataservice.getwatches(page.value).then((resp) => {
    watches.value = resp.data;
    totalCount.value = resp.headers["x-total-count"]
    maxPage.value = Math.ceil(totalCount.value / 10)
    console.log(watches.value);
}).catch((err) => {
    console.log(err);
});


function lep(pagethis) {
    if (pagethis < maxPage.value && 1 < pagethis) {
        page.value = pagethis
        dataservice.getwatches(pagethis).then((resp) => {
            watches.value = resp.data;
            console.log(watches.value);

        }).catch((err) => {
            console.log(err);
        });
    }

}



</script>