<script setup>
import { ref } from "vue";

const desktop = ref(true)
const search_menu = ref(false)

const mobile_search_open = (choice) =>{
    if (choice === "open" && desktop.value === false){
        search_menu.value = true
        document.body.style.overflow = 'hidden';
    }else if (choice === "close" && desktop.value === false){
        search_menu.value = false
        document.body.style.overflow = 'auto';
    }else{
        console.log("There is problem opening the mobile menu");
    }
    
}

const updateWindowSize = () => {
  if (window.innerWidth <= 768) {
    desktop.value = false;
  }else {
    desktop.value = true;
  }
};

onMounted(() => {
  updateWindowSize();
  window.addEventListener('resize', updateWindowSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowSize);
});
</script>
<template>
    <header class="flex justify-start items-center shrink-0">
        <div class="header-container flex justify-between items-center">
            <div class="logo text-2xl font-bold text-black"><span class="text-yellow-500">Me</span>dia</div>
            <div v-if="desktop" class="search rounded-lg shadow hover:shadow-md bg-white px-2 flex items-center">
                <input  class="px-2 py-2 outline-none text-black rounded-lg" type="text" placeholder="Search posts">
                <button type="button px-2 py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </button>
            </div>
            <div v-else class="search rounded-lg shadow hover:shadow-md bg-white px-3 py-3 flex items-center">
                <button @click="mobile_search_open('open')" type="button px-2 py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </button>
            </div>
        </div>
    </header>
    <MobileSearch v-if="search_menu" @closeMenuEvent="mobile_search_open('close')"/>
</template>
<style scoped>
header{
    width: 100%;
    height: 70px;
    background-color: rgba(250, 242, 231, 0.973);
    padding: 0% 10%;
}
.header-container{
    max-width: 1200px;
    width: 1200px;
    margin: 0 auto;
}
</style>