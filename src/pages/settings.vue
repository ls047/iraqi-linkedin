<template>
  <motion.div
    class="min-h-screen bg-gray-150 text-gray-900"
    :initial="{ opacity: 0, y: -40 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, ease: 'easeOut' }"
  >
    <div class="max-w-4xl mx-auto px-4 py-8" dir="rtl">
      <div class="mb-6">
        <h1 class="text-2xl font-bold">الإعدادات</h1>
        <p class="text-gray-600">إدارة حسابك وتفضيلاتك</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Settings Navigation -->
        <aside class="md:col-span-1">
          <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:sticky md:top-24">
            <nav class="space-y-2">
              <button
                v-for="section in settingsSections"
                :key="section.id"
                @click="activeSection = section.id"
                class="w-full text-right px-3 py-2 rounded-lg text-sm transition-colors"
                :class="activeSection === section.id
                  ? 'bg-[#0A66C2] text-white'
                  : 'text-gray-700 hover:bg-gray-100'"
              >
                {{ section.label }}
              </button>
            </nav>
          </div>
        </aside>

        <!-- Settings Content -->
        <div class="md:col-span-3 space-y-6">
          <!-- Profile Settings -->
          <div v-if="activeSection === 'profile'" class="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
            <h2 class="text-xl font-semibold mb-4">إعدادات الملف الشخصي</h2>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">الاسم الكامل</label>
                <input
                  v-model="profileSettings.fullName"
                  type="text"
                  class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">اللقب المهني</label>
                <input
                  v-model="profileSettings.title"
                  type="text"
                  class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">الموقع</label>
                <input
                  v-model="profileSettings.location"
                  type="text"
                  class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">نبذة عني</label>
                <textarea
                  v-model="profileSettings.bio"
                  rows="4"
                  class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2 text-sm"
                ></textarea>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                <input
                  v-model="profileSettings.phone"
                  type="tel"
                  class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">الموقع الإلكتروني</label>
                <input
                  v-model="profileSettings.website"
                  type="url"
                  class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">GitHub</label>
                <input
                  v-model="profileSettings.github"
                  type="text"
                  class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                <input
                  v-model="profileSettings.linkedin"
                  type="text"
                  class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
            </div>
          </div>

          <!-- Privacy Settings -->
          <div v-if="activeSection === 'privacy'" class="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
            <h2 class="text-xl font-semibold mb-4">إعدادات الخصوصية</h2>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium">إظهار الملف للجميع</h3>
                  <p class="text-sm text-gray-600">السماح للجميع برؤية ملفك الشخصي</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="privacySettings.showProfile"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A66C2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A66C2]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium">السماح بدعوات الاتصال</h3>
                  <p class="text-sm text-gray-600">السماح للآخرين بإرسال دعوات اتصال</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="privacySettings.allowInvites"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A66C2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A66C2]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium">إظهار حالة التواجد</h3>
                  <p class="text-sm text-gray-600">إظهار متى تكون متاحاً للتواصل</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="privacySettings.showOnlineStatus"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A66C2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A66C2]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium">إظهار البريد الإلكتروني</h3>
                  <p class="text-sm text-gray-600">السماح للآخرين برؤية بريدك الإلكتروني</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="privacySettings.showEmail"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A66C2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A66C2]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium">إظهار رقم الهاتف</h3>
                  <p class="text-sm text-gray-600">السماح للآخرين برؤية رقم هاتفك</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="privacySettings.showPhone"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A66C2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A66C2]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium">السماح بالرسائل</h3>
                  <p class="text-sm text-gray-600">السماح للآخرين بإرسال رسائل لك</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="privacySettings.allowMessages"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A66C2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A66C2]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium">إظهار آخر ظهور</h3>
                  <p class="text-sm text-gray-600">إظهار متى كنت متواجداً آخر مرة</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="privacySettings.showLastSeen"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A66C2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A66C2]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium">السماح بالبحث</h3>
                  <p class="text-sm text-gray-600">السماح للآخرين بالبحث عن ملفك</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="privacySettings.allowSearch"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A66C2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A66C2]"></div>
                </label>
              </div>
            </div>
          </div>

          <!-- Notifications Settings -->
          <div v-if="activeSection === 'notifications'" class="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
            <h2 class="text-xl font-semibold mb-4">إعدادات الإشعارات</h2>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium">إشعارات الاتصالات</h3>
                  <p class="text-sm text-gray-600">عندما يرسل لك أحد دعوة اتصال</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="notificationSettings.connections"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A66C2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A66C2]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium">إشعارات الوظائف</h3>
                  <p class="text-sm text-gray-600">عندما تتوفر وظائف تناسبك</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="notificationSettings.jobs"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A66C2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A66C2]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium">إشعارات الرسائل</h3>
                  <p class="text-sm text-gray-600">عندما يرسل لك أحد رسالة</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="notificationSettings.messages"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A66C2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A66C2]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium">إشعارات المنشورات</h3>
                  <p class="text-sm text-gray-600">عندما يتفاعل أحد مع منشوراتك</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="notificationSettings.posts"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A66C2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A66C2]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium">إشعارات الفعاليات</h3>
                  <p class="text-sm text-gray-600">تذكيرات بالفعاليات التقنية القادمة</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="notificationSettings.events"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A66C2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A66C2]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium">إشعارات الأخبار</h3>
                  <p class="text-sm text-gray-600">أخبار التقنية العراقية</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="notificationSettings.news"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A66C2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A66C2]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium">إشعارات البريد الإلكتروني</h3>
                  <p class="text-sm text-gray-600">إرسال الإشعارات عبر البريد الإلكتروني</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="notificationSettings.email"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A66C2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A66C2]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium">إشعارات الدفع</h3>
                  <p class="text-sm text-gray-600">إشعارات فورية على المتصفح</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="notificationSettings.push"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A66C2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A66C2]"></div>
                </label>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-medium">إشعارات الرسائل النصية</h3>
                  <p class="text-sm text-gray-600">إرسال الإشعارات عبر الرسائل النصية</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    v-model="notificationSettings.sms"
                    type="checkbox"
                    class="sr-only peer"
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#0A66C2]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0A66C2]"></div>
                </label>
              </div>
            </div>
          </div>

          <!-- Account Settings -->
          <div v-if="activeSection === 'account'" class="bg-white border border-gray-200 shadow-sm rounded-xl p-6">
            <h2 class="text-xl font-semibold mb-4">إعدادات الحساب</h2>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                <input
                  v-model="accountSettings.email"
                  type="email"
                  class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">كلمة المرور الجديدة</label>
                <input
                  v-model="accountSettings.newPassword"
                  type="password"
                  class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">تأكيد كلمة المرور</label>
                <input
                  v-model="accountSettings.confirmPassword"
                  type="password"
                  class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">اللغة</label>
                <select
                  v-model="accountSettings.language"
                  class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2 text-sm"
                >
                  <option value="ar">العربية</option>
                  <option value="en">English</option>
                  <option value="ku">کوردی</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">المنطقة الزمنية</label>
                <select
                  v-model="accountSettings.timezone"
                  class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2 text-sm"
                >
                  <option value="Asia/Baghdad">بغداد (GMT+3)</option>
                  <option value="Asia/Erbil">أربيل (GMT+3)</option>
                  <option value="Asia/Basra">البصرة (GMT+3)</option>
                  <option value="Asia/Mosul">الموصل (GMT+3)</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">العملة</label>
                <select
                  v-model="accountSettings.currency"
                  class="w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2 text-sm"
                >
                  <option value="IQD">دينار عراقي (IQD)</option>
                  <option value="USD">دولار أمريكي (USD)</option>
                  <option value="EUR">يورو (EUR)</option>
                </select>
              </div>
              <div class="pt-4">
                <button
                  @click="deleteAccount"
                  class="px-4 py-2 rounded bg-red-100 border border-red-200 text-red-600 hover:bg-red-200"
                >
                  حذف الحساب
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Save Button -->
      <div class="mt-8 flex justify-end">
        <button
          @click="saveSettings"
          class="px-6 py-2 rounded bg-[#0A66C2] text-white hover:brightness-110"
        >
          حفظ التغييرات
        </button>
      </div>
    </div>
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { ref, reactive } from 'vue'

defineOptions({ name: 'SettingsPage' })

const activeSection = ref('profile')

const settingsSections = ref([
  { id: 'profile', label: 'الملف الشخصي' },
  { id: 'privacy', label: 'الخصوصية' },
  { id: 'notifications', label: 'الإشعارات' },
  { id: 'account', label: 'الحساب' }
])

const profileSettings = reactive({
  fullName: 'Ali Al-Baghdadi',
  title: 'مطور فرونتند',
  location: 'بغداد، العراق',
  bio: 'مطور فرونتند شغوف ببناء واجهات مستخدم جميلة وسهلة الاستخدام. متخصص في Vue.js و TypeScript، وأحب العمل على مشاريع تخدم المجتمع العراقي. من بغداد الرشيد إلى كل العراق! 🇮🇶',
  phone: '+964 750 123 4567',
  website: 'https://alibaghdadi.dev',
  github: 'github.com/alibaghdadi',
  linkedin: 'linkedin.com/in/alibaghdadi'
})

const privacySettings = reactive({
  showProfile: true,
  allowInvites: true,
  showOnlineStatus: false,
  showEmail: false,
  showPhone: false,
  allowMessages: true,
  showLastSeen: false,
  allowSearch: true
})

const notificationSettings = reactive({
  connections: true,
  jobs: true,
  messages: true,
  posts: true,
  events: true,
  news: false,
  email: true,
  push: true,
  sms: false
})

const accountSettings = reactive({
  email: 'ali@example.com',
  newPassword: '',
  confirmPassword: '',
  language: 'ar',
  timezone: 'Asia/Baghdad',
  currency: 'IQD'
})

function saveSettings() {
  // In a real app, this would save to backend
  alert('تم حفظ الإعدادات بنجاح!')
}

function deleteAccount() {
  if (confirm('هل أنت متأكد من حذف حسابك؟ هذا الإجراء لا يمكن التراجع عنه.')) {
    alert('تم حذف الحساب')
  }
}
</script>
