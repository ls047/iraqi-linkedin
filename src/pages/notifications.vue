<template>
  <motion.div
    class="min-h-screen bg-gray-150 text-gray-900"
    :initial="{ opacity: 0, y: -40 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, ease: 'easeOut' }"
  >
    <div class="max-w-3xl mx-auto px-4 py-8" dir="rtl">
      <div class="mb-6 flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold">الإشعارات</h1>
          <p class="text-gray-600">آخر النشاطات والتحديثات</p>
        </div>
        <div class="flex gap-2">
          <button
            @click="markAllAsRead"
            class="px-3 py-1.5 rounded bg-gray-100 border border-gray-200 text-sm hover:bg-gray-200"
          >
            تحديد الكل كمقروء
          </button>
          <button
            @click="clearAll"
            class="px-3 py-1.5 rounded bg-red-100 border border-red-200 text-red-600 text-sm hover:bg-red-200"
          >
            مسح الكل
          </button>
        </div>
      </div>

      <!-- Filter Tabs -->
      <div class="mb-6 flex gap-2">
        <button
          v-for="filter in filters"
          :key="filter.value"
          @click="activeFilter = filter.value as 'all' | 'unread' | 'connections' | 'jobs'"
          class="px-4 py-2 rounded-lg text-sm transition-colors"
          :class="activeFilter === filter.value
            ? 'bg-[#0A66C2] text-white'
            : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'"
        >
          {{ filter.label }}
          <span v-if="filter.count > 0" class="mr-1 text-xs">({{ filter.count }})</span>
        </button>
      </div>

      <!-- Notifications List -->
      <div class="space-y-3">
        <div
          v-for="notification in filteredNotifications"
          :key="notification.id"
          class="bg-white border border-gray-200 rounded-xl p-4 hover:border-[#0A66C2] transition-colors"
          :class="{ 'bg-[#0A66C2]/5': !notification.isRead }"
        >
          <div class="flex items-start gap-3">
            <div class="flex-shrink-0">
              <img :src="notification.avatar" :alt="notification.sender" class="h-10 w-10 rounded-full" />
            </div>
            <div class="flex-1">
              <div class="flex items-start justify-between">
                <div>
                  <p class="text-sm">
                    <span class="font-semibold">{{ notification.sender }}</span>
                    <span class="text-gray-600"> {{ notification.action }}</span>
                  </p>
                  <p class="text-xs text-gray-500 mt-1">{{ notification.time }}</p>
                </div>
                <div class="flex items-center gap-2">
                  <div v-if="!notification.isRead" class="h-2 w-2 bg-[#0A66C2] rounded-full"></div>
                  <button
                    @click="deleteNotification(notification.id)"
                    class="text-gray-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <!-- Action buttons for specific notification types -->
              <div v-if="notification.type === 'connection' && !notification.isRead" class="mt-3 flex gap-2">
                <button
                  @click="acceptConnection(notification)"
                  class="px-3 py-1.5 rounded bg-[#0A66C2] text-white text-xs hover:brightness-110"
                >
                  قبول
                </button>
                <button
                  @click="declineConnection(notification)"
                  class="px-3 py-1.5 rounded bg-gray-100 border border-gray-200 text-gray-700 text-xs hover:bg-gray-200"
                >
                  رفض
                </button>
              </div>

              <div v-if="notification.type === 'job' && !notification.isRead" class="mt-3">
                <button
                  @click="viewJob(notification)"
                  class="px-3 py-1.5 rounded bg-[#0A66C2] text-white text-xs hover:brightness-110"
                >
                  عرض الوظيفة
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredNotifications.length === 0" class="text-center py-12">
        <div class="text-4xl mb-4">🔔</div>
        <p class="text-gray-500">لا توجد إشعارات جديدة</p>
      </div>
    </div>
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { ref, computed } from 'vue'

defineOptions({ name: 'NotificationsPage' })

interface Notification {
  id: string
  type: 'connection' | 'job' | 'post' | 'general'
  sender: string
  action: string
  time: string
  isRead: boolean
  avatar: string
}

const notifications = ref<Notification[]>([
  {
    id: '1',
    type: 'connection',
    sender: 'Zahraa Hameed',
    action: 'أرسلت لك دعوة اتصال',
    time: 'قبل 5 دقائق',
    isRead: false,
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Zahraa%20Hameed'
  },
  {
    id: '2',
    type: 'job',
    sender: 'الرافدين التقنية',
    action: 'نشرت وظيفة جديدة: مطور Vue.js',
    time: 'قبل ساعة',
    isRead: false,
    avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=RafTech'
  },
  {
    id: '3',
    type: 'post',
    sender: 'Hussein Al-Musawi',
    action: 'علق على منشورك',
    time: 'قبل 3 ساعات',
    isRead: false,
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Hussein%20Al%20Musawi'
  },
  {
    id: '4',
    type: 'general',
    sender: 'فرصة الي',
    action: 'مرحباً بك في المنصة! ابدأ ببناء شبكتك المهنية',
    time: 'قبل يوم',
    isRead: true,
    avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=LinkedIn'
  },
  {
    id: '5',
    type: 'connection',
    sender: 'Amina Al-Rashid',
    action: 'قبلت دعوتك للاتصال',
    time: 'قبل يوم',
    isRead: false,
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Amina%20Al-Rashid'
  },
  {
    id: '6',
    type: 'job',
    sender: 'كوردستان داتا',
    action: 'نشرت وظيفة جديدة: محلل بيانات',
    time: 'قبل يومين',
    isRead: false,
    avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=KurdistanData'
  },
  {
    id: '7',
    type: 'post',
    sender: 'Karim Al-Zubaidi',
    action: 'أعجب بمنشورك',
    time: 'قبل يومين',
    isRead: false,
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Karim%20Al-Zubaidi'
  },
  {
    id: '8',
    type: 'general',
    sender: 'ملتقى بغداد التقني',
    action: 'تذكير: المؤتمر التقني العراقي غداً',
    time: 'قبل 3 أيام',
    isRead: true,
    avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=BaghdadTech'
  },
  {
    id: '9',
    type: 'connection',
    sender: 'Nour Al-Hassan',
    action: 'أرسلت لك دعوة اتصال',
    time: 'قبل 3 أيام',
    isRead: false,
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Nour%20Al-Hassan'
  },
  {
    id: '10',
    type: 'job',
    sender: 'العراق كلاود',
    action: 'نشرت وظيفة جديدة: مهندس أمن سيبراني',
    time: 'قبل 4 أيام',
    isRead: false,
    avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=IraqCloud'
  },
  {
    id: '11',
    type: 'post',
    sender: 'Ahmed Al-Jabouri',
    action: 'شارك منشورك',
    time: 'قبل 4 أيام',
    isRead: false,
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Ahmed%20Al-Jabouri'
  },
  {
    id: '12',
    type: 'general',
    sender: 'Iraq JS Community',
    action: 'اجتماع جديد: Vue.js في العراق',
    time: 'قبل أسبوع',
    isRead: true,
    avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=IraqJS'
  },
  {
    id: '13',
    type: 'connection',
    sender: 'Fatima Al-Khalil',
    action: 'قبلت دعوتك للاتصال',
    time: 'قبل أسبوع',
    isRead: true,
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Fatima%20Al-Khalil'
  },
  {
    id: '14',
    type: 'job',
    sender: 'أربيل ستوديوز',
    action: 'نشرت وظيفة جديدة: مصمم UI',
    time: 'قبل أسبوع',
    isRead: true,
    avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=ErbilStudios'
  },
  {
    id: '15',
    type: 'post',
    sender: 'Omar Al-Saadi',
    action: 'علق على منشورك',
    time: 'قبل أسبوع',
    isRead: true,
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Omar%20Al-Saadi'
  }
])

const activeFilter = ref<'all' | 'unread' | 'connections' | 'jobs'>('all')

const filters = computed(() => [
  {
    value: 'all',
    label: 'الكل',
    count: notifications.value.length
  },
  {
    value: 'unread',
    label: 'غير مقروء',
    count: notifications.value.filter(n => !n.isRead).length
  },
  {
    value: 'connections',
    label: 'اتصالات',
    count: notifications.value.filter(n => n.type === 'connection').length
  },
  {
    value: 'jobs',
    label: 'وظايف',
    count: notifications.value.filter(n => n.type === 'job').length
  }
])

const filteredNotifications = computed(() => {
  switch (activeFilter.value) {
    case 'unread':
      return notifications.value.filter(n => !n.isRead)
    case 'connections':
      return notifications.value.filter(n => n.type === 'connection')
    case 'jobs':
      return notifications.value.filter(n => n.type === 'job')
    default:
      return notifications.value
  }
})

function markAllAsRead() {
  notifications.value.forEach(n => n.isRead = true)
}

function clearAll() {
  if (confirm('هل أنت متأكد من مسح جميع الإشعارات؟')) {
    notifications.value = []
  }
}

function deleteNotification(id: string) {
  notifications.value = notifications.value.filter(n => n.id !== id)
}

function acceptConnection(notification: Notification) {
  notification.isRead = true
  alert(`تم قبول دعوة الاتصال من ${notification.sender}`)
}

function declineConnection(notification: Notification) {
  notification.isRead = true
  alert(`تم رفض دعوة الاتصال من ${notification.sender}`)
}

function viewJob(notification: Notification) {
  notification.isRead = true
  // In a real app, this would navigate to the job
  alert('جاري الانتقال إلى صفحة الوظيفة...')
}
</script>
