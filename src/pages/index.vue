    <template>
  <motion.div
    class="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden"
    :initial="{ opacity: 0, y: -100 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 1, ease: 'easeInOut' }"
  >
    <!-- ambient stars -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div
        v-for="(s, i) in stars"
        :key="i"
        class="star"
        :style="{ top: s.top + '%', left: s.left + '%', animationDelay: s.delay + 's' }"
      />
    </div>

    <!-- top navbar -->
    <header class="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-gray-200">
      <div class="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <div class="flex items-center gap-2 font-bold text-lg">
          <span>فرصة الي</span>
        </div>
        <div class="flex-1">
          <input
            type="search"
            dir="rtl"
            placeholder="دوّر على شغل، ناس، محتوى..."
            class="w-full rounded-md bg-white border border-gray-300 px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0A66C2]"
          />
        </div>
        <nav class="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <button class="hover:text-gray-900">الرئيسية</button>
          <button class="hover:text-gray-900">شبكتي</button>
          <RouterLink to="/jobs" class="hover:text-gray-900">وظايف</RouterLink>
          <button class="hover:text-gray-900">الرسائل</button>
          <button class="hover:text-gray-900">الإشعارات</button>
          <img
            class="h-8 w-8 rounded-full ring-2 ring-[#0A66C2]/50"
            src="https://api.dicebear.com/7.x/initials/svg?seed=Ali%20Al-Baghdadi"
            alt="Profile"
          />
        </nav>
      </div>
      <!-- subtle Iraqi flag accent -->
      <div class="h-0.5 w-full">
        <div class="h-full w-full bg-gradient-to-r from-red-600 via-white to-black relative">
          <div class="absolute left-1/3 top-0 h-full w-10 bg-green-500/70"></div>
        </div>
      </div>
    </header>

    <!-- main content -->
    <div class="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      <!-- left: profile -->
      <aside class="md:col-span-1 space-y-4">
        <div class="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden">
          <div class="h-16 bg-gradient-to-r from-sky-700/60 via-sky-500/40 to-emerald-500/40"></div>
          <div class="p-4 -mt-8">
            <div class="flex items-end gap-3">
              <img
                class="h-16 w-16 rounded-full ring-4 ring-white bg-white object-cover"
                src="/shittyPerson.webp"
                alt="Ali Al-Baghdadi"
              />
              <div>
                <h2 class="text-base font-semibold">Ali Al‑Baghdadi</h2>
                <p class="text-sm text-gray-600">مطور فرونتند • بغداد</p>
              </div>
            </div>
            <div class="mt-4 flex items-center gap-3 text-xs text-gray-600">
              <span class="px-2 py-1 rounded bg-white/5 border border-white/10">٥٠٠+ معارف</span>
              <span class="px-2 py-1 rounded bg-white/5 border border-white/10">متاح للشغل</span>
            </div>
            <div class="mt-4 grid grid-cols-2 gap-2 text-sm">
              <a href="#" class="rounded-md bg-gray-100 border border-gray-200 px-3 py-2 text-gray-700 hover:bg-gray-200">الملف</a>
              <a href="#" class="rounded-md bg-gray-100 border border-gray-200 px-3 py-2 text-gray-700 hover:bg-gray-200">وظايف محفوظة</a>
              <a href="#" class="rounded-md bg-gray-100 border border-gray-200 px-3 py-2 text-gray-700 hover:bg-gray-200">كروبات</a>
              <a href="#" class="rounded-md bg-gray-100 border border-gray-200 px-3 py-2 text-gray-700 hover:bg-gray-200">تقنية العراق</a>
            </div>
          </div>
        </div>

        <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
          <h3 class="font-semibold mb-3">روابط سريعة</h3>
          <ul class="text-sm space-y-2 text-gray-700">
            <li><a class="hover:text-gray-900" href="#">#تقنية_العراق</a></li>
            <li><a class="hover:text-gray-900" href="#">#بغداد</a></li>
            <li><a class="hover:text-gray-900" href="#">#كوردستان</a></li>
            <li><a class="hover:text-gray-900" href="#">#البصرة</a></li>
          </ul>
        </div>
      </aside>

      <!-- center: feed -->
      <section class="md:col-span-2 space-y-4">
        <!-- composer -->
        <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
          <div class="flex items-center gap-3">
            <img
              class="h-10 w-10 rounded-full ring-2 ring-[#0A66C2]/40"
              src="https://api.dicebear.com/7.x/initials/svg?seed=Ali%20Al-Baghdadi"
              alt=""
            />
            <button class="flex-1 text-left rounded-full bg-gray-100 border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-200">
              اكتب منشور • شنو الأخبار اليوم؟
            </button>
          </div>
          <div class="mt-3 flex items-center gap-6 text-sm text-gray-600">
            <button class="hover:text-gray-900">📷 صورة</button>
            <button class="hover:text-gray-900">💼 وظيفة</button>
            <button class="hover:text-gray-900">✍️ اكتب مقال</button>
          </div>
        </div>

        <!-- post card 1 -->
        <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
          <div class="flex items-start gap-3">
            <img class="h-11 w-11 rounded-full" src="https://api.dicebear.com/7.x/initials/svg?seed=Zahraa%20Hameed" alt="" />
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-semibold">Zahraa Hameed</h4>
                  <p class="text-xs text-gray-600">مصممة منتجات • أربيل</p>
                </div>
                <span class="text-xs text-gray-500">قبل ساعتين</span>
              </div>
              <p class="mt-3 text-sm leading-6">
                متحمسة أشارككم إن فريقنا ديـفتح فرص توظيف جديدة ببغداد! إذا انت مطوّر Vue + TS وتحب واجهات مرتّبة وتجربة عربية تزّهن، دزّلنا. 🇮🇶
              </p>
              <div class="mt-3 rounded-lg overflow-hidden border border-white/10">
                <img
                  class="w-full h-56 object-cover"
                  src="/favicon.ico.jpg"
                  alt="Baghdad Tigris"
                />
              </div>
              <div class="mt-3 flex items-center justify-between text-xs text-gray-600">
                <span>❤️ 128 • 💬 24 • ↪️ 12</span>
                <span>٣٫١ك مشاهدة</span>
              </div>
              <div class="mt-2 grid grid-cols-4 text-sm text-gray-700">
                <button class="py-2 rounded hover:bg-gray-100">إعجاب</button>
                <button class="py-2 rounded hover:bg-gray-100">تعليق</button>
                <button class="py-2 rounded hover:bg-gray-100">مشاركة</button>
                <button class="py-2 rounded hover:bg-gray-100">إرسال</button>
              </div>
            </div>
          </div>
        </div>

        <!-- post card 2 -->
        <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
          <div class="flex items-start gap-3">
            <img class="h-11 w-11 rounded-full" src="https://api.dicebear.com/7.x/initials/svg?seed=Hussein%20Al%20Musawi" alt="" />
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-semibold">Hussein Al‑Musawi</h4>
                  <p class="text-xs text-gray-600">علاقات مطورين • البصرة</p>
                </div>
                <span class="text-xs text-gray-500">قبل ٦ ساعات</span>
              </div>
              <p class="mt-3 text-sm leading-6">
                تحية لكروب Iraq JS على ملتقى رهيب بالكرادة. الجاية نحچي عن أداء Vue على الأجهزة الضعيفة. تعالوا نونس!
              </p>
              <div class="mt-3 flex items-center justify-between text-xs text-gray-600">
                <span>👍 76 • 💬 10</span>
                <span>987 مشاهدة</span>
              </div>
              <div class="mt-2 grid grid-cols-4 text-sm text-gray-700">
                <button class="py-2 rounded hover:bg-gray-100">إعجاب</button>
                <button class="py-2 rounded hover:bg-gray-100">تعليق</button>
                <button class="py-2 rounded hover:bg-gray-100">مشاركة</button>
                <button class="py-2 rounded hover:bg-gray-100">إرسال</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- right: news / ads -->
      <aside class="md:col-span-1 space-y-4">
        <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
          <h3 class="font-semibold">أخبار العراق</h3>
          <ul class="mt-3 space-y-2 text-sm text-gray-700">
            <li><a class="hover:text-gray-900" href="#">بغداد تفتتح هَب تقني جديد يم الجادرية</a></li>
            <li><a class="hover:text-gray-900" href="#">ستارتبات أربيل جمّعن تمويل أولي بالفنتك</a></li>
            <li><a class="hover:text-gray-900" href="#">مطوري البصرة يقودون خطوط عربية مفتوحة المصدر</a></li>
          </ul>
          <button class="mt-3 text-[#0A66C2] hover:brightness-110 text-sm">شوف المزيد</button>
        </div>

        <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
          <p class="text-xs text-gray-500">إعلان</p>
          <div class="mt-2 rounded-lg overflow-hidden border border-gray-200">
            <div class="h-20 bg-gradient-to-r from-amber-600/70 via-amber-400/50 to-emerald-500/60"></div>
            <div class="p-3">
              <h4 class="font-semibold">مصرف النهرين • بطاقات تقنية</h4>
              <p class="text-sm text-gray-700">بطاقات بدون رسوم للمطورين العراقيين. اطلب بطاقتك هسه.</p>
              <button class="mt-3 px-3 py-1.5 rounded bg-green-500 text-gray-900 text-sm font-medium hover:bg-green-400">
                اعرف أكثر
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <footer class="max-w-6xl mx-auto px-4 pb-10 text-center text-xs text-gray-500">
      مصنوع بالعراق • بمحبة من بغداد 🇮🇶
    </footer>
  </motion.div>
    </template>

    <script setup lang="ts">
    import { motion } from 'motion-v'

    // Add component name
    defineOptions({
    name: 'LandingPage',
    })

    const stars = Array.from({ length: 24 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 4,
    }))
    </script>

    <style scoped>
    .animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
    opacity: 0;
    }

    .animate-slide-up {
    animation: slideUp 0.8s ease-out forwards;
    opacity: 0;
    }

    @keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
    }

    @keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
    }

    /* Optimized star styles */
    .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    opacity: 0;
    animation: starTwinkle 3s ease-in-out infinite;
    }

    @keyframes starTwinkle {
    0%,
    100% {
        opacity: 0;
    }
    50% {
        opacity: 0.8;
    }
    }

    /* Interactive element styles */
    a:hover,
    button:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease;
    }
    </style>
