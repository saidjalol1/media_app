<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { config } from 'config'; // Adjust this import based on your setup

const base = config.baseUrl;
const username = ref('');
const password = ref('');
const error = ref("")
const router = useRouter();

const handleSubmit = async () => {
try {
  const response = await fetch(`${base}/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username.value,
      hashed_password: password.value
    })
    
  });

  if (!response.ok) {
    console.log("Error status:", response.status);
    error.value =  await response.text()
    return; // Exit function if response is not OK
  }

  const data = await response.json();

  // Save token in local storage
  localStorage.setItem('token_blog', data.access_token);

  // Redirect to the home page or another protected route
  router.push('/');
} catch (error) {
  console.error('Login failed:', error);
  error.value = error
}
};
</script>
<template>
    <div class="login-container shadow-lg">
      <div class="login-card">
        <div class="logo text-2xl font-bold text-black"><span class="text-yellow-700">Me</span>dia</div>
        <form @submit.prevent="handleSubmit" class="mt-10">
          <div class="input-group">
            <label for="username">Foydalanuvchi nomi</label>
            <input
              v-model="username"
              type="text"
              id="username"
              required
            />
          </div>
          <div class="input-group">
            <label for="password">Parol</label>
            <input
              v-model="password"
              type="password"
              id="password"
              required
            />
          </div>
          <div>
            <p class="text-red-600">{{  error  }}</p>
          </div>
          <button type="submit">Kirish</button>
        </form>
      </div>
    </div>
  </template>
  <style scoped>
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: var(--light-background);
      padding: 0 5%;
    }
  
    .login-card {
      background-color: white;
      padding: 2rem;
      border-radius: 8px;
      max-width: 400px;
      width: 100%;
      text-align: center;
    }
  
    h1 {
      margin-bottom: 1.5rem;
      font-size: 24px;
      color: #333333;
    }
  
    .input-group {
      margin-bottom: 1rem;
      text-align: left;
    }
  
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #333333;
    }
  
    input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #dddddd;
      border-radius: 4px;
      font-size: 16px;
      color: #333333;
      background-color: #f9f9f9;
      transition: border-color 0.3s ease;
    }
  
    input:focus {
      border-color: hsl(44, 98%, 44%);
      outline: none;
    }
  
    button {
      width: 100%;
      padding: 0.75rem;
      background-color: rgb(245, 183, 12);
      color: #ffffff;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    button:hover {
      background-color: rgb(228, 170, 13);
    }
  </style>