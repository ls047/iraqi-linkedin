<template>
  <motion.div
    class="min-h-screen bg-gray-150 text-gray-900"
    :initial="{ opacity: 0, y: -40 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, ease: 'easeOut' }"
  >
    <div class="max-w-6xl mx-auto px-4 py-8" dir="rtl">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold bg-gradient-to-r from-[#0A66C2] to-blue-600 bg-clip-text text-transparent">
          الرسائل
        </h1>
        <p class="text-gray-600 mt-2">تواصل مع معارفك العراقيين 🇮🇶</p>
      </div>

      <div class="bg-white/80 backdrop-blur-sm border border-white/20 shadow-2xl rounded-2xl overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-3 h-[600px]">
          <!-- Conversations List -->
          <div class="lg:col-span-1 border-l border-gray-200/50 bg-gradient-to-b from-gray-50/50 to-white/30">
            <div class="p-6 border-b border-gray-200/50 bg-white/50">
              <div class="relative">
                <input
                  type="search"
                  placeholder="🔍 دوّر في الرسائل..."
                  class="w-full rounded-xl bg-gray-100/80 border-0 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/50 focus:bg-white transition-all duration-300"
                />
                <div class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>

            <div class="h-[calc(600px-120px)] overflow-y-auto custom-scrollbar">
              <div
                v-for="conversation in conversations"
                :key="conversation.id"
                class="p-4 border-b border-gray-100/50 hover:bg-gradient-to-r hover:from-[#0A66C2]/5 hover:to-blue-50/50 cursor-pointer transition-all duration-300 group"
                :class="{
                  'bg-gradient-to-r from-[#0A66C2]/10 to-blue-100/50 border-[#0A66C2]/30 shadow-sm': selectedConversation?.id === conversation.id
                }"
                @click="selectConversation(conversation)"
              >
                <div class="flex items-center gap-4">
                  <div class="relative">
                    <img
                      :src="conversation.avatar"
                      :alt="conversation.name"
                      class="h-12 w-12 rounded-full ring-2 ring-white shadow-md object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div
                      v-if="conversation.unreadCount > 0"
                      class="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse shadow-lg"
                    >
                      {{ conversation.unreadCount }}
                    </div>
                    <div
                      v-else
                      class="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white shadow-sm"
                    ></div>
                  </div>

                  <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between mb-1">
                      <h3 class="font-semibold text-sm text-gray-900 truncate">
                        {{ conversation.name }}
                      </h3>
                      <span class="text-xs text-gray-500 whitespace-nowrap">
                        {{ conversation.lastMessageTime }}
                      </span>
                    </div>
                    <p class="text-xs text-gray-600 truncate leading-relaxed">
                      {{ conversation.lastMessage }}
                    </p>
                    <p class="text-xs text-gray-400 mt-1">
                      {{ conversation.title }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Chat Area -->
          <div class="lg:col-span-2 flex flex-col h-[600px] bg-gradient-to-br from-white/90 to-gray-50/50">
            <div v-if="selectedConversation" class="flex-1 flex flex-col">
              <!-- Chat Header -->
              <div class="p-6 border-b border-gray-200/50 bg-white/80 backdrop-blur-sm">
                <div class="flex items-center gap-4">
                  <img
                    :src="selectedConversation.avatar"
                    :alt="selectedConversation.name"
                    class="h-12 w-12 rounded-full ring-2 ring-[#0A66C2]/20 shadow-md"
                  />
                  <div class="flex-1">
                    <h3 class="font-semibold text-lg text-gray-900">{{ selectedConversation.name }}</h3>
                    <p class="text-sm text-gray-600">{{ selectedConversation.title }}</p>
                  </div>
                </div>
              </div>

              <!-- Messages -->
              <div class="flex-1 p-6 overflow-y-auto custom-scrollbar bg-gradient-to-b from-gray-50/30 to-white/50">
                <div class="space-y-4">
                  <div
                    v-for="message in selectedConversation.messages"
                    :key="message.id"
                    class="flex"
                    :class="{ 'justify-end': message.isFromMe }"
                  >
                    <motion.div
                      :initial="{ opacity: 0, y: 20, scale: 0.95 }"
                      :animate="{ opacity: 1, y: 0, scale: 1 }"
                      :transition="{ duration: 0.3, ease: 'easeOut' }"
                      class="max-w-xs lg:max-w-md px-4 py-3 rounded-2xl text-sm shadow-sm"
                      :class="message.isFromMe
                        ? 'bg-gradient-to-r from-[#0A66C2] to-blue-600 text-white rounded-br-md'
                        : 'bg-white text-gray-900 rounded-bl-md border border-gray-200/50'"
                    >
                      <p class="leading-relaxed">{{ message.text }}</p>
                      <p class="text-xs mt-2 opacity-70 text-right">
                        {{ message.time }}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>

              <!-- Message Input -->
              <div class="p-6 border-t border-gray-200/50 bg-white/80 backdrop-blur-sm">
                <div class="flex items-end gap-3">
                  <div class="flex-1 relative">
                    <textarea
                      v-model="newMessage"
                      rows="1"
                      placeholder="اكتب رسالتك هنا... 🇮🇶"
                      class="w-full rounded-xl bg-gray-100/80 border-0 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/50 focus:bg-white resize-none transition-all duration-300"
                      @keydown.enter.prevent="sendMessage"
                      @input="autoResize"
                    ></textarea>
                  </div>

                  <div class="flex items-center gap-2">
                    <button class="p-3 rounded-full hover:bg-gray-100 transition-colors">
                      😊
                    </button>
                    <button class="p-3 rounded-full hover:bg-gray-100 transition-colors">
                      📎
                    </button>
                    <button
                      @click="sendMessage"
                      class="px-6 py-3 bg-gradient-to-r from-[#0A66C2] to-blue-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
                      :disabled="!newMessage.trim()"
                    >
                      إرسال
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- No Conversation Selected -->
            <div v-else class="flex-1 flex items-center justify-center">
              <motion.div
                class="text-center"
                :initial="{ opacity: 0, scale: 0.8 }"
                :animate="{ opacity: 1, scale: 1 }"
                :transition="{ duration: 0.5, ease: 'easeOut' }"
              >
                <div class="text-6xl mb-6 animate-bounce">💬</div>
                <h3 class="text-xl font-semibold text-gray-700 mb-2">اختر محادثة</h3>
                <p class="text-gray-500">ابدأ المراسلة مع معارفك العراقيين</p>
                <div class="mt-6 flex justify-center">
                  <div class="flex gap-2">
                    <div class="w-2 h-2 bg-[#0A66C2] rounded-full animate-bounce"></div>
                    <div class="w-2 h-2 bg-[#0A66C2] rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                    <div class="w-2 h-2 bg-[#0A66C2] rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { ref, nextTick } from 'vue'

defineOptions({ name: 'MessagesPage' })

interface Message {
  id: string
  text: string
  time: string
  isFromMe: boolean
}

interface Conversation {
  id: string
  name: string
  title: string
  avatar: string
  lastMessage: string
  lastMessageTime: string
  unreadCount: number
  messages: Message[]
}

const conversations = ref<Conversation[]>([
  {
    id: '1',
    name: 'Zahraa Hameed',
    title: 'مصممة منتجات',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Zahraa%20Hameed',
    lastMessage: 'شكراً لك! راح أتواصل معك قريب',
    lastMessageTime: 'قبل 5 دقائق',
    unreadCount: 1,
    messages: [
      { id: '1', text: 'مرحبا! كيف الحال؟', time: '10:30 ص', isFromMe: false },
      { id: '2', text: 'الحمد لله، شكراً لسؤالك', time: '10:32 ص', isFromMe: true },
      { id: '3', text: 'شكراً لك! راح أتواصل معك قريب', time: '10:35 ص', isFromMe: false }
    ]
  },
  {
    id: '2',
    name: 'Hussein Al-Musawi',
    title: 'علاقات مطورين',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Hussein%20Al%20Musawi',
    lastMessage: 'أهلاً وسهلاً! كيف المشروع؟',
    lastMessageTime: 'قبل ساعة',
    unreadCount: 0,
    messages: [
      { id: '1', text: 'أهلاً وسهلاً! كيف المشروع؟', time: '09:15 ص', isFromMe: false },
      { id: '2', text: 'ممتاز الحمد لله، شكراً لسؤالك', time: '09:20 ص', isFromMe: true }
    ]
  },
  {
    id: '3',
    name: 'Amina Al-Rashid',
    title: 'مطورة فرونتند',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Amina%20Al-Rashid',
    lastMessage: 'ممتاز! راح أرسل لك الكود',
    lastMessageTime: 'قبل ساعتين',
    unreadCount: 2,
    messages: [
      { id: '1', text: 'مرحبا! شفت منشورك عن Vue.js', time: '08:30 ص', isFromMe: false },
      { id: '2', text: 'أهلاً! إيه رأيك في المنشور؟', time: '08:35 ص', isFromMe: true },
      { id: '3', text: 'ممتاز جداً! عندي سؤال عن Pinia', time: '08:40 ص', isFromMe: false },
      { id: '4', text: 'أكيد! شنو السؤال؟', time: '08:45 ص', isFromMe: true },
      { id: '5', text: 'ممتاز! راح أرسل لك الكود', time: '09:30 ص', isFromMe: false }
    ]
  },
  {
    id: '4',
    name: 'Karim Al-Zubaidi',
    title: 'مهندس باك إند',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Karim%20Al-Zubaidi',
    lastMessage: 'أكيد! راح أكون موجود',
    lastMessageTime: 'قبل 3 ساعات',
    unreadCount: 0,
    messages: [
      { id: '1', text: 'أهلاً! شفت إعلان المؤتمر التقني', time: '07:00 ص', isFromMe: false },
      { id: '2', text: 'أهلاً! إيه رأيك؟', time: '07:05 ص', isFromMe: true },
      { id: '3', text: 'ممتاز! راح تحضر؟', time: '07:10 ص', isFromMe: false },
      { id: '4', text: 'أكيد! راح أكون موجود', time: '07:15 ص', isFromMe: true }
    ]
  },
  {
    id: '5',
    name: 'Nour Al-Hassan',
    title: 'محللة بيانات',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Nour%20Al-Hassan',
    lastMessage: 'مبروك! إنجاز رهيب',
    lastMessageTime: 'قبل يوم',
    unreadCount: 0,
    messages: [
      { id: '1', text: 'أهلاً! شفت خبر نجاح شركتك', time: 'أمس 10:00 ص', isFromMe: false },
      { id: '2', text: 'شكراً لك! الحمد لله', time: 'أمس 10:05 ص', isFromMe: true },
      { id: '3', text: 'مبروك! إنجاز رهيب', time: 'أمس 10:10 ص', isFromMe: false }
    ]
  },
  {
    id: '6',
    name: 'Ahmed Al-Jabouri',
    title: 'مهندس DevOps',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Ahmed%20Al-Jabouri',
    lastMessage: 'ممتاز! راح أشوف الفيديو',
    lastMessageTime: 'قبل يومين',
    unreadCount: 0,
    messages: [
      { id: '1', text: 'أهلاً! أطلقت سلسلة Docker', time: 'قبل يومين 09:00 ص', isFromMe: false },
      { id: '2', text: 'ممتاز! راح أشوف الفيديو', time: 'قبل يومين 09:05 ص', isFromMe: true }
    ]
  },
  {
    id: '7',
    name: 'Fatima Al-Khalil',
    title: 'مديرة تسويق',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Fatima%20Al-Khalil',
    lastMessage: 'أهلاً! كيف الحال؟',
    lastMessageTime: 'قبل 3 أيام',
    unreadCount: 0,
    messages: [
      { id: '1', text: 'أهلاً! كيف الحال؟', time: 'قبل 3 أيام 11:00 ص', isFromMe: false },
      { id: '2', text: 'الحمد لله، شكراً لسؤالك', time: 'قبل 3 أيام 11:05 ص', isFromMe: true }
    ]
  },
  {
    id: '8',
    name: 'Omar Al-Saadi',
    title: 'مطور فول ستاك',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Omar%20Al-Saadi',
    lastMessage: 'أكيد! راح أكون موجود',
    lastMessageTime: 'قبل أسبوع',
    unreadCount: 0,
    messages: [
      { id: '1', text: 'أهلاً! شفت إعلان الهاكاثون', time: 'قبل أسبوع 02:00 م', isFromMe: false },
      { id: '2', text: 'أهلاً! إيه رأيك؟', time: 'قبل أسبوع 02:05 م', isFromMe: true },
      { id: '3', text: 'ممتاز! راح تحضر؟', time: 'قبل أسبوع 02:10 م', isFromMe: false },
      { id: '4', text: 'أكيد! راح أكون موجود', time: 'قبل أسبوع 02:15 م', isFromMe: true }
    ]
  }
])

const selectedConversation = ref<Conversation | null>(null)
const newMessage = ref('')

function selectConversation(conversation: Conversation) {
  selectedConversation.value = conversation
  // Mark as read
  conversation.unreadCount = 0
  // Scroll to bottom of messages
  nextTick(() => {
    const messagesContainer = document.querySelector('.overflow-y-auto')
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight
    }
  })
}

function sendMessage() {
  if (!newMessage.value.trim() || !selectedConversation.value) return

  const message: Message = {
    id: Date.now().toString(),
    text: newMessage.value,
    time: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
    isFromMe: true
  }

  selectedConversation.value.messages.push(message)
  selectedConversation.value.lastMessage = newMessage.value
  selectedConversation.value.lastMessageTime = 'الآن'

  newMessage.value = ''

  // Scroll to bottom after sending message
  nextTick(() => {
    const messagesContainer = document.querySelector('.overflow-y-auto')
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight
    }
  })
}

function autoResize(event: Event) {
  const textarea = event.target as HTMLTextAreaElement
  textarea.style.height = 'auto'
  textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px'
}
</script>

<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(10, 102, 194, 0.3) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(10, 102, 194, 0.3);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(10, 102, 194, 0.5);
}

/* Message animations */
@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Gradient animations */
@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

/* Typing indicator */
@keyframes typing {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: typing 1.4s ease-in-out infinite;
}

/* Focus effects */
.focus\:ring-2:focus {
  box-shadow: 0 0 0 3px rgba(10, 102, 194, 0.1);
}

/* Backdrop blur enhancement */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Shadow enhancements */
.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Responsive improvements */
@media (max-width: 1024px) {
  .lg\:grid-cols-3 {
    grid-template-columns: 1fr;
  }

  .lg\:col-span-2 {
    grid-column: 1;
  }

  .h-\[600px\] {
    height: 500px;
  }
}
</style>
