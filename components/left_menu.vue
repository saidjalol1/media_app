<script setup>
import {ref, defineEmits } from 'vue';
import {config } from "config"

const baseURL = config.baseUrl
const posts = ref([])
const catgories = ref([])
const tags = ref([])
const filterType = ref("newest");

const props = defineProps(['posts']);
const emit = defineEmits(['closeMenuLeft','updatePosts']);

const closeMenu = () =>{
    const result =  "close"
    emit('closeMenuEvent', result);
    return result;
}
const getCategories = async () => {
  try {
    const response = await fetch(`${baseURL}/categories/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to create blog post');
    }

    const data = await response.json();
    catgories.value = data
    
    return data;
  } catch (error) {
    console.error('Error creating blog post:', error.message);
    throw error;
  }
};
const getTags = async () => {
  try {
    const response = await fetch(`${baseURL}/tags/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to create blog post');
    }

    const data = await response.json();
    tags.value = data
    return data;
  } catch (error) {
    console.error('Error creating blog post:', error.message);
    throw error;
  }
};
onMounted(() =>{
    getCategories()
    getTags()
})


// Filtered posts based on selected filter type
const filteredPosts = computed(() => {
  const today = new Date();

  return props.posts.filter((post) => {
    const postDate = new Date(post.date);

    if (filterType.value === 'newest') {
      const weekAgo = new Date(today);
      weekAgo.setDate(today.getDate());
      return postDate >= weekAgo;
    } else if (filterType.value === 'thisWeek') {
      const weekAgo = new Date(today);
      weekAgo.setDate(today.getDate() - 7);
      return postDate >= weekAgo;
    } else if (filterType.value === 'thisMonth') {
      const monthAgo = new Date(today);
      monthAgo.setMonth(today.getMonth() - 1);
      return postDate >= monthAgo;
    }
    return true;
  }).sort((a, b) => (filterType.value === 'newest' ? new Date(b.date) - new Date(a.date) : 0));
});

// Emit only when filter type changes
watch(filterType, () => {
  emit('updatePosts', filteredPosts.value);
});
</script>
<template>
    <div class="menu_left bg-white pt-20 px-10 shadow-lg">
        <div @click="closeMenu" class="close flex justify-end mb-4">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-square-fill text-yellow-500" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
                </svg>
            </button>
        </div>
        <div class="menu_body">
            <div>
                <h1 class="font-bold text-xl">Filter by Time</h1>
                <div class="btns flex flex-wrap gap-y-2 gap-x-2 mt-3">
                    <button @click="filterType = 'thisWeek'" class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-day text-yellow-500" viewBox="0 0 16 16">
                                <path d="M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a2 2 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43m.094 5.093h.672V7.418h-.672z"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">This week</span>
                    </button>
                    <button @click="filterType = 'thisMonth'" class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date text-yellow-500" viewBox="0 0 16 16">
                                <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">This month</span>
                    </button>
                    <button @click="filterType = 'newest'" class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch-fill text-yellow-500" viewBox="0 0 16 16">
                                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">Newest</span>
                    </button>
                </div>
            </div>
            <div class="mt-10">
                <h1 class="font-bold text-xl">Categories</h1>
                <div class="btns flex gap-x-2 mt-3 flex-wrap gap-y-2">
                    <button v-for="category in catgories" :key="category.id" class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-tag text-yellow-500" viewBox="0 0 16 16">
                                <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"/>
                                <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"/>
                        </svg>
                        <span class="icon text-xs">{{ category.name }}</span>
                    </button>
                </div>
            </div>
            <div class="mt-10">
                <h1 class="font-bold text-xl ">Tags</h1>
                <div class="btns flex flex-wrap gap-y-2 gap-x-2 mt-3">
                    <button v-for="tag in tags" :key="tag.id" class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-hash text-yellow-500" viewBox="0 0 16 16">
                                <path d="M8.39 12.648a1 1 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1 1 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.51.51 0 0 0-.523-.516.54.54 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532s.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531s.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">{{ tag.name }}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.menu_left {
    width: 500px;
    height: 100vh;
    position:absolute;
    top: 0;
    right: 0;
}
@media screen and (max-width:768px){
    .menu_left{
        width: 100%;
    }
}
</style>