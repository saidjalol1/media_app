<script setup>
import { onMounted, ref } from 'vue';
import { useRouter , useRoute} from "vue-router"
import { config } from "config"

const route = useRouter()
const baseUrl = config.baseUrl

const props = defineProps({
    post: Object
})
const imageUrl = ref("")
const postbody = ref(`${props.post.body}`)
const post_dislikes = ref("")
const post_likes = ref("")
const post_views = ref("")
const truncateText = (text, limit) => {
  return text.length > limit ? text.substring(0, limit) + '...' : text;
};

const likePost = async (post_id) => {
  try {
    const response = await fetch(`${baseUrl}/like/${post_id}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to create blog post');
    }

    const data = await response.json();
    post_likes.value = data.likes
    post_dislikes.value = data.dislikes
    post_views.value = data.views
    return data;
  } catch (error) {
    console.error('Error creating blog post:', error.message);
    throw error;
  }
};
const dislikePost = async (post_id) => {
  try {
    const response = await fetch(`${baseUrl}/dislike/${post_id}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to create blog post');
    }

    const data = await response.json();
    post_likes.value = data.likes
    post_dislikes.value = data.dislikes
    post_views.value = data.views
    return data;
  } catch (error) {
    console.error('Error creating blog post:', error.message);
    throw error;
  }
};
const gotoPage = (page) => {
    route.push(`/${page}`)
}
onMounted(() =>{
    imageUrl.value = `${baseUrl}${props.post.image}`
    post_likes.value = props.post.likes
    post_dislikes.value = props.post.dislikes
    post_views.value = props.post.views
})
</script>
<template>
    <div  class="post px-4 py-4 bg-white shadow rounded-lg hover:shadow-lg mt-4">
        <div @click="gotoPage(post.id)" class="grid grid-cols-1 grid-row-1 sm:grid-cols-10 lg:grid-cols-10 gap-x-3 items-center gap-y-2">
            <div class="image col-span-1 sm:col-span-3 ">
                <img width="100%" height="100%" :src="imageUrl" alt="">
            </div>
            <div class="post_text col-span-1 lg:col-span-7 md:col-span-7 sm:col-span-7">
                <div class="category text-yellow-600 mt-2">{{  post.category?.name }}</div>
                <h1 class="font-bold text-xl mt-2">{{ post.title }}</h1>
                <p class="post-body lg:block md:block sm:block hidden text-sm text-gray-800 mt-2 md:text-sm lg:text-sm" v-html="truncateText(postbody, 100)"></p>
            </div>
        </div>
        <div class="likes_dislikes flex gap-x-4 items-center mt-4">
            <span @click="likePost(post.id)" class="flex gap-x-2 items-center text-red-600 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                </svg>
                {{ post_likes}}+
            </span>
            <span @click="dislikePost(post.id)" class="flex gap-x-2 items-center text-blue-600 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                    <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591"/>
                </svg>
                {{ post_dislikes}}+
            </span>
            <span class="flex gap-x-2 items-center text-yellow-600 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                </svg>
                {{ post_views}}
            </span>
        </div>
    </div>
</template>
<style scoped>
.image{
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
img{
    width: 100%;
    height: 100%;
    max-height: 200px;
    border-radius: 10px;
}
</style>