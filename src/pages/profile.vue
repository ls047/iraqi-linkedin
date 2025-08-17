<template>
  <motion.div
    class="min-h-screen bg-gray-150 text-gray-900"
    :initial="{ opacity: 0, y: -40 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, ease: 'easeOut' }"
  >
    <div class="max-w-4xl mx-auto px-4 py-8" dir="rtl">
      <!-- Profile Header -->
      <div class="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden mb-6">
        <div class="h-32 bg-gradient-to-r from-sky-700/60 via-sky-500/40 to-emerald-500/40"></div>
        <div class="p-6 -mt-4">
          <div class="flex items-end gap-4">
            <img
              class="h-24 w-24 -translate-y-16 rounded-full ring-4 ring-white bg-white object-cover"
              src="/shittyPerson.webp"
              alt="Ali Al-Baghdadi"
            />
            <div class="flex-1">
              <h1 class="text-2xl font-bold">Ali Al‑Baghdadi</h1>
              <p class="text-lg text-gray-600">مطور فرونتند • بغداد، العراق</p>
              <p class="text-sm text-gray-500 mt-1">متخصص في Vue.js, TypeScript, و Tailwind CSS</p>
              <div class="flex items-center gap-4 mt-3 text-sm text-gray-600">
                <span>٥٠٠+ معارف</span>
                <span>•</span>
                <span>متاح للشغل</span>
                <span>•</span>
                <span>مطور في الرافدين التقنية</span>
              </div>
            </div>
            <div class="flex gap-2">
              <button class="px-4 py-2 rounded bg-[#0A66C2] text-white hover:brightness-110">
                تحرير الملف
              </button>
              <button class="px-4 py-2 rounded bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200">
                مشاركة
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Left Column -->
        <div class="md:col-span-2 space-y-6">
          <!-- About -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
            <h2 class="text-xl font-semibold mb-4">نبذة عني</h2>
            <p class="text-gray-700 leading-6">
              مطور فرونتند شغوف ببناء واجهات مستخدم جميلة وسهلة الاستخدام. متخصص في Vue.js و TypeScript،
              وأحب العمل على مشاريع تخدم المجتمع العراقي. أؤمن بقوة التكنولوجيا في تطوير بلدنا الحبيب.
            </p>
          </div>

          <!-- Experience -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
            <h2 class="text-xl font-semibold mb-4">الخبرات</h2>
            <div class="space-y-4">
              <div class="flex gap-4">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=RafTech" alt="RafTech" class="h-12 w-12 rounded" />
                <div class="flex-1">
                  <h3 class="font-semibold">مطور فرونتند</h3>
                  <p class="text-[#0A66C2]">الرافدين التقنية</p>
                  <p class="text-sm text-gray-600">يناير 2023 - الحالي</p>
                  <p class="text-sm text-gray-700 mt-2">
                    تطوير تطبيقات Vue.js حديثة، العمل مع فريق متعدد التخصصات،
                    وتحسين تجربة المستخدم للمنتجات العربية.
                  </p>
                </div>
              </div>
              <div class="flex gap-4">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=BaghdadDigital" alt="BaghdadDigital" class="h-12 w-12 rounded" />
                <div class="flex-1">
                  <h3 class="font-semibold">مطور ويب</h3>
                  <p class="text-[#0A66C2]">بغداد ديجيتال</p>
                  <p class="text-sm text-gray-600">يونيو 2022 - ديسمبر 2022</p>
                  <p class="text-sm text-gray-700 mt-2">
                    تطوير مواقع إلكترونية للشركات العراقية، استخدام React و Node.js.
                  </p>
                </div>
              </div>
              <div class="flex gap-4">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=IraqCloud" alt="IraqCloud" class="h-12 w-12 rounded" />
                <div class="flex-1">
                  <h3 class="font-semibold">مطور متدرب</h3>
                  <p class="text-[#0A66C2]">العراق كلاود</p>
                  <p class="text-sm text-gray-600">مايو 2022 - أغسطس 2022</p>
                  <p class="text-sm text-gray-700 mt-2">
                    تدريب عملي في تطوير تطبيقات سحابية، العمل مع AWS و Docker.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
            <h2 class="text-xl font-semibold mb-4">التعليم</h2>
            <div class="space-y-4">
              <div class="flex gap-4">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=University" alt="University" class="h-12 w-12 rounded" />
                <div>
                  <h3 class="font-semibold">بكالوريوس علوم الحاسوب</h3>
                  <p class="text-[#0A66C2]">جامعة تكنولوجيا المعلومات والاتصالات</p>
                  <p class="text-sm text-gray-600">2018 - 2022</p>
                  <p class="text-sm text-gray-700 mt-1">تخصص في تطوير البرمجيات وتطبيقات الويب</p>
                </div>
              </div>
              <div class="flex gap-4">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=Bootcamp" alt="Bootcamp" class="h-12 w-12 rounded" />
                <div>
                  <h3 class="font-semibold">دورة تطوير الويب المتقدمة</h3>
                  <p class="text-[#0A66C2]">أكاديمية العراق التقنية</p>
                  <p class="text-sm text-gray-600">2021</p>
                  <p class="text-sm text-gray-700 mt-1">تطوير تطبيقات حديثة باستخدام Vue.js و Node.js</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Skills -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
            <h2 class="text-xl font-semibold mb-4">المهارات</h2>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in skills"
                :key="skill"
                class="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Projects -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
            <h2 class="text-xl font-semibold mb-4">المشاريع</h2>
            <div class="space-y-4">
              <div class="p-4 border border-gray-200 rounded-lg">
                <h3 class="font-semibold">منصة "فرصة الي"</h3>
                <p class="text-sm text-gray-600">منصة توظيف عراقية</p>
                <p class="text-sm text-gray-700 mt-2">
                  تطوير منصة توظيف شاملة للمطورين العراقيين باستخدام Vue.js و TypeScript
                </p>
                <div class="flex gap-2 mt-2">
                  <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Vue.js</span>
                  <span class="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">TypeScript</span>
                  <span class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Tailwind</span>
                </div>
              </div>
              <div class="p-4 border border-gray-200 rounded-lg">
                <h3 class="font-semibold">تطبيق "تعلم العراقي"</h3>
                <p class="text-sm text-gray-600">منصة تعليمية</p>
                <p class="text-sm text-gray-700 mt-2">
                  تطبيق تعليمي تفاعلي للطلاب العراقيين مع دعم اللغة العربية
                </p>
                <div class="flex gap-2 mt-2">
                  <span class="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">React</span>
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">JavaScript</span>
                  <span class="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Firebase</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-6">
          <!-- Contact Info -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
            <h3 class="font-semibold mb-3">معلومات التواصل</h3>
            <div class="space-y-2 text-sm">
              <p class="flex items-center gap-2">
                <span>📧</span>
                <span>ali@example.com</span>
              </p>
              <p class="flex items-center gap-2">
                <span>📱</span>
                <span>+964 750 123 4567</span>
              </p>
              <p class="flex items-center gap-2">
                <span>🌐</span>
                <span>github.com/alibaghdadi</span>
              </p>
            </div>
          </div>

          <!-- Stats -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
            <h3 class="font-semibold mb-3">إحصائيات الملف</h3>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">مشاهدات الملف</span>
                <span class="font-semibold">١٢٥</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">البحث عن ملفك</span>
                <span class="font-semibold">٤٥</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">المنشورات</span>
                <span class="font-semibold">٢٣</span>
              </div>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
            <h3 class="font-semibold mb-3">النشاط الأخير</h3>
            <div class="space-y-3 text-sm">
              <div class="flex items-center gap-2">
                <span class="text-[#0A66C2]">•</span>
                <span>علق على منشور Hussein</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[#0A66C2]">•</span>
                <span>قبلت دعوة Zahraa</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[#0A66C2]">•</span>
                <span>نشرت مقال تقني</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { ref } from 'vue'

defineOptions({ name: 'ProfilePage' })

const skills = ref([
  'Vue.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS',
  'Git', 'REST APIs', 'Responsive Design', 'UI/UX', 'Arabic RTL',
  'Node.js', 'React', 'Pinia', 'Vite', 'Webpack', 'Jest',
  'Docker', 'AWS', 'Firebase', 'MongoDB', 'PostgreSQL', 'MySQL',
  'GraphQL', 'PWA', 'SEO', 'Performance Optimization', 'Accessibility',
  'Agile', 'Scrum', 'Jira', 'Figma', 'Adobe XD', 'Sketch'
])
</script>
