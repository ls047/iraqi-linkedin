<template>
  <div class="min-h-screen bg-gradient-to-br from-red-800 via-red-700 to-red-900 relative overflow-hidden">
    <!-- Iraqi Flag Background -->
    <div class="absolute inset-0">
      <!-- Red stripe (top) -->
      <div class="absolute top-0 left-0 w-full h-1/3 bg-red-600"></div>
      <!-- White stripe (middle) -->
      <div class="absolute top-1/3 left-0 w-full h-1/3 bg-white">
        <h1 class="text-green-600 text-center text-7xl scale-150 translate-y-10 w-full font-bold">الله أكبر</h1>
      </div>
      <!-- Black stripe (bottom) -->
      <div class="absolute top-2/3 left-0 w-full h-1/3 bg-black"></div>
      <!-- Takbir text on white stripe -->
    </div>

    <!-- Decorative Elements -->
    <div class="absolute top-10 left-10 w-20 h-20 border-4 border-green-700 rounded-full opacity-20"></div>
    <div class="absolute top-20 right-20 w-16 h-16 border-4 border-green-700 rounded-full opacity-20"></div>
    <div class="absolute bottom-20 left-20 w-12 h-12 border-4 border-green-700 rounded-full opacity-20"></div>

    <!-- Main Content -->
    <div class="relative z-10 flex items-center justify-center min-h-screen p-4">
      <div class="w-full max-w-md">
        <!-- Header -->
        <div class="text-center mb-8">

          <h1 class="text-3xl font-bold text-white mb-2">مرحباً بك</h1>
          <p class="text-yellow-200 text-lg">فرصة الي</p>
        </div>

        <!-- Login Form -->
        <div class="bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-green-400/30 relative">
          <!-- Green Pattern Border -->
          <div class="absolute inset-0 rounded-2xl border-2 border-green-500/50 opacity-60"></div>
          <div class="absolute top-2 left-2 right-2 bottom-2 rounded-xl border border-green-300/40"></div>

          <form dir="rtl" @submit.prevent="handleLogin" class="space-y-6 relative z-10">
            <!-- Email Field -->
            <div>
              <label class="block text-green-700 text-sm font-medium mb-2">
                البريد الإلكتروني / Email
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  v-model="email"
                  type="email"
                  required
                  class="w-full pl-10 pr-4 py-3 bg-green-900/30 border border-green-400/50 rounded-lg text-white placeholder-green-200/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
            </div>

            <!-- Password Field -->
            <div>
              <label class="block text-green-600 text-sm font-medium mb-2">
                كلمة المرور / Password
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  class="w-full pl-10 pr-12 py-3 bg-green-900/30 border border-green-400/50 rounded-lg text-white placeholder-green-200/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                  placeholder="أدخل كلمة المرور"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <svg v-if="showPassword" class="h-5 w-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                  <svg v-else class="h-5 w-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Remember Me & Forgot Password -->
            <div class="flex items-center justify-between">
              <label class="flex items-center">
                <input type="checkbox" v-model="rememberMe" class="w-4 h-4 text-green-600 bg-green-900/30 border-green-400 rounded focus:ring-green-500 focus:ring-2">
                <span class="ml-2 text-green-700 text-sm">تذكرني</span>
              </label>
              <a href="#" class="text-green-700 hover:text-green-200 text-sm transition-colors duration-300">
                نسيت كلمة المرور؟
              </a>
            </div>

            <!-- Login Button -->
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isLoading" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                جاري تسجيل الدخول...
              </span>
              <span v-else>تسجيل الدخول / Login</span>
            </button>

            <!-- Divider -->
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-green-300/30"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-transparent text-green-200">أو / Or</span>
              </div>
            </div>

            <!-- Social Login -->
            <div class="grid grid-cols-2 gap-3">
              <button
                type="button"
                class="flex items-center justify-center px-4 py-2 border border-green-300/30 rounded-lg text-green-200 hover:bg-green-300/10 transition-all duration-300"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                Twitter
              </button>
              <button
                type="button"
                class="flex items-center justify-center px-4 py-2 border border-green-300/30 rounded-lg text-green-200 hover:bg-green-300/10 transition-all duration-300"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
            </div>

            <!-- Sign Up Link -->
            <div class="text-center">
              <p class="text-green-200 text-sm">
                ليس لديك حساب؟
                <a href="#" class="text-green-300 hover:text-green-200 font-medium transition-colors duration-300">
                  إنشاء حساب جديد
                </a>
              </p>
            </div>
          </form>
        </div>

        <!-- Footer -->
        <div class="text-center mt-8">
          <p class="text-yellow-200/70 text-xs">
            © 2024 Iraqi LinkedIn. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Reactive data
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)
const isLoading = ref(false)

// Methods
const handleLogin = async () => {
  isLoading.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Handle login logic here
    console.log('Login attempt:', {
      email: email.value,
      password: password.value,
      rememberMe: rememberMe.value
    })

    // You can add your actual login logic here
    // For example: await authService.login(email.value, password.value)

  } catch (error) {
    console.error('Login error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(251, 191, 36, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(251, 191, 36, 0.7);
}

/* Custom focus styles */
input:focus {
  box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.3);
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}
</style>
