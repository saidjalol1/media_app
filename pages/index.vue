<script setup>
import { onMounted, onUnmounted, ref } from "vue"
import { useHead } from '#imports'
import {config } from "config"

const baseURL = config.baseUrl
const posts = ref([])
const catgories = ref([])
const tags = ref([])
const latestPost = ref({})


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
const getPosts = async () => {
  try {
    const response = await fetch(`${baseURL}/posts/`, {
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
    posts.value = data
    latestPost.value = data[data.length - 1]
    return data;
  } catch (error) {
    console.error('Error creating blog post:', error.message);
    throw error;
  }
};
const left_menu = ref(false)

const filterNewest = () => {
  posts.value = posts.value
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5)
}
const filterTopPosts = () => {
  posts.value = posts.value
    .slice()
    .sort((a, b) => (b.likes + b.views) - (a.likes + a.views))
    .slice(0, 5)
}
const left_menu_open = () =>{
    left_menu.value = !left_menu.value

    if (left_menu.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}
useHead({
  title: 'Media',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'description', content: "Explore the fascinating world of innovation and science. Our blog delivers in-depth articles on programming, cutting-edge technology, and the mysteries of physics, making complex topics accessible to learners and professionals alike. Whether you're a developer, tech enthusiast, or science lover, find insightful tutorials, analyses, and thought-provoking discussions to fuel your curiosity and enhance your knowledge." }
  ]
})
const updateFilteredPosts = (filteredPosts) => {
  posts.value = filteredPosts;
  left_menu.value = !left_menu.value // Update the posts with filtered data from the child
};
onMounted(() =>{
    getCategories()
    getPosts()
    getTags()
})
</script>
<template>
    <div class="wrapper px-4 pt-4">
        <div class="menu grid grid-cols-3 gap-x-4 bg-white px-4 py-4 rounded-lg shadow-md">
        <div>
            <button @click="filterNewest" class="btn w-full border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch-fill text-yellow-500" viewBox="0 0 16 16">
                        <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0"/>
                    </svg>
                </span>
                <span class="icon text-xs">Newest</span>
            </button>
        </div>
        <div>
            <button @click="filterTopPosts" class="btn w-full border border-yellow-500 px-2 py-2 rounded-lg font-bold flex items-center justify-center gap-x-2">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fire text-yellow-500" viewBox="0 0 16 16">
                        <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
                    </svg>
                </span>
                <span class="icon text-xs">Top</span>
            </button>
        </div>
        <div>
            <button @click="left_menu_open" class="btn w-full border border-yellow-500 px-2 py-2 rounded-lg font-bold flex items-center justify-center gap-x-2">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-menu-button-wide text-yellow-500" viewBox="0 0 16 16">
                        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/>
                        <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </span>
                <span class="icon text-xs">Menu</span>
            </button>
        </div>
    </div>
    </div>
    <div class="wrapper grid grid-cols-1 grid-row-1 lg:grid-cols-12 md:grid-cols-12  pt-4 gap-x-4 gap-y-4 px-4">
        <div class="posts col-span-1 lg:col-span-8 md:col-span-8 order-2 md:order-1 lg:order-1">
            <Post  :post="post" v-for="post in posts" :key="post.id"/>
        </div>
        <div class="additional col-span-1 lg:col-span-4 md:col-span-4 order-1 md:order-2 lg:order-2">
            <h1 class="font-bold text-2xl mt-2">Latest Post</h1>
            <LatestPosts :post="latestPost" />
            <NewsLetter />
        </div>
    </div>
    <LeftMenu :posts="posts" v-if="left_menu" @closeMenuEvent="left_menu_open" @updatePosts="updateFilteredPosts"/>
    <Footer />
    
</template>
<style scoped>
.wrapperr{
    max-width: 1200px;
    margin: 0 auto;
}
@media screen and ( max-width: 640px){
    .posts{
        margin: 0 auto;
    }
}
@media screen and ( max-width: 1024){
    .wrapper{
        flex-direction: column;
    }
}
</style>