<template>
  <motion.div
    class="min-h-screen bg-gray-150 text-gray-900"
    :initial="{ opacity: 0, y: -40 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, ease: 'easeOut' }"
  >


    <div class="max-w-7xl mx-auto px-4 py-8" dir="rtl">
      <div class="mb-6 flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold">شبكتي العراقية</h1>
          <p class="text-gray-600">تواصل مع المطورين العراقيين 🇮🇶</p>
        </div>
        <div class="flex items-center gap-3">
          <input
            type="search"
            placeholder="دوّر على معارف، شركات..."
            class="w-64 rounded-md bg-white border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
          />
          <button class="rounded-md bg-[#0A66C2] text-white px-4 py-2 text-sm hover:brightness-110 cursor-pointer">بحث</button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- left sidebar -->
        <aside class="md:col-span-1 space-y-4">
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h2 class="font-semibold mb-3">إحصائيات الشبكة العراقية</h2>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">المعروفين</span>
                <span class="font-semibold">٥٠٠+</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">طلبات الاتصال</span>
                <span class="font-semibold text-[#0A66C2]">٣</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">الشركات العراقية</span>
                <span class="font-semibold">٤٥</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">المحافظات</span>
                <span class="font-semibold">١٨</span>
              </div>
            </div>
          </div>

          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h2 class="font-semibold mb-3">إعدادات الشبكة</h2>
            <div class="space-y-2 text-sm">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="rounded" v-model="settings.allowInvites" />
                <span>السماح بدعوات</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="rounded" v-model="settings.showProfile" />
                <span>إظهار الملف للجميع</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="rounded" v-model="settings.notifications" />
                <span>إشعارات الشبكة</span>
              </label>
            </div>
          </div>

          <!-- Iraqi Tech Communities -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h2 class="font-semibold mb-3">مجتمعات تقنية عراقية</h2>
            <div class="space-y-2 text-sm">
              <a href="#" class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <span>🌴</span>
                <span>Iraq JS Community</span>
              </a>
              <a href="#" class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <span>🏔️</span>
                <span>Kurdistan Developers</span>
              </a>
              <a href="#" class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <span>🌊</span>
                <span>Basra Tech Hub</span>
              </a>
              <a href="#" class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <span>🏛️</span>
                <span>Mosul Innovation</span>
              </a>
            </div>
          </div>
        </aside>

        <!-- main content -->
        <section class="md:col-span-2 space-y-4">
          <!-- pending invitations -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h2 class="font-semibold mb-3">طلبات الاتصال المعلقة</h2>
            <div class="space-y-3">
              <div
                v-for="invite in pendingInvites"
                :key="invite.id"
                class="flex items-center gap-3 p-3 rounded-lg border border-gray-100"
              >
                <img :src="invite.avatar" :alt="invite.name" class="h-12 w-12 rounded-full" />
                <div class="flex-1">
                  <h3 class="font-semibold">{{ invite.name }}</h3>
                  <p class="text-sm text-gray-600">{{ invite.title }} • {{ invite.company }}</p>
                  <p class="text-xs text-gray-500">{{ invite.region }} 🇮🇶</p>
                  <p class="text-xs text-gray-500">{{ invite.mutualConnections }} معارف مشتركة</p>
                </div>
                <div class="flex gap-2">
                  <button
                    class="px-3 py-1.5 rounded bg-[#0A66C2] text-white text-sm hover:brightness-110 cursor-pointer"
                    @click="acceptInvite(invite)"
                  >
                    قبول
                  </button>
                  <button
                    class="px-3 py-1.5 rounded bg-gray-100 border border-gray-200 text-gray-700 text-sm hover:bg-gray-200 cursor-pointer"
                    @click="declineInvite(invite)"
                  >
                    رفض
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- connections -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <div class="flex items-center justify-between mb-4">
              <h2 class="font-semibold">معارفي العراقيين</h2>
              <div class="flex gap-2">
                <button
                  class="px-3 py-1.5 rounded bg-gray-100 border border-gray-200 text-sm hover:bg-gray-200 cursor-pointer"
                  @click="filterConnections('all')"
                  :class="{ 'bg-[#0A66C2] text-white': activeFilter === 'all' }"
                >
                  الكل
                </button>
                <button
                  class="px-3 py-1.5 rounded bg-gray-100 border border-gray-200 text-sm hover:bg-gray-200 cursor-pointer"
                  @click="filterConnections('recent')"
                  :class="{ 'bg-[#0A66C2] text-white': activeFilter === 'recent' }"
                >
                  حديث
                </button>
                <button
                  class="px-3 py-1.5 rounded bg-gray-100 border border-gray-200 text-sm hover:bg-gray-200 cursor-pointer"
                  @click="filterConnections('mutual')"
                  :class="{ 'bg-[#0A66C2] text-white': activeFilter === 'mutual' }"
                >
                  مشترك
                </button>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div
                v-for="connection in filteredConnections"
                :key="connection.id"
                class="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-[#0A66C2] transition-colors cursor-pointer"
              >
                <img :src="connection.avatar" :alt="connection.name" class="h-10 w-10 rounded-full" />
                <div class="flex-1">
                  <h3 class="font-semibold text-sm">{{ connection.name }}</h3>
                  <p class="text-xs text-gray-600">{{ connection.title }}</p>
                  <p class="text-xs text-gray-500">{{ connection.company }}</p>
                  <p class="text-xs text-gray-400">{{ connection.region }} 🇮🇶</p>
                </div>
                <button
                  class="px-2 py-1 rounded bg-gray-100 text-xs text-gray-700 hover:bg-gray-200 cursor-pointer"
                  @click="messageConnection(connection)"
                >
                  رسالة
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- right sidebar -->
        <aside class="md:col-span-1 space-y-4">
          <!-- people you may know -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h2 class="font-semibold mb-3">أشخاص قد تعرفهم</h2>
            <div class="space-y-3">
              <div
                v-for="suggestion in peopleSuggestions"
                :key="suggestion.id"
                class="flex items-center gap-3"
              >
                <img :src="suggestion.avatar" :alt="suggestion.name" class="h-10 w-10 rounded-full" />
                <div class="flex-1">
                  <h3 class="font-semibold text-sm">{{ suggestion.name }}</h3>
                  <p class="text-xs text-gray-600">{{ suggestion.title }}</p>
                  <p class="text-xs text-gray-500">{{ suggestion.region }} 🇮🇶</p>
                  <p class="text-xs text-gray-500">{{ suggestion.mutualConnections }} معارف مشتركة</p>
                </div>
                <button
                  class="px-2 py-1 rounded bg-[#0A66C2] text-white text-xs hover:brightness-110 cursor-pointer"
                  @click="sendInvite(suggestion)"
                >
                  دعوة
                </button>
              </div>
            </div>
            <button class="w-full mt-3 text-[#0A66C2] hover:brightness-110 text-sm cursor-pointer">شوف المزيد</button>
          </div>

          <!-- companies -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h2 class="font-semibold mb-3">الشركات العراقية</h2>
            <div class="space-y-3">
              <div
                v-for="company in companies"
                :key="company.id"
                class="flex items-center gap-3"
              >
                <img :src="company.logo" :alt="company.name" class="h-8 w-8 rounded" />
                <div class="flex-1">
                  <h3 class="font-semibold text-sm">{{ company.name }}</h3>
                  <p class="text-xs text-gray-600">{{ company.employees }} موظف</p>
                  <p class="text-xs text-gray-500">{{ company.region }} 🇮🇶</p>
                </div>
                <button
                  class="px-2 py-1 rounded bg-gray-100 text-xs text-gray-700 hover:bg-gray-200 cursor-pointer"
                  @click="followCompany(company)"
                >
                  متابعة
                </button>
              </div>
            </div>
          </div>

          <!-- Iraqi Tech Events -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h2 class="font-semibold mb-3">فعاليات تقنية قادمة</h2>
            <div class="space-y-3 text-sm">
              <div class="p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                <h4 class="font-medium text-amber-800">ملتقى بغداد التقني</h4>
                <p class="text-amber-700 text-xs">٢٥ يناير • بغداد الرشيد</p>
              </div>
              <div class="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <h4 class="font-medium text-green-800">هاكاثون أربيل</h4>
                <p class="text-green-700 text-xs">١ فبراير • أربيل الجميلة</p>
              </div>
              <div class="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <h4 class="font-medium text-blue-800">مؤتمر البصرة التقني</h4>
                <p class="text-blue-700 text-xs">١٥ فبراير • البصرة الخضراء</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { computed, reactive, ref } from 'vue'

defineOptions({ name: 'MyNetworkPage' })

interface Connection {
  id: string
  name: string
  title: string
  company: string
  region: string
  avatar: string
  connectedAt: string
  mutualConnections: number
}

interface Invite {
  id: string
  name: string
  title: string
  company: string
  region: string
  avatar: string
  mutualConnections: number
}

interface Suggestion {
  id: string
  name: string
  title: string
  company: string
  region: string
  avatar: string
  mutualConnections: number
}

interface Company {
  id: string
  name: string
  logo: string
  employees: string
  region: string
}

const connections = ref<Connection[]>([
  {
    id: '1',
    name: 'زهراء حميد',
    title: 'مصممة منتجات',
    company: 'أربيل ستوديوز',
    region: 'كوردستان',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Zahraa%20Hameed',
    connectedAt: '2024-01-15',
    mutualConnections: 12
  },
  {
    id: '2',
    name: 'حسين الموسوي',
    title: 'علاقات مطورين',
    company: 'البصرة تك',
    region: 'البصرة الخضراء',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Hussein%20Al%20Musawi',
    connectedAt: '2024-01-10',
    mutualConnections: 8
  },
  {
    id: '3',
    name: 'أمينة الرشيد',
    title: 'مطورة فرونتند',
    company: 'بغداد ديجيتال',
    region: 'بغداد الرشيد',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Amina%20Al-Rashid',
    connectedAt: '2024-01-05',
    mutualConnections: 15
  },
  {
    id: '4',
    name: 'كريم الزبيدي',
    title: 'مهندس باك إند',
    company: 'الرافدين التقنية',
    region: 'بغداد',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Karim%20Al-Zubaidi',
    connectedAt: '2023-12-20',
    mutualConnections: 6
  },
  {
    id: '5',
    name: 'نور الحسن',
    title: 'محللة بيانات',
    company: 'الموصل التقنية',
    region: 'نينوى العريقة',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Nour%20Al-Hassan',
    connectedAt: '2023-12-15',
    mutualConnections: 9
  },
  {
    id: '6',
    name: 'أحمد الجبوري',
    title: 'مهندس DevOps',
    company: 'العراق كلاود',
    region: 'بغداد',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Ahmed%20Al-Jabouri',
    connectedAt: '2023-12-10',
    mutualConnections: 11
  },
  {
    id: '7',
    name: 'فاطمة الخليل',
    title: 'مديرة تسويق',
    company: 'كوردستان ماركتينج',
    region: 'كوردستان',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Fatima%20Al-Khalil',
    connectedAt: '2023-12-05',
    mutualConnections: 7
  },
  {
    id: '8',
    name: 'عمر السعدي',
    title: 'مطور فول ستاك',
    company: 'نينوى تك',
    region: 'نينوى العريقة',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Omar%20Al-Saadi',
    connectedAt: '2023-11-28',
    mutualConnections: 4
  },
  {
    id: '9',
    name: 'ليلى المحمود',
    title: 'مصممة UX',
    company: 'الموصل ديزاين',
    region: 'نينوى العريقة',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Layla%20Al-Mahmoud',
    connectedAt: '2023-11-20',
    mutualConnections: 13
  },
  {
    id: '10',
    name: 'يوسف المالكي',
    title: 'مطور موبايل',
    company: 'أربيل آبس',
    region: 'كوردستان',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Yusuf%20Al-Maliki',
    connectedAt: '2023-11-15',
    mutualConnections: 8
  },
  {
    id: '11',
    name: 'سارة العبيدي',
    title: 'مهندسة أمن سيبراني',
    company: 'بغداد سيكيوريتي',
    region: 'بغداد',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sara%20Al-Obaidi',
    connectedAt: '2023-11-10',
    mutualConnections: 6
  },
  {
    id: '12',
    name: 'محمد الكاظمي',
    title: 'مهندس ذكاء اصطناعي',
    company: 'بغداد AI',
    region: 'بغداد الرشيد',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Mohammed%20Al-Kadhimi',
    connectedAt: '2023-11-05',
    mutualConnections: 10
  }
])

const pendingInvites = ref<Invite[]>([
  {
    id: '1',
    name: 'فاطمة الخليل',
    title: 'مديرة تسويق',
    company: 'كوردستان ماركتينج',
    region: 'كوردستان',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Fatima%20Al-Khalil',
    mutualConnections: 5
  },
  {
    id: '2',
    name: 'عمر السعدي',
    title: 'مطور فول ستاك',
    company: 'نينوى تك',
    region: 'نينوى العريقة',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Omar%20Al-Saadi',
    mutualConnections: 3
  },
  {
    id: '3',
    name: 'ليلى المحمود',
    title: 'مصممة UX',
    company: 'الموصل ديزاين',
    region: 'نينوى العريقة',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Layla%20Al-Mahmoud',
    mutualConnections: 7
  },
  {
    id: '4',
    name: 'علي الحسيني',
    title: 'مهندس باك إند',
    company: 'البصرة التقنية',
    region: 'البصرة الخضراء',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Ali%20Al-Husseini',
    mutualConnections: 9
  },
  {
    id: '5',
    name: 'نور الدين',
    title: 'محلل بيانات',
    company: 'أربيل أناليتكس',
    region: 'كوردستان',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Nour%20Al-Deen',
    mutualConnections: 4
  }
])

const peopleSuggestions = ref<Suggestion[]>([
  {
    id: '1',
    name: 'أحمد الجبوري',
    title: 'مهندس DevOps',
    company: 'العراق كلاود',
    region: 'بغداد',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Ahmed%20Al-Jabouri',
    mutualConnections: 4
  },
  {
    id: '2',
    name: 'نور الحسن',
    title: 'محللة بيانات',
    company: 'بغداد أناليتكس',
    region: 'بغداد الرشيد',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Nour%20Al-Hassan',
    mutualConnections: 9
  },
  {
    id: '3',
    name: 'يوسف المالكي',
    title: 'مطور موبايل',
    company: 'أربيل آبس',
    region: 'كوردستان',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Yusuf%20Al-Maliki',
    mutualConnections: 6
  },
  {
    id: '4',
    name: 'سارة العبيدي',
    title: 'مهندسة أمن سيبراني',
    company: 'بغداد سيكيوريتي',
    region: 'بغداد',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sara%20Al-Obaidi',
    mutualConnections: 6
  },
  {
    id: '5',
    name: 'محمد الكاظمي',
    title: 'مهندس ذكاء اصطناعي',
    company: 'بغداد AI',
    region: 'بغداد الرشيد',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Mohammed%20Al-Kadhimi',
    mutualConnections: 10
  },
  {
    id: '6',
    name: 'رنا السعدون',
    title: 'مصممة منتجات',
    company: 'البصرة ديزاين',
    region: 'البصرة الخضراء',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Rana%20Al-Saadoun',
    mutualConnections: 7
  },
  {
    id: '7',
    name: 'حيدر الموسوي',
    title: 'مدير مشاريع تقنية',
    company: 'الرافدين التقنية',
    region: 'بغداد الرشيد',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Haider%20Al-Musawi',
    mutualConnections: 12
  },
  {
    id: '8',
    name: 'زينب الكربلائي',
    title: 'مطورة فرونتند',
    company: 'كربلاء تك',
    region: 'كربلاء المقدسة',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Zainab%20Al-Karbalai',
    mutualConnections: 5
  }
])

const companies = ref<Company[]>([
  {
    id: '1',
    name: 'الرافدين التقنية',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=RafTech',
    employees: '٥٠-١٠٠',
    region: 'بغداد الرشيد'
  },
  {
    id: '2',
    name: 'بغداد ديجيتال',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=BaghdadDigital',
    employees: '١٠-٥٠',
    region: 'بغداد'
  },
  {
    id: '3',
    name: 'أربيل ستوديوز',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=ErbilStudios',
    employees: '١٠٠-٢٠٠',
    region: 'كوردستان'
  },
  {
    id: '4',
    name: 'البصرة التقنية',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=BasraTech',
    employees: '٢٠-٥٠',
    region: 'البصرة الخضراء'
  },
  {
    id: '5',
    name: 'الموصل التقنية',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=MosulTech',
    employees: '٢٥-٥٠',
    region: 'نينوى العريقة'
  },
  {
    id: '6',
    name: 'كوردستان داتا',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=KurdistanData',
    employees: '١٥-٣٠',
    region: 'كوردستان'
  },
  {
    id: '7',
    name: 'العراق كلاود',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=IraqCloud',
    employees: '٤٠-٨٠',
    region: 'بغداد'
  },
  {
    id: '8',
    name: 'أربيل آبس',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=ErbilApps',
    employees: '١٠-٢٥',
    region: 'كوردستان'
  },
  {
    id: '9',
    name: 'بغداد AI',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=BaghdadAI',
    employees: '٢٠-٤٠',
    region: 'بغداد الرشيد'
  },
  {
    id: '10',
    name: 'البصرة ديزاين',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=BasraDesign',
    employees: '٥-١٥',
    region: 'البصرة الخضراء'
  }
])

const settings = reactive({
  allowInvites: true,
  showProfile: true,
  notifications: true
})

const activeFilter = ref<'all' | 'recent' | 'mutual'>('all')

const filteredConnections = computed(() => {
  switch (activeFilter.value) {
    case 'recent':
      return connections.value.slice(0, 4)
    case 'mutual':
      return connections.value.filter(c => c.mutualConnections > 10)
    default:
      return connections.value
  }
})

function filterConnections(filter: 'all' | 'recent' | 'mutual') {
  activeFilter.value = filter
}

function acceptInvite(invite: Invite) {
  // Add to connections
  connections.value.unshift({
    id: invite.id,
    name: invite.name,
    title: invite.title,
    company: invite.company,
    region: invite.region,
    avatar: invite.avatar,
    connectedAt: new Date().toISOString().split('T')[0],
    mutualConnections: invite.mutualConnections
  })
  // Remove from pending
  pendingInvites.value = pendingInvites.value.filter(i => i.id !== invite.id)
}

function declineInvite(invite: Invite) {
  pendingInvites.value = pendingInvites.value.filter(i => i.id !== invite.id)
}

function sendInvite(suggestion: Suggestion) {
  // In a real app, this would send an invitation
  alert(`تم إرسال دعوة لـ ${suggestion.name} من ${suggestion.region} 🇮🇶`)
}

function messageConnection(connection: Connection) {
  // In a real app, this would open a messaging interface
  alert(`فتح محادثة مع ${connection.name} من ${connection.region} 🇮🇶`)
}

function followCompany(company: Company) {
  // In a real app, this would follow the company
  alert(`تمت متابعة ${company.name} من ${company.region} 🇮🇶`)
}
</script>
