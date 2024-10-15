<script setup>
import { ref } from "vue"


const emit = defineEmits(['closeMenuEvent']);
const closeMenu = () =>{
    const result =  "close"
    emit('closeMenuEvent', result);
    return result;
}
// @click="closeMenu"
</script>
<template>
    <div class="menu pt-10 flex flex-col">
        <div @click="closeMenu" class="close flex justify-end mb-4 mr-6">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-square-fill text-yellow-500" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
                </svg>
            </button>
        </div>
        <div class="search mt-10 px-10">
            <div class="serach_comp rounded-lg shadow hover:shadow-md bg-white px-3 flex justify-between items-center ">
                <input  class="px-2 py-2 outline-none text-black rounded-lg" type="text" placeholder="Search posts">
                <button type="button px-2 py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="posts pt-10 px-5 flex flex-col gap-y-4">
            <div class="post_card flex gap-x-4 bg-white px-4 py-4 rounded-lg shadow-md">
                <div class="post_image"> 
                   <img src="../public/download (1).jfif" alt=""> 
                </div>
                <div class="post_test">
                    <h1 class="font-bold">Django ORM'da annotate metodi</h1>
                </div>
            </div>
            <div class="post_card flex gap-x-4 bg-white px-4 py-4 rounded-lg shadow-md">
                <div class="post_image"> 
                   <img src="../public/download (1).jfif" alt=""> 
                </div>
                <div class="post_test">
                    <h1 class="font-bold">Django ORM'da annotate metodi</h1>
                </div>
            </div>
            <div class="post_card flex gap-x-4 bg-white px-4 py-4 rounded-lg shadow-md">
                <div class="post_image"> 
                   <img src="../public/download (1).jfif" alt=""> 
                </div>
                <div class="post_test">
                    <h1 class="font-bold">Django ORM'da annotate metodi</h1>
                </div>
            </div>
            <div class="post_card flex gap-x-4 bg-white px-4 py-4 rounded-lg shadow-md">
                <div class="post_image"> 
                   <img src="../public/download (1).jfif" alt=""> 
                </div>
                <div class="post_test">
                    <h1 class="font-bold">Django ORM'da annotate metodi</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.menu{
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    background-color: var(--light-background);
}
.post_image{
    width: 100px;
    height: 70px;
}
.post_image img{
    width: 100%;
    height: 100%;
}
.posts{
    margin: 0 auto;
}
</style>