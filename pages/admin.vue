<script setup>
import { onUpdated, ref } from "vue"
import { useRouter } from "vue-router"
import Editor from "~/components/editor.vue";
import { config } from "config"


const baseURL = config.baseUrl
const route = useRouter()
const posts = ref([])
const catgories = ref([])
const tags = ref([])
const blog_token = ref("")

const post_modal = ref(false)
const category_modal = ref(false)
const tag_modal = ref(false)

const postData = ref({
    title: "",
    body: "",
    image:"",
    category_id: null,
    tags: []
});
const category = ref({})
const tag = ref({})
const imageFile = ref(null);


const imageUpload = async () =>{
    imageFile.value = event.target.files[0] 
    try {
        if (!imageFile.value) {
          alert("Please select an image to upload.")
        return
    }
    const formData = new FormData()
    formData.append("image", imageFile.value)
    const response = await fetch(`${baseURL}/image/upload`, {
      method: "POST",
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`)
    }

    const result = await response.json()
    postData.value.image = result
    console.log("Image uploaded successfully:", result)
  } catch (error) {
    console.error("Upload failed:", error)
  }
}

const createPost = async () => {
  try {
    console.log(postData.value);
    
    const response = await fetch(`${baseURL}/post/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${blog_token.value}`
      },
      body: JSON.stringify(postData.value), // Send the JSON string
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to create blog post');
    }

    const data = await response.json();
    await getPosts()
    alert("Created successfully")
    return data;
  } catch (error) {
    console.error('Error creating blog post:', error.message);
    throw error;
  }
};
const createCategory = async () => {
  try {
    const response = await fetch(`${baseURL}/categories/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${blog_token.value}`
      },
      body: JSON.stringify(category.value), // Send the JSON string
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert(`${errorData.detail}`)
      throw new Error(errorData.detail || 'Failed to create blog post');
    }

    const data = await response.json();
    await getCategories()
    alert("Created successfully")
    return data;
  } catch (error) {
    console.error('Error creating blog post:', error.message);
    throw error;
  }
};
const createTag = async () => {
  try {
    const response = await fetch(`${baseURL}/tags/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${blog_token.value}`
      },
      body: JSON.stringify(tag.value), // Send the JSON string
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to create blog post');
    }

    const data = await response.json();
    await getTags()
    alert("Created successfully")
    return data;
  } catch (error) {
    console.error('Error creating blog post:', error.message);
    throw error;
  }
};
const getCategories = async () => {
  try {
    const response = await fetch(`${baseURL}/categories/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${blog_token.value}`
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
        'Authorization': `Bearer ${blog_token.value}`
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
        'Authorization': `Bearer ${blog_token.value}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to create blog post');
    }

    const data = await response.json();
    posts.value = data
    return data;
  } catch (error) {
    console.error('Error creating blog post:', error.message);
    throw error;
  }
};
const togglePostModal = () =>{
    post_modal.value = !post_modal.value
    if (!post_modal.value) {
        // Reset data when closing the modal
        postData.value = {
            title: "",
            body: "",
            category_id: null,
            tags: []
        };
        imageFile.value = null;
    }
}
const toggleCategoryModal = () =>{
    category_modal.value = !category_modal.value
    if (!category_modal.value) {
        // Reset data when closing the modal
        category.value = {}
    }
}
const toggleTagModal = () =>{
    tag_modal.value = !tag_modal.value
    if (!tag_modal.value) {
        // Reset data when closing the modal
        tag.value = {}
    }
}
const logout = () =>{
    localStorage.removeItem("token_blog")
    let token = localStorage.getItem("token_blog")

    if (!token || token == "undefined" || token === null){
        route.push("/login")
    }else{
        console.log("Logged in successfully");
    }
}
onMounted(()=>{
    let token = localStorage.getItem("token_blog")
    blog_token.value = token
    if (!token || token == "undefined" || token === null){
        route.push("/login")
    }else{
        route.push("/admin")
        console.log("Logged in successfully");
    }
    getCategories()
    getTags()
    getPosts()
})
</script>
<template>
<div class="wrapper pt-8 flex justify-between pt-5 px-5 items-center">
    <h1 class="text-xl font-bold">Posts</h1>
    <div class="flex items-center justify-center gap-x-2">
        <button @click="togglePostModal" class="btn px-3 py-3 rounded-lg bg-white">Create</button>
        <button @click="logout" class="btn px-3 py-3 rounded-lg bg-white">Logout</button>
    </div>
</div>
<div class="wrapper rounded-lg rounded-lg pt-5 px-5">
    <div class="posts bg-white py-5 px-5 rounded-lg shadow-lg">
        <table class="w-full">
            <thead>
                <tr class="font-bold">
                    <td>Id</td>
                    <td>Title</td>
                    <td>Views</td>
                    <td>Likes</td>
                    <td>Dislikes</td>
                </tr>
            </thead>
            <tbody>
                <tr class="w-full px-4 hover:bg-yellow-600 rounded-lg hover:cursor-pointer hover:text-white" v-for="post in posts" :key="post.id" :value="post.id">
                    <td class="py-2 px-2">{{ post.id }}</td>
                    <td class="py-2 px-2">{{ post.title }}</td>
                    <td class="py-2 px-2">{{ post.views }}</td>
                    <td class="py-2 px-2">{{ post.likes }}</td>
                    <td class="py-2 px-2">{{ post.dislikes }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div class="wrapper pt-5 px-5 flex justify-between items-center">
    <h1 class="text-xl font-bold">Categories</h1>
    <button @click="toggleCategoryModal" class="btn px-3 py-3 rounded-lg bg-white">Create</button>
</div>
<div class="wrapper pt-5 px-5">
    <div class="posts bg-white py-5 px-5 rounded-lg shadow-lg">
        <table class="w-full">
            <thead>
                <tr class="font-bold">
                    <td>Id</td>
                    <td>Name</td>
                </tr>
            </thead>
            <tbody>
                <tr class="w-full px-4 hover:bg-yellow-600 rounded-lg hover:cursor-pointer hover:text-white" v-for="category in catgories" :key="category.id">
                    <td class="py-2 px-2">{{ category.id }}</td>
                    <td class="py-2 px-2">{{ category.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div class="wrapper pt-5 px-5 flex justify-between items-center">
    <h1 class="text-xl font-bold">Tags</h1>
    <button @click="toggleTagModal" class="btn px-3 py-3 rounded-lg bg-white">Create</button>
</div>
<div class="wrapper pt-5 px-5">
    <div class="posts bg-white py-5 px-5 rounded-lg shadow-lg  mb-10">
        <table class="w-full">
            <thead>
                <tr class="font-bold">
                    <td>Id</td>
                    <td>Name</td>
                </tr>
            </thead>
            <tbody>
                <tr class="w-full px-4 hover:bg-yellow-600 rounded-lg hover:cursor-pointer hover:text-white" v-for="tag in tags" :key="tag.id">
                    <td class="py-2 px-2">{{ tag.id }}</td>
                    <td class="py-2 px-2">{{ tag.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div v-if="post_modal" class="post_create_modal bg-white py-20 ">
    <div class="w-full">
        <form @submit.prevent="createPost" class="w-full px-10">
            <div class="relative z-0 w-full mb-5">
                <input type="text" v-model="postData.title" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
            </div>
            <div class="relative z-0 w-full mb-5">
                <input type="file" @change="imageUpload"/>
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
            </div>
            <div class="relative z-0 w-full mb-5 mt-10">
                <select v-model="postData.category_id" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                    <option selected disabled>Select category</option>
                    <option v-for="category in catgories" :key="category.id" :value="category.id">{{  category.name }}</option>
                </select>
                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
            </div>
            <div class="relative z-0 w-full mb-5 mt-10">
                <select v-model="postData.tags" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" multiple >
                    <option class="px-10 mt-2" v-for="tag in tags" :key="tag.id" :value="tag.id">{{  tag.name }}</option>
                </select>
                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tags</label>
            </div>
            <div  class="mt-10 mb-10">
                <client-only>
                    <Editor v-model="postData.body" />
                </client-only>
            </div>
            <button type="submit" class="text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center">Submit</button>
            <button @click="togglePostModal" type="button" class="ml-4 text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">close</button>
        </form>
    </div>
</div>
<div v-if="category_modal" class="post_create_modal bg-white py-20 ">
    <div class="w-full">
        <form @submit.prevent="createCategory" class="w-full px-10">
            <div class="relative z-0 w-full mb-5">
                <input type="text" v-model="category.name" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
            </div>
            <button type="submit" class="text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center">Submit</button>
            <button @click="toggleCategoryModal" type="button" class="ml-4 text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">close</button>
        </form>
    </div>
</div>
<div v-if="tag_modal" class="post_create_modal bg-white py-20 ">
    <div class="w-full">
        <form @submit.prevent="createTag" class="w-full px-10">
            <div class="relative z-0 w-full mb-5">
                <input type="text" v-model="tag.name" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
            </div>
            <button type="submit" class="text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center">Submit</button>
            <button @click="toggleTagModal" type="button" class="ml-4 text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">close</button>
        </form>
    </div>
</div>
</template>
<style scoped>
.post_create_modal{
    position:fixed;
    top: 0;
    width: 100%;
    height: 100%;
}
</style>