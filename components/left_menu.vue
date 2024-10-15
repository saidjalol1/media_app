<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['closeMenuLeft']);
const closeMenu = () =>{
    const result =  "close"
    emit('closeMenuEvent', result);
    return result;
}
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
                    <button class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-day text-yellow-500" viewBox="0 0 16 16">
                                <path d="M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a2 2 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43m.094 5.093h.672V7.418h-.672z"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">This week</span>
                    </button>
                    <button class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date text-yellow-500" viewBox="0 0 16 16">
                                <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">This month</span>
                    </button>
                    <button class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
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
                    <button class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash text-yellow-500" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">Programming</span>
                    </button>
                    <button class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-atom text-yellow-500" viewBox="0 0 16 16">
                                <path d="M8 2c-1.628 0-3.251.74-4.486 2.225-1.234 1.483-2.004 3.494-2.004 5.275 0 1.781.77 3.792 2.004 5.275C4.749 13.26 6.372 14 8 14s3.251-.74 4.486-2.225c1.234-1.483 2.004-3.494 2.004-5.275 0-1.781-.77-3.792-2.004-5.275C11.251 2.74 9.628 2 8 2zm0 10.5c-1.402 0-2.884-.655-4.031-1.834C2.777 9.421 2 7.71 2 6.5S2.777 3.579 3.969 2.834C5.116 1.655 6.598 1 8 1c1.402 0 2.884.655 4.031 1.834C13.223 3.579 14 5.29 14 6.5s-.777 2.921-1.969 4.166C10.884 11.845 9.402 12.5 8 12.5zm-.5-1a1.5 1.5 0 1 1 1 0 1.5 1.5 0 0 1-1 0zm.75-2a.25.25 0 0 0-.5 0v.5a.25.25 0 0 0 .5 0v-.5zm0-1a.25.25 0 0 0-.5 0v.5a.25.25 0 0 0 .5 0v-.5zm.75 1a.25.25 0 0 0-.5 0v.5a.25.25 0 0 0 .5 0v-.5zm0-1a.25.25 0 0 0-.5 0v.5a.25.25 0 0 0 .5 0v-.5zM8 6.5a1 1 0 1 1-1-1 1 1 0 0 1 1 1z"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">Physics</span>
                    </button>
                    <button class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="0.5" class="bi bi-saturn text-yellow-500" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="4" stroke="currentColor" stroke-width="0.5" fill="none"/>
                                <ellipse cx="8" cy="8" rx="7" ry="3" stroke="currentColor" stroke-width="0.5" fill="none"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">Space</span>
                    </button>
                    <button class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate text-yellow-500" viewBox="0 0 16 16">
                                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"/>
                                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">English</span>
                    </button>
                    <button class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-infinity text-yellow-500" viewBox="0 0 16 16">
                                <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">Math</span>
                    </button>
                </div>
            </div>
            <div class="mt-10">
                <h1 class="font-bold text-xl ">Tags</h1>
                <div class="btns flex flex-wrap gap-y-2 gap-x-2 mt-3">
                    <button class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-day text-yellow-500" viewBox="0 0 16 16">
                                <path d="M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a2 2 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43m.094 5.093h.672V7.418h-.672z"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">Python</span>
                    </button>
                    <button class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date text-yellow-500" viewBox="0 0 16 16">
                                <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">Django</span>
                    </button>
                    <button class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch-fill text-yellow-500" viewBox="0 0 16 16">
                                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">Fastapi</span>
                    </button>
                    <button class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch-fill text-yellow-500" viewBox="0 0 16 16">
                                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">Web</span>
                    </button>
                    <button class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch-fill text-yellow-500" viewBox="0 0 16 16">
                                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">Grammer</span>
                    </button>
                    <button class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch-fill text-yellow-500" viewBox="0 0 16 16">
                                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">Ai</span>
                    </button>
                    <button class="btn border border-yellow-500 px-2 py-2 rounded-lg  font-bold flex items-center justify-center gap-x-2">
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch-fill text-yellow-500" viewBox="0 0 16 16">
                                <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0"/>
                            </svg>
                        </span>
                        <span class="icon text-xs">books</span>
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