<template>
  <motion.div
    class="min-h-screen bg-gray-50 text-gray-900"
    :initial="{ opacity: 0, y: -40 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, ease: 'easeOut' }"
  >
    <div class="max-w-7xl mx-auto px-4 py-8" dir="rtl">
      <div class="mb-6 flex items-center justify-between">
        <h1 class="text-2xl font-bold">الوظايف</h1>
        <div class="flex items-center gap-3">
          <input
            type="search"
            placeholder="دوّر على عنوان الوظيفة، الشركة..."
            class="w-64 rounded-md bg-white border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
          />
          <input
            type="text"
            placeholder="الموقع: بغداد، أربيل..."
            class="w-56 rounded-md bg-white border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
          />
          <button class="rounded-md bg-[#0A66C2] text-white px-4 py-2 text-sm hover:brightness-110">بحث</button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- filters -->
        <aside class="md:col-span-1 space-y-4">
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:sticky md:top-24">
            <h2 class="font-semibold mb-3">تصفية</h2>
            <div class="space-y-3 text-sm text-gray-700">
              <div>
                <p class="font-medium mb-2">نوع العمل</p>
                <label class="flex items-center gap-2"><input type="checkbox" class="rounded" v-model="filters.fullTime" /> دوام كامل</label>
                <label class="flex items-center gap-2"><input type="checkbox" class="rounded" v-model="filters.partTime" /> جزئي</label>
                <label class="flex items-center gap-2"><input type="checkbox" class="rounded" v-model="filters.remote" /> عن بُعد</label>
              </div>
              <div>
                <p class="font-medium mb-2">الخبرة</p>
                <label class="flex items-center gap-2"><input type="radio" name="exp" class="rounded" value="junior" v-model="filters.experience" /> مبتدئ</label>
                <label class="flex items-center gap-2"><input type="radio" name="exp" class="rounded" value="mid" v-model="filters.experience" /> متوسط</label>
                <label class="flex items-center gap-2"><input type="radio" name="exp" class="rounded" value="senior" v-model="filters.experience" /> خبير</label>
              </div>
              <div>
                <p class="font-medium mb-2">الشركة</p>
                <input type="text" v-model="filters.company" placeholder="اكتب اسم الشركة" class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2 text-sm" />
              </div>
            </div>
            <div class="mt-4 flex gap-2">
              <button class="px-3 py-1.5 rounded bg-gray-100 border border-gray-200 text-sm" @click="resetFilters">مسح</button>
              <button class="px-3 py-1.5 rounded bg-[#0A66C2] text-white text-sm" @click="applyFilters">تطبيق</button>
            </div>
          </div>
        </aside>

        <!-- job list -->
        <section class="md:col-span-2 space-y-3 md:max-h-[calc(100vh-220px)] overflow-y-auto pr-1 md:pr-2">
          <div
            v-for="job in filteredJobs"
            :key="job.id"
            class="bg-white border border-gray-200 rounded-xl shadow-sm p-4 cursor-pointer hover:border-[#0A66C2] transition-all"
            :class="{ 'ring-2 ring-[#0A66C2]/40 border-[#0A66C2] bg-[#0A66C2]/5': selectedJob && selectedJob.id === job.id }"
            @click="selectJob(job)"
          >
            <div class="flex items-start gap-3">
              <img :src="job.logo" alt="logo" class="h-10 w-10 rounded" />
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <h3 class="font-semibold">{{ job.title }}</h3>
                  <span class="text-xs text-gray-500">{{ job.postedAt }}</span>
                </div>
                <p class="text-sm text-gray-700">{{ job.company }} • {{ job.location }}</p>
                <div class="mt-2 flex flex-wrap gap-2 text-xs text-gray-700">
                  <span class="px-2 py-1 rounded bg-gray-100 border border-gray-200" v-for="b in job.badges" :key="b">{{ b }}</span>
                </div>
                <div class="mt-3 flex items-center gap-2 text-sm">
                  <button class="px-3 py-1.5 rounded bg-[#0A66C2] text-white hover:brightness-110" @click.stop="openApply(job)">تقديم سريع</button>
                  <button class="px-3 py-1.5 rounded bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200" @click.stop="toggleSave(job)">
                    {{ savedIds.has(job.id) ? 'محفوظ' : 'حفظ' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- details -->
        <aside class="md:col-span-1">
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:sticky md:top-24" v-if="selectedJob">
            <div class="flex items-center gap-3">
              <img :src="selectedJob.logo" alt="logo" class="h-10 w-10 rounded" />
              <div>
                <h3 class="font-semibold">{{ selectedJob.title }}</h3>
                <p class="text-sm text-gray-700">{{ selectedJob.company }} • {{ selectedJob.location }}</p>
              </div>
            </div>
            <div class="mt-3 text-sm text-gray-700 leading-6">
              <p class="font-semibold mb-1">الوصف</p>
              <p>{{ selectedJob.description }}</p>
              <p class="font-semibold mt-3 mb-1">المتطلبات</p>
              <ul class="list-disc pr-5 space-y-1">
                <li v-for="req in selectedJob.requirements" :key="req">{{ req }}</li>
              </ul>
            </div>
            <div class="mt-4 flex gap-2">
              <button class="px-3 py-1.5 rounded bg-[#0A66C2] text-white hover:brightness-110" @click="openApply(selectedJob)">قدّم هسه</button>
              <button class="px-3 py-1.5 rounded bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200" @click="toggleSave(selectedJob)">
                {{ savedIds.has(selectedJob.id) ? 'محفوظ' : 'حفظ' }}
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <!-- apply modal -->
    <div v-if="showApply" class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div class="w-full max-w-lg bg-white rounded-xl border border-gray-200 shadow-lg" dir="rtl">
        <div class="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
          <h3 class="font-semibold">تقديم على: {{ applyingFor?.title }}</h3>
          <button class="text-gray-500 hover:text-gray-900" @click="closeApply">✕</button>
        </div>
        <div class="p-5 space-y-3 text-sm">
          <div>
            <label class="block mb-1 text-gray-700">الاسم الكامل</label>
            <input v-model="applyForm.name" type="text" class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2" placeholder="مثال: علي البغدادي" />
          </div>
          <div>
            <label class="block mb-1 text-gray-700">الايميل</label>
            <input v-model="applyForm.email" type="email" class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2" placeholder="you@example.com" />
          </div>
          <div>
            <label class="block mb-1 text-gray-700">رابط السيرة (PDF/Drive)</label>
            <input v-model="applyForm.resumeUrl" type="url" class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2" placeholder="https://..." />
          </div>
          <div>
            <label class="block mb-1 text-gray-700">ملاحظة</label>
            <textarea v-model="applyForm.note" rows="3" class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2" placeholder="اكتب رسالة قصيرة"></textarea>
          </div>
        </div>
        <div class="px-5 py-4 border-t border-gray-200 flex items-center justify-between">
          <p class="text-xs text-gray-500">بنقرة وحدة راح نوصل طلبك للشركة.</p>
          <div class="flex gap-2">
            <button class="px-3 py-1.5 rounded bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200" @click="closeApply">إلغاء</button>
            <button class="px-3 py-1.5 rounded bg-[#0A66C2] text-white hover:brightness-110" @click="submitApply">إرسال الطلب</button>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { computed, reactive, ref } from 'vue'

defineOptions({ name: 'JobsPage' })

interface Job {
  id: string
  title: string
  company: string
  location: string
  postedAt: string
  description: string
  requirements: string[]
  badges: string[]
  logo: string
}

const jobs = ref<Job[]>([
  {
    id: '1',
    title: 'مطور Vue.js + TypeScript',
    company: 'شركة الرافدين التقنية',
    location: 'بغداد (دوام هجين)',
    postedAt: 'قبل يوم',
    description:
      'نبحث عن مطوّر يحب الواجهات المرتبة وتجربة المستخدم العربية. تشتغل ويه فريق صغير نشيط، وتساهم ببناء منتجات SaaS للسوق المحلي.',
    requirements: ['١-٣ سنين خبرة', 'Vue 3 و Pinia', 'خبرة Tailwind و Vite', 'اختبارات أساسية'],
    badges: ['دوام كامل', 'راتب مجزي', 'تأمين صحي'],
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=RafTech'
  },
  {
    id: '2',
    title: 'مهندس فرونتند (React/Vue)',
    company: 'بغداد ديجيتال',
    location: 'عن بُعد (العراق)',
    postedAt: 'قبل ٣ أيام',
    description:
      'نشتغل على منصّة محتوى تعليمية. تحتاج تعرف تتعامل ويا الأداء والمتصفحات القديمة نسبيًا. فريق مرن وثقافة طيبة.',
    requirements: ['خبرة بالأداء', 'SSR basics', 'Git و CI'],
    badges: ['عن بُعد', 'دوام كامل'],
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=BaghdadDigital'
  },
  {
    id: '3',
    title: 'مصمم/ـة UI مع حب للخط العربي',
    company: 'أربيل ستوديوز',
    location: 'أربيل (مكتب)',
    postedAt: 'قبل أسبوع',
    description:
      'تصميم واجهات حديثة متوافقة مع العربية، تعاون يومي ويا المطورين، وتوثيق مكونات تصميم.',
    requirements: ['Figma', 'نظام تصميم', 'أساسيات CSS'],
    badges: ['مكتب', 'دوام جزئي'],
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=ErbilStudios'
  }
])

const savedIds = ref<Set<string>>(new Set())
const selectedJob = ref<Job | null>(jobs.value[0])

const filters = reactive({
  fullTime: false,
  partTime: false,
  remote: false,
  experience: '' as 'junior' | 'mid' | 'senior' | '',
  company: ''
})

const filteredJobs = computed(() => {
  return jobs.value.filter((j) => {
    const byType =
      (!filters.fullTime && !filters.partTime && !filters.remote) ||
      (filters.fullTime && j.badges.includes('دوام كامل')) ||
      (filters.partTime && j.badges.includes('دوام جزئي')) ||
      (filters.remote && j.badges.includes('عن بُعد'))

    const byExp = !filters.experience ||
      (filters.experience === 'junior' && j.requirements.some((r) => r.includes('١-٣'))) ||
      (filters.experience === 'mid' && j.requirements.some((r) => r.includes('٣-٥'))) ||
      (filters.experience === 'senior' && j.requirements.some((r) => r.includes('٥+')))

    const byCompany = !filters.company || j.company.includes(filters.company)

    return (!!byType) && (!!byExp) && (!!byCompany)
  })
})

function selectJob(job: Job) {
  selectedJob.value = job
}

function toggleSave(job: Job) {
  if (savedIds.value.has(job.id)) savedIds.value.delete(job.id)
  else savedIds.value.add(job.id)
}

const showApply = ref(false)
const applyingFor = ref<Job | null>(null)
const applyForm = reactive({ name: '', email: '', resumeUrl: '', note: '' })

function openApply(job: Job) {
  applyingFor.value = job
  showApply.value = true
}
function closeApply() {
  showApply.value = false
}
function resetFilters() {
  filters.fullTime = false
  filters.partTime = false
  filters.remote = false
  filters.experience = ''
  filters.company = ''
}
function applyFilters() {
  // computed handles filtering reactively
}
function submitApply() {
  // naive validation
  if (!applyForm.name || !applyForm.email || !applyForm.resumeUrl) {
    alert('رجاءً كمّل المعلومات الأساسية')
    return
  }
  showApply.value = false
  alert('تم إرسال طلبك بنجاح، بالتوفيق!')
  applyForm.name = ''
  applyForm.email = ''
  applyForm.resumeUrl = ''
  applyForm.note = ''
}
</script>
