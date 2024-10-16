<script setup>
import { useRouter , useRoute}  from "vue-router"

const route  = useRouter()
const gotoPage = (page) => {
    route.push(`/${page}`)
}
</script>
<template>
    <footer class="bg-white shadow-lg mt-10 py-10 px-10 rounded-lg">
        <div class="wrapper">
            <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-y-5">
                <div>
                    <div class="logo text-2xl font-bold text-black"><span class="text-yellow-500">Me</span>dia</div>
                    <div class="text-gray-800 text-xl mt-4 flex items-center gap-x-2 hover:text-yellow-500">
                        Learn with us
                        <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-globe-central-south-asia text-yellow-500" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.882 1.731a.48.48 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.7.7 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a1 1 0 0 0-.462-.04 7 7 0 0 1 2.45-2.027m-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.8.8 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.45.45 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282l.04-.001a7.003 7.003 0 0 1-12.658.905Z"/>
                        </svg>
                    </div>
                </div>
                <div class="text-gray-800 text-sm">
                    Daily new articles in theme of science,Technology,Prodgramming and posts for english learners
                </div>
            </div>
        </div>
    </footer>
</template>