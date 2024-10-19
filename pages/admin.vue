<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import Editor from "~/components/editor.vue";

const route = useRouter()
const posts = ref([])
const catgories = ref([])

const post_modal = ref(false)

const dummy_data = [
    {   
        "id":1,
        "title":"Binary Search Algorithm",
        "body":"Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one. We used binary search in the guessing game in the introductory tutorial",
        "likes": 20,
        "dislikes":10,
        "views":200,
        
    },
    {   
        "id":2,
        "title":"Binary Search Algorithm",
        "body":"Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one. We used binary search in the guessing game in the introductory tutorial",
        "likes": 20,
        "dislikes":10,
        "views":200,
        
    },
    {   
        "id":3,
        "title":"Binary Search Algorithm",
        "body":"Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one. We used binary search in the guessing game in the introductory tutorial",
        "likes": 20,
        "dislikes":10,
        "views":200,
        
    },
    {   
        "id":4,
        "title":"Binary Search Algorithm",
        "body":"Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one. We used binary search in the guessing game in the introductory tutorial",
        "likes": 20,
        "dislikes":10,
        "views":200,
        
    },
    {   
        "id":5,
        "title":"Binary Search Algorithm",
        "body":"Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one. We used binary search in the guessing game in the introductory tutorial",
        "likes": 20,
        "dislikes":10,
        "views":200,
        
    }
]
const category_dummy = [
    {
        "id":1,
        "name":"Technology",
    },
    {
        "id":3,
        "name":"Technology",
    },
    {
        "id":4,
        "name":"Technology",
    },
    {
        "id":5,
        "name":"Technology",
    }
]

const togglePostModal = () =>{
    post_modal.value = !post_modal.value
}

onMounted(()=>{
    let token = localStorage.getItem("token_blog")
    posts.value = dummy_data
    catgories.value = category_dummy
    // if (!token || token == "undefined" || token === null){
    //     route.push("/login")
    // }else{
    //     console.log("Logged in successfully");
    // }
})
</script>
<template>
<div class="wrapper pt-8 flex justify-between pt-5 px-5 items-center">
    <h1 class="text-xl font-bold">Posts</h1>
    <button @click="togglePostModal" class="btn px-3 py-3 rounded-lg bg-white">Create</button>
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
<div class="wrapper pt-5 px-5">
    <h1 class="text-xl font-bold">Categories</h1>
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
<div class="wrapper pt-5 px-5">
    <h1 class="text-xl font-bold">Tags</h1>
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
                <tr class="w-full px-4 hover:bg-yellow-600 rounded-lg hover:cursor-pointer hover:text-white" v-for="category in catgories" :key="category.id">
                    <td class="py-2 px-2">{{ category.id }}</td>
                    <td class="py-2 px-2">{{ category.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div v-if="post_modal" class="post_create_modal bg-white py-20 ">
    <div class="w-full">
        <form class="w-full px-10">
            <div class="relative z-0 w-full mb-5">
                <input type="text" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
            </div>
            <div class="relative z-0 w-full mb-5 mt-10">
                <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                    <option selected disabled>Select category</option>
                    <option v-for="category in catgories" :key="category.id">{{  category.name }}</option>
                </select>
                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
            </div>
            <div class="relative z-0 w-full mb-5 mt-10">
                <select class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" multiple >
                    <option class="px-10 mt-2" v-for="category in catgories" :key="category.id">{{  category.name }}</option>
                </select>
                <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tags</label>
            </div>
            <div class="mt-10 mb-10">
                    <Editor />
            </div>
            <button type="submit" class="text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center">Submit</button>
            <button @click="togglePostModal" type="button" class="ml-4 text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">close</button>
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