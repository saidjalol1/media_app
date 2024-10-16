<script setup>
import { ref } from "vue"
import { useHead } from '#imports'

const left_menu = ref(false)

const post = {
    "id":1,
    "title":"Example in a Real Case (Blog Post Snippet):",
    "category":{
        "name":"Technology"
    },
    "body":"In Nuxt.js (or Vue), you can limit the number of characters displayed in a string by using JavaScript within the template. You can create a simple method or computed property to truncate a string to a specified length and append ellipsis (...) if necessary.In Nuxt.js (or Vue), you can limit the number of characters displayed in a string by using JavaScript within the template. You can create a simple method or computed property to truncate a string to a specified length and append ellipsis (...) if necessary."
}
const mobile_search_open = () =>{
    left_menu.value = !left_menu.value

    if (left_menu.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}
useHead({
  title: 'My Page Title',
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'description', content: "Explore the fascinating world of innovation and science. Our blog delivers in-depth articles on programming, cutting-edge technology, and the mysteries of physics, making complex topics accessible to learners and professionals alike. Whether you're a developer, tech enthusiast, or science lover, find insightful tutorials, analyses, and thought-provoking discussions to fuel your curiosity and enhance your knowledge." }
  ]
})
</script>
<template>
    <div class="wrapper px-4 pt-4">
        <Menu @click="mobile_search_open" />
    </div>
    <div class="wrapper flex flex-col-reverse lg:flex-row pt-4 gap-x-4 gap-y-4 px-4">
        <div class="posts">
            <Post :post="post"/>
            <Post :post="post"/>
            <Post :post="post"/>
            <Post :post="post"/>
        </div>
        <div class="additional">
            <h1 class="font-bold text-2xl mt-2">Latest Post</h1>
            <LatestPosts :post="post"/>
            <NewsLetter />
        </div>
    </div>
    <LeftMenu v-if="left_menu" @closeMenuEvent="mobile_search_open"/>
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