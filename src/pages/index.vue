<template>
  <div class="min-h-screen bg-gray-150 text-gray-900 relative overflow-hidden">
    <!-- ambient stars -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div
        v-for="(s, i) in stars"
        :key="i"
        class="star"
        :style="{ top: s.top + '%', left: s.left + '%', animationDelay: s.delay + 's' }"
      />
    </div>



    <motion.div
      :initial="{ opacity: 0, y: -100 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 1, ease: 'easeInOut' }"
    >
      <!-- main content -->
      <div class="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6" dir="rtl">
        <!-- left: profile -->
        <aside class="hidden md:block md:col-span-1 space-y-12">
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden">
            <div class="h-18 bg-gradient-to-r from-sky-700/60 via-sky-500/40 to-emerald-500/40 relative">
              <!-- Iraqi palm tree silhouette -->
              <div class="absolute bottom-0 left-4 text-2xl opacity-30">🌴</div>
            </div>
            <div class="p-4 -mt-2">
              <div class="flex items-end gap-3">
                <img
                  class="h-16 w-16 rounded-full ring-4 ring-white bg-white object-cover"
                  src="/shittyPerson.webp"
                  alt="Ali Al-Baghdadi"
                />
                <div>
                  <h2 class="text-base font-semibold">علي  </h2>
                  <p class="text-sm text-gray-600">مطور فرونتند • بغداد الرشيد</p>
                  <p class="text-xs text-gray-500">🇮🇶 عراقي  الأصل</p>
                </div>
              </div>
              <div class="mt-4 flex items-center gap-3 text-xs text-gray-600">
                <span class="px-2 py-1 rounded bg-white/5 border border-white/10">٥٠٠+ معارف</span>
                <span class="px-2 py-1 rounded bg-white/5 border border-white/10">متاح للشغل</span>
              </div>
              <div class="mt-4 grid grid-cols-2 gap-2 text-sm">
                <RouterLink to="/profile" class="rounded-md bg-gray-100 border border-gray-200 px-3 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">الملف</RouterLink>
                <RouterLink to="/jobs" class="rounded-md bg-gray-100 border border-gray-200 px-3 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">وظايف محفوظة</RouterLink>
                <RouterLink to="/my-network" class="rounded-md bg-gray-100 border border-gray-200 px-3 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">كروبات</RouterLink>
                <a href="#" class="rounded-md bg-gray-100 border border-gray-200 px-3 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">تقنية العراق</a>
              </div>
            </div>
          </div>

          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h3 class="font-semibold mb-3">روابط سريعة</h3>
            <ul class="text-sm space-y-2 text-gray-700">
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">#تقنية_العراق</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">#بغداد_الرشيد</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">#كوردستان_الحرة</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">#البصرة_الخضراء</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">#الموصل_العريقة</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">#أربيل_الجميلة</a></li>
            </ul>
          </div>

          <!-- Iraqi Tech Events -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h3 class="font-semibold mb-3">فعاليات تقنية عراقية</h3>
            <div class="space-y-3 text-sm">
              <div class="p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                <h4 class="font-medium text-amber-800">ملتقى بغداد التقني</h4>
                <p class="text-amber-700 text-xs">٢٥ يناير • بغداد</p>
              </div>
              <div class="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <h4 class="font-medium text-green-800">هاكاثون أربيل</h4>
                <p class="text-green-700 text-xs">١ فبراير • أربيل</p>
              </div>
            </div>
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
              <button class="flex-1 text-right rounded-full bg-gray-100 border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-200 cursor-pointer">
                اكتب منشور • شنو الأخبار اليوم؟ 🇮🇶
              </button>
            </div>
            <div class="mt-3 flex items-center gap-6 text-sm text-gray-600">
              <button class="hover:text-gray-900 cursor-pointer">📷 صورة</button>
              <button class="hover:text-gray-900 cursor-pointer">💼 وظيفة</button>
              <button class="hover:text-gray-900 cursor-pointer">✍️ اكتب مقال</button>
              <button class="hover:text-gray-900 cursor-pointer">🌴 عراقي</button>
            </div>
          </div>

          <!-- post card 1 -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <div class="flex items-start gap-3">
              <img class="h-11 w-11 rounded-full" src="https://api.dicebear.com/7.x/initials/svg?seed=Zahraa%20Hameed" alt="" />
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="font-semibold">زهراء حميد</h4>
                    <p class="text-xs text-gray-600">مصممة منتجات • أربيل</p>
                    <p class="text-xs text-gray-500">🇮🇶 كوردستان</p>
                  </div>
                  <span class="text-xs text-gray-500">قبل ساعتين</span>
                </div>
                <p class="mt-3 text-sm leading-6">
                  متحمسة أشارككم إن فريقنا ديـفتح فرص توظيف جديدة ببغداد! إذا انت مطوّر Vue + TS وتحب واجهات مرتّبة وتجربة عربية تزّهن، دزّلنا.
                  <br><br>
                  🌴 من بغداد الرشيد إلى أربيل الجميلة، التقنية تجمعنا! 🇮🇶
                </p>
                <div class="mt-3 rounded-lg overflow-hidden border border-white/10">
                  <img
                    class="w-full h-56 object-cover"
                    src="/favicon.ico.jpg"
                    alt="Baghdad Tigris"
                  />
                </div>
                <div class="mt-3 flex items-center justify-between text-xs text-gray-600">
                  <span>❤️ ١٢٨ • 💬 ٢٤ • ↪️ ١٢</span>
                  <span>٣٫١ك مشاهدة</span>
                </div>
                <div class="mt-2 grid grid-cols-4 text-sm text-gray-700">
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">إعجاب</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">تعليق</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">مشاركة</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">إرسال</button>
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
                    <h4 class="font-semibold">حسين الموسوي</h4>
                    <p class="text-xs text-gray-600">علاقات مطورين • البصرة</p>
                    <p class="text-xs text-gray-500">🇮🇶 البصرة الخضراء</p>
                  </div>
                  <span class="text-xs text-gray-500">قبل ٦ ساعات</span>
                </div>
                <p class="mt-3 text-sm leading-6">
                  تحية لكروب Iraq JS على ملتقى رهيب بالكرادة. الجاية نحچي عن أداء Vue على الأجهزة الضعيفة. تعالوا نونس!
                  <br><br>
                  🌊 من شط العرب إلى دجلة والفرات، التقنية تجري في عروقنا! 🇮🇶
                </p>
                <div class="mt-3 flex items-center justify-between text-xs text-gray-600">
                  <span>👍 ٧٦ • 💬 ١٠</span>
                  <span>٩٨٧ مشاهدة</span>
                </div>
                <div class="mt-2 grid grid-cols-4 text-sm text-gray-700">
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">إعجاب</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">تعليق</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">مشاركة</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">إرسال</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Iraqi Success Story -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <div class="flex items-start gap-3">
              <img class="h-11 w-11 rounded-full" src="https://api.dicebear.com/7.x/initials/svg?seed=Amina%20Al-Rashid" alt="" />
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="font-semibold">أمينة الرشيد</h4>
                    <p class="text-xs text-gray-600">مطورة فرونتند • الموصل</p>
                    <p class="text-xs text-gray-500">🇮🇶 نينوى العريقة</p>
                  </div>
                  <span class="text-xs text-gray-500">قبل يوم</span>
                </div>
                <p class="mt-3 text-sm leading-6">
                  فخورة أشارككم إن شركتي العراقية "نينوى تك" نجحت في تطوير تطبيق تعليمي للطلاب العراقيين!
                  <br><br>
                  🏛️ من أرض الحضارات، نبنى مستقبل التقنية! 🇮🇶
                </p>
                <div class="mt-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <h5 class="font-medium text-blue-800">تطبيق "تعلم العراقي"</h5>
                  <p class="text-blue-700 text-xs">منصة تعليمية تفاعلية للطلاب العراقيين</p>
                </div>
                <div class="mt-3 flex items-center justify-between text-xs text-gray-600">
                  <span>❤️ ٢٠٥ • 💬 ٣٤ • ↪️ ١٨</span>
                  <span>١٫٢ك مشاهدة</span>
                </div>
                <div class="mt-2 grid grid-cols-4 text-sm text-gray-700">
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">إعجاب</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">تعليق</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">مشاركة</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">إرسال</button>
                </div>
              </div>
            </div>
          </div>

          <!-- New Post: Iraqi Tech Conference -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <div class="flex items-start gap-3">
              <img class="h-11 w-11 rounded-full" src="https://api.dicebear.com/7.x/initials/svg?seed=Karim%20Al-Zubaidi" alt="" />
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="font-semibold">كريم الزبيدي</h4>
                    <p class="text-xs text-gray-600">مهندس باك إند • بغداد</p>
                    <p class="text-xs text-gray-500">🇮🇶 بغداد الرشيد</p>
                  </div>
                  <span class="text-xs text-gray-500">قبل ٨ ساعات</span>
                </div>
                <p class="mt-3 text-sm leading-6">
                  سعداء نعلن عن انطلاق "مؤتمر التقنية العراقية ٢٠٢٤" في بغداد! ثلاثة أيام من المحاضرات والورش العملية.
                  <br><br>
                  🎯 المواضيع: الذكاء الاصطناعي، تطوير الويب، الأمن السيبراني، وريادة الأعمال التقنية
                  <br><br>
                  📅 ١٥-١٧ مارس ٢٠٢٤ • فندق الرشيد بغداد
                </p>
                <div class="mt-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <h5 class="font-medium text-purple-800">مؤتمر التقنية العراقية ٢٠٢٤</h5>
                  <p class="text-purple-700 text-xs">أكبر تجمع تقني في العراق 🇮🇶</p>
                </div>
                <div class="mt-3 flex items-center justify-between text-xs text-gray-600">
                  <span>❤️ ٣٤٢ • 💬 ٥٦ • ↪️ ٢٨</span>
                  <span>٢٫٥ك مشاهدة</span>
                </div>
                <div class="mt-2 grid grid-cols-4 text-sm text-gray-700">
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">إعجاب</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">تعليق</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">مشاركة</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">إرسال</button>
                </div>
              </div>
            </div>
          </div>

          <!-- New Post: Startup Success -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <div class="flex items-start gap-3">
              <img class="h-11 w-11 rounded-full" src="https://api.dicebear.com/7.x/initials/svg?seed=Nour%20Al-Hassan" alt="" />
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="font-semibold">نور الحسن</h4>
                    <p class="text-xs text-gray-600">محللة بيانات • أربيل</p>
                    <p class="text-xs text-gray-500">🇮🇶 كوردستان</p>
                  </div>
                  <span class="text-xs text-gray-500">قبل يومين</span>
                </div>
                <p class="mt-3 text-sm leading-6">
                  فخورة أشارككم خبر نجاح شركتي الناشئة "كوردستان داتا" في جذب استثمار أولي بقيمة ٥٠٠ ألف دولار!
                  <br><br>
                  🚀 نعمل على تطوير حلول ذكاء اصطناعي للشركات العراقية والكوردية
                  <br><br>
                  شكراً لكل من دعمنا في هذه الرحلة! 🇮🇶
                </p>
                <div class="mt-3 flex items-center justify-between text-xs text-gray-600">
                  <span>❤️ ٥٦٧ • 💬 ٨٩ • ↪️ ٤٥</span>
                  <span>٣٫٨ك مشاهدة</span>
                </div>
                <div class="mt-2 grid grid-cols-4 text-sm text-gray-700">
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">إعجاب</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">تعليق</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">مشاركة</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">إرسال</button>
                </div>
              </div>
            </div>
          </div>

          <!-- New Post: Educational Content -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <div class="flex items-start gap-3">
              <img class="h-11 w-11 rounded-full" src="https://api.dicebear.com/7.x/initials/svg?seed=Ahmed%20Al-Jabouri" alt="" />
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="font-semibold">أحمد الجبوري</h4>
                    <p class="text-xs text-gray-600">مهندس DevOps • بغداد</p>
                    <p class="text-xs text-gray-500">🇮🇶 بغداد</p>
                  </div>
                  <span class="text-xs text-gray-500">قبل ٣ أيام</span>
                </div>
                <p class="mt-3 text-sm leading-6">
                  أطلقت سلسلة فيديوهات تعليمية مجانية عن Docker و Kubernetes باللغة العربية!
                  <br><br>
                  🐳 الحلقة الأولى: أساسيات Docker للمطورين العراقيين
                  <br><br>
                  الهدف: رفع مستوى المطورين العراقيين في مجال DevOps 🇮🇶
                </p>
                <div class="mt-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <h5 class="font-medium text-green-800">DevOps بالعربية</h5>
                  <p class="text-green-700 text-xs">سلسلة تعليمية مجانية للمطورين العراقيين</p>
                </div>
                <div class="mt-3 flex items-center justify-between text-xs text-gray-600">
                  <span>❤️ ٢٣٤ • 💬 ٤٢ • ↪️ ١٩</span>
                  <span>١٫٧ك مشاهدة</span>
                </div>
                <div class="mt-2 grid grid-cols-4 text-sm text-gray-700">
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">إعجاب</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">تعليق</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">مشاركة</button>
                  <button class="py-2 rounded hover:bg-gray-100 cursor-pointer">إرسال</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Mobile sidebar content (shown after posts on mobile) -->
        <aside class="md:hidden space-y-4">
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h3 class="font-semibold">أخبار العراق التقنية</h3>
            <ul class="mt-3 space-y-2 text-sm text-gray-700">
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">بغداد تفتتح هَب تقني جديد يم الجادرية 🌴</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">ستارتبات أربيل جمّعن تمويل أولي بالفنتك 🏔️</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">مطوري البصرة يقودون خطوط عربية مفتوحة المصدر 🌊</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">الموصل تستضيف أول هاكاثون تقني بعد التحرير 🏛️</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">كوردستان تطلق برنامج تدريب المطورين الشباب 🗻</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">شركة "العراق كلاود" تطلق خدمات سحابية محلية ☁️</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">جامعة البصرة تفتتح قسم الذكاء الاصطناعي 🎓</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">هاكاثون "تقنية من أجل السلام" في أربيل 🕊️</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">شركة "نينوى تك" تطور تطبيق للتعليم عن بعد 📚</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">مؤتمر الأمن السيبراني العراقي في بغداد 🔒</a></li>
            </ul>
            <button class="mt-3 text-[#0A66C2] hover:brightness-110 text-sm cursor-pointer">شوف المزيد</button>
          </div>

          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <p class="text-xs text-gray-500">إعلان</p>
            <div class="mt-2 rounded-lg overflow-hidden border border-gray-200">
              <div class="h-20 bg-gradient-to-r from-amber-600/70 via-amber-400/50 to-emerald-500/60 relative">
                <div class="absolute inset-0 flex items-center justify-center text-white text-2xl opacity-30">🌴</div>
              </div>
              <div class="p-3">
                <h4 class="font-semibold">مصرف النهرين • بطاقات تقنية</h4>
                <p class="text-sm text-gray-700">بطاقات بدون رسوم للمطورين العراقيين. اطلب بطاقتك هسه.</p>
                <button class="mt-3 px-3 py-1.5 rounded bg-green-500 text-gray-900 text-sm font-medium hover:bg-green-400 cursor-pointer">
                  اعرف أكثر
                </button>
              </div>
            </div>
          </div>

          <!-- Iraqi Tech Companies -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h3 class="font-semibold">شركات تقنية عراقية</h3>
            <div class="mt-3 space-y-3">
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=RafTech" alt="RafTech" class="h-8 w-8 rounded" />
                <div>
                  <h4 class="font-medium text-sm">الرافدين التقنية</h4>
                  <p class="text-xs text-gray-600">بغداد • ٥٠ موظف</p>
                </div>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=ErbilTech" alt="ErbilTech" class="h-8 w-8 rounded" />
                <div>
                  <h4 class="font-medium text-sm">أربيل تك</h4>
                  <p class="text-xs text-gray-600">أربيل • ٣٠ موظف</p>
                </div>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=BasraTech" alt="BasraTech" class="h-8 w-8 rounded" />
                <div>
                  <h4 class="font-medium text-sm">البصرة التقنية</h4>
                  <p class="text-xs text-gray-600">البصرة • ٢٠ موظف</p>
                </div>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=MosulTech" alt="MosulTech" class="h-8 w-8 rounded" />
                <div>
                  <h4 class="font-medium text-sm">نينوى تك</h4>
                  <p class="text-xs text-gray-600">الموصل • ٢٥ موظف</p>
                </div>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=KurdistanData" alt="KurdistanData" class="h-8 w-8 rounded" />
                <div>
                  <h4 class="font-medium text-sm">كوردستان داتا</h4>
                  <p class="text-xs text-gray-600">أربيل • ١٥ موظف</p>
                </div>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=IraqCloud" alt="IraqCloud" class="h-8 w-8 rounded" />
                <div>
                  <h4 class="font-medium text-sm">العراق كلاود</h4>
                  <p class="text-xs text-gray-600">بغداد • ٤٠ موظف</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Iraqi Tech Communities -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h3 class="font-semibold">مجتمعات تقنية عراقية</h3>
            <div class="mt-3 space-y-2 text-sm">
              <div class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <span>🌴</span>
                <span>Iraq JS Community</span>
                <span class="text-xs text-gray-500">(٢٥٠ عضو)</span>
              </div>
              <div class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <span>🏔️</span>
                <span>Kurdistan Developers</span>
                <span class="text-xs text-gray-500">(١٨٠ عضو)</span>
              </div>
              <div class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <span>🌊</span>
                <span>Basra Tech Hub</span>
                <span class="text-xs text-gray-500">(١٢٠ عضو)</span>
              </div>
              <div class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <span>🏛️</span>
                <span>Mosul Innovation</span>
                <span class="text-xs text-gray-500">(٩٠ عضو)</span>
              </div>
              <div class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <span>🎓</span>
                <span>Baghdad University Tech</span>
                <span class="text-xs text-gray-500">(٣٠٠ عضو)</span>
              </div>
              <div class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <span>🚀</span>
                <span>Iraqi Startups</span>
                <span class="text-xs text-gray-500">(١٥٠ عضو)</span>
              </div>
            </div>
          </div>

          <!-- Iraqi Tech Events -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h3 class="font-semibold">فعاليات تقنية عراقية</h3>
            <div class="space-y-3 text-sm">
              <div class="p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                <h4 class="font-medium text-amber-800">ملتقى بغداد التقني</h4>
                <p class="text-amber-700 text-xs">٢٥ يناير • بغداد</p>
              </div>
              <div class="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <h4 class="font-medium text-green-800">هاكاثون أربيل</h4>
                <p class="text-green-700 text-xs">١ فبراير • أربيل</p>
              </div>
              <div class="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <h4 class="font-medium text-blue-800">مؤتمر البصرة التقني</h4>
                <p class="text-blue-700 text-xs">١٥ فبراير • البصرة</p>
              </div>
              <div class="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <h4 class="font-medium text-purple-800">مؤتمر التقنية العراقية ٢٠٢٤</h4>
                <p class="text-purple-700 text-xs">١٥-١٧ مارس • بغداد</p>
              </div>
              <div class="p-3 bg-gradient-to-r from-red-50 to-rose-50 rounded-lg border border-red-200">
                <h4 class="font-medium text-red-800">هاكاثون الموصل للسلام</h4>
                <p class="text-red-700 text-xs">١ أبريل • الموصل</p>
              </div>
            </div>
          </div>
        </aside>

        <!-- right: news / ads -->
        <aside class="hidden md:block md:col-span-1 space-y-4">
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h3 class="font-semibold">أخبار العراق التقنية</h3>
            <ul class="mt-3 space-y-2 text-sm text-gray-700">
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">بغداد تفتتح هَب تقني جديد يم الجادرية 🌴</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">ستارتبات أربيل جمّعن تمويل أولي بالفنتك 🏔️</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">مطوري البصرة يقودون خطوط عربية مفتوحة المصدر 🌊</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">الموصل تستضيف أول هاكاثون تقني بعد التحرير 🏛️</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">كوردستان تطلق برنامج تدريب المطورين الشباب 🗻</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">شركة "العراق كلاود" تطلق خدمات سحابية محلية ☁️</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">جامعة البصرة تفتتح قسم الذكاء الاصطناعي 🎓</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">هاكاثون "تقنية من أجل السلام" في أربيل 🕊️</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">شركة "نينوى تك" تطور تطبيق للتعليم عن بعد 📚</a></li>
              <li><a class="hover:text-gray-900 cursor-pointer" href="#">مؤتمر الأمن السيبراني العراقي في بغداد 🔒</a></li>
            </ul>
            <button class="mt-3 text-[#0A66C2] hover:brightness-110 text-sm cursor-pointer">شوف المزيد</button>
          </div>

          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <p class="text-xs text-gray-500">إعلان</p>
            <div class="mt-2 rounded-lg overflow-hidden border border-gray-200">
              <div class="h-20 bg-gradient-to-r from-amber-600/70 via-amber-400/50 to-emerald-500/60 relative">
                <div class="absolute inset-0 flex items-center justify-center text-white text-2xl opacity-30">🌴</div>
              </div>
              <div class="p-3">
                <h4 class="font-semibold">مصرف النهرين • بطاقات تقنية</h4>
                <p class="text-sm text-gray-700">بطاقات بدون رسوم للمطورين العراقيين. اطلب بطاقتك هسه.</p>
                <button class="mt-3 px-3 py-1.5 rounded bg-green-500 text-gray-900 text-sm font-medium hover:bg-green-400 cursor-pointer">
                  اعرف أكثر
                </button>
              </div>
            </div>
          </div>

          <!-- Iraqi Tech Companies -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h3 class="font-semibold">شركات تقنية عراقية</h3>
            <div class="mt-3 space-y-3">
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=RafTech" alt="RafTech" class="h-8 w-8 rounded" />
                <div>
                  <h4 class="font-medium text-sm">الرافدين التقنية</h4>
                  <p class="text-xs text-gray-600">بغداد • ٥٠ موظف</p>
                </div>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=ErbilTech" alt="ErbilTech" class="h-8 w-8 rounded" />
                <div>
                  <h4 class="font-medium text-sm">أربيل تك</h4>
                  <p class="text-xs text-gray-600">أربيل • ٣٠ موظف</p>
                </div>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=BasraTech" alt="BasraTech" class="h-8 w-8 rounded" />
                <div>
                  <h4 class="font-medium text-sm">البصرة التقنية</h4>
                  <p class="text-xs text-gray-600">البصرة • ٢٠ موظف</p>
                </div>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=MosulTech" alt="MosulTech" class="h-8 w-8 rounded" />
                <div>
                  <h4 class="font-medium text-sm">نينوى تك</h4>
                  <p class="text-xs text-gray-600">الموصل • ٢٥ موظف</p>
                </div>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=KurdistanData" alt="KurdistanData" class="h-8 w-8 rounded" />
                <div>
                  <h4 class="font-medium text-sm">كوردستان داتا</h4>
                  <p class="text-xs text-gray-600">أربيل • ١٥ موظف</p>
                </div>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=IraqCloud" alt="IraqCloud" class="h-8 w-8 rounded" />
                <div>
                  <h4 class="font-medium text-sm">العراق كلاود</h4>
                  <p class="text-xs text-gray-600">بغداد • ٤٠ موظف</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Iraqi Tech Communities -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h3 class="font-semibold">مجتمعات تقنية عراقية</h3>
            <div class="mt-3 space-y-2 text-sm">
              <div class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <span>🌴</span>
                <span>Iraq JS Community</span>
                <span class="text-xs text-gray-500">(٢٥٠ عضو)</span>
              </div>
              <div class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <span>🏔️</span>
                <span>Kurdistan Developers</span>
                <span class="text-xs text-gray-500">(١٨٠ عضو)</span>
              </div>
              <div class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <span>🌊</span>
                <span>Basra Tech Hub</span>
                <span class="text-xs text-gray-500">(١٢٠ عضو)</span>
              </div>
              <div class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <span>🏛️</span>
                <span>Mosul Innovation</span>
                <span class="text-xs text-gray-500">(٩٠ عضو)</span>
              </div>
              <div class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <span>🎓</span>
                <span>Baghdad University Tech</span>
                <span class="text-xs text-gray-500">(٣٠٠ عضو)</span>
              </div>
              <div class="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                <span>🚀</span>
                <span>Iraqi Startups</span>
                <span class="text-xs text-gray-500">(١٥٠ عضو)</span>
              </div>
            </div>
          </div>

          <!-- Iraqi Tech Events -->
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h3 class="font-semibold">فعاليات تقنية عراقية</h3>
            <div class="space-y-3 text-sm">
              <div class="p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                <h4 class="font-medium text-amber-800">ملتقى بغداد التقني</h4>
                <p class="text-amber-700 text-xs">٢٥ يناير • بغداد</p>
              </div>
              <div class="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <h4 class="font-medium text-green-800">هاكاثون أربيل</h4>
                <p class="text-green-700 text-xs">١ فبراير • أربيل</p>
              </div>
              <div class="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <h4 class="font-medium text-blue-800">مؤتمر البصرة التقني</h4>
                <p class="text-blue-700 text-xs">١٥ فبراير • البصرة</p>
              </div>
              <div class="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <h4 class="font-medium text-purple-800">مؤتمر التقنية العراقية ٢٠٢٤</h4>
                <p class="text-purple-700 text-xs">١٥-١٧ مارس • بغداد</p>
              </div>
              <div class="p-3 bg-gradient-to-r from-red-50 to-rose-50 rounded-lg border border-red-200">
                <h4 class="font-medium text-red-800">هاكاثون الموصل للسلام</h4>
                <p class="text-red-700 text-xs">١ أبريل • الموصل</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { RouterLink } from 'vue-router'

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
</style>
