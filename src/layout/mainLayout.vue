<template>
  <div
    dir="rtl"
    class="min-h-screen bg-gray-300 text-gray-900 relative overflow-hidden transition-all duration-500"
    :class="{ 'pointer-events-none md:pointer-events-auto': showMobileMenu }"
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
      <div class="w-full mx-auto px-4 py-3 flex items-center justify-between gap-6">
        <!-- Desktop Logo - Hidden on mobile -->
        <RouterLink to="/" class="hidden md:block items-center gap-2 font-bold text-lg hover:text-[#0A66C2] transition-colors cursor-pointer">
          <span>فرصة الي</span>
        </RouterLink>

        <!-- Mobile Header Layout -->
        <div class="md:hidden flex items-center justify-between w-full">
          <!-- Mobile Menu Button - Right side -->
          <button
            @click="toggleMobileMenu"
            class="p-2 text-gray-600 hover:text-[#0A66C2] transition-colors cursor-pointer"
          >
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span
                class="block w-5 h-0.5 bg-current transition-all duration-300"
                :class="{ 'rotate-45 translate-y-1': showMobileMenu }"
              ></span>
              <span
                class="block w-5 h-0.5 bg-current mt-1 transition-all duration-300"
                :class="{ 'opacity-0': showMobileMenu }"
              ></span>
              <span
                class="block w-5 h-0.5 bg-current mt-1 transition-all duration-300"
                :class="{ '-rotate-45 -translate-y-1': showMobileMenu }"
              ></span>
            </div>
          </button>

          <!-- Mobile Header Text - Center -->
          <RouterLink to="/" class="items-center gap-2 font-bold text-lg hover:text-[#0A66C2] transition-colors cursor-pointer">
            <span>فرصة الي</span>
          </RouterLink>

          <!-- Empty div for spacing -->
          <div class="w-10"></div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-6 text-sm">
          <RouterLink
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="relative group hover:text-[#0A66C2] transition-colors cursor-pointer"
            :class="{ 'text-[#0A66C2] font-medium': isActiveRoute(item.path) }"
          >
            {{ item.label }}
            <span
              v-if="isActiveRoute(item.path)"
              class="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0A66C2] rounded-full"
            ></span>
            <span
              v-if="item.badge"
              class="absolute -top-4 -right-2 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
            >
              {{ item.badge }}
            </span>
          </RouterLink>
        </nav>

        <!-- Notifications and Messages -->
        <div class="flex items-center gap-3">
          <!-- Notifications -->
          <div class="relative" data-dropdown="notifications">
            <button
              @click="toggleNotifications"
              class="relative p-2 text-gray-600 hover:text-[#0A66C2] transition-all duration-300 cursor-pointer group"
            >
              <div class="relative">
                <span class="text-xl group-hover:scale-110 transition-transform duration-300">🔔</span>
                <span
                  v-if="notifications.length > 0"
                  class="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse shadow-lg"
                >
                  {{ notifications.length }}
                </span>
              </div>
            </button>

            <!-- Notifications Dropdown -->
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 scale-95 -translate-y-2"
              enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 scale-100 translate-y-0"
              leave-to-class="opacity-0 scale-95 -translate-y-2"
            >
              <div
                v-if="showNotifications"
                class="absolute left-0 mt-3 w-96 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-2xl shadow-2xl z-50 max-h-[500px] overflow-hidden"
                data-dropdown="notifications"
              >
                <div class="p-5 border-b border-gray-100/50 bg-gradient-to-r from-gray-50/50 to-white/50">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-bold text-gray-900 text-lg">الإشعارات</h3>
                      <p class="text-sm text-gray-500">آخر النشاطات والتحديثات</p>
                    </div>
                    <button
                      @click="markAllNotificationsAsRead"
                      class="text-xs text-[#0A66C2] hover:underline cursor-pointer"
                    >
                      تحديد الكل كمقروء
                    </button>
                  </div>
                </div>
                <div class="max-h-[400px] overflow-y-auto custom-scrollbar">
                  <div
                    v-for="notification in notifications.slice(0, 6)"
                    :key="notification.id"
                    class="p-4 hover:bg-gradient-to-r hover:from-[#0A66C2]/5 hover:to-blue-50/50 cursor-pointer transition-all duration-300 border-b border-gray-50 last:border-b-0 group"
                  >
                    <div class="flex items-start gap-4">
                      <div class="relative">
                        <div class="w-3 h-3 bg-gradient-to-r from-[#0A66C2] to-blue-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                        <div class="absolute inset-0 w-3 h-3 bg-[#0A66C2]/20 rounded-full animate-ping"></div>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm text-gray-900 leading-relaxed group-hover:text-[#0A66C2] transition-colors">
                          {{ notification.text }}
                        </p>
                        <div class="flex items-center gap-2 mt-2">
                          <span class="text-xs text-gray-500">{{ notification.time }}</span>
                          <span class="text-xs text-[#0A66C2] opacity-0 group-hover:opacity-100 transition-opacity">
                            عرض التفاصيل →
                          </span>
                        </div>
                      </div>
                      <button
                        @click.stop="dismissNotification(notification.id)"
                        class="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-500 p-1"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </div>
                <div class="p-4 border-t border-gray-100/50 bg-gradient-to-r from-gray-50/30 to-white/30">
                  <RouterLink
                    to="/notifications"
                    class="flex items-center justify-center gap-2 text-sm text-[#0A66C2] hover:text-blue-700 font-medium cursor-pointer transition-colors"
                    @click="showNotifications = false"
                  >
                    عرض جميع الإشعارات
                    <span class="text-lg">→</span>
                  </RouterLink>
                </div>
              </div>
            </transition>
          </div>

          <!-- Messages -->
          <div class="relative" data-dropdown="messages">
            <button
              @click="toggleMessages"
              class="relative p-2 text-gray-600 hover:text-[#0A66C2] transition-all duration-300 cursor-pointer group"
            >
              <div class="relative">
                <span class="text-xl group-hover:scale-110 transition-transform duration-300">💬</span>
                <span
                  v-if="unreadMessages > 0"
                  class="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse shadow-lg"
                >
                  {{ unreadMessages }}
                </span>
              </div>
            </button>

            <!-- Messages Dropdown -->
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 scale-95 -translate-y-2"
              enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 scale-100 translate-y-0"
              leave-to-class="opacity-0 scale-95 -translate-y-2"
            >
              <div
                v-if="showMessages"
                class="absolute left-0 mt-3 w-96 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-2xl shadow-2xl z-50 max-h-[500px] overflow-hidden"
                data-dropdown="messages"
              >
                <div class="p-5 border-b border-gray-100/50 bg-gradient-to-r from-gray-50/50 to-white/50">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-bold text-gray-900 text-lg">الرسائل</h3>
                      <p class="text-sm text-gray-500">آخر المحادثات</p>
                    </div>
                    <div class="flex items-center gap-2">
                      <button class="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        ✏️
                      </button>
                      <button class="p-2 rounded-full hover:bg-gray-100 transition-colors">
                        ⚙️
                      </button>
                    </div>
                  </div>
                </div>
                <div class="max-h-[400px] overflow-y-auto custom-scrollbar">
                  <div
                    v-for="message in recentMessages.slice(0, 5)"
                    :key="message.id"
                    class="p-4 hover:bg-gradient-to-r hover:from-[#0A66C2]/5 hover:to-blue-50/50 cursor-pointer transition-all duration-300 border-b border-gray-50 last:border-b-0 group"
                    @click="goToMessages"
                  >
                    <div class="flex items-center gap-4">
                      <div class="relative">
                        <img
                          :src="message.avatar"
                          :alt="message.name"
                          class="h-12 w-12 rounded-full ring-2 ring-gray-100 shadow-md group-hover:ring-[#0A66C2]/30 transition-all duration-300 group-hover:scale-110"
                        />
                        <div
                          v-if="message.unread"
                          class="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-[#0A66C2] to-blue-500 rounded-full border-2 border-white shadow-lg animate-pulse"
                        ></div>
                        <div
                          v-else
                          class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"
                        ></div>
                      </div>
                      <div class="flex-1 min-w-0">
                        <div class="flex items-center justify-between mb-1">
                          <h4 class="font-semibold text-sm text-gray-900 truncate group-hover:text-[#0A66C2] transition-colors">
                            {{ message.name }}
                          </h4>
                          <span class="text-xs text-gray-500">{{ message.time }}</span>
                        </div>
                        <p class="text-xs text-gray-600 truncate leading-relaxed">
                          {{ message.lastMessage }}
                        </p>
                        <div class="flex items-center gap-2 mt-2">
                          <span class="text-xs text-[#0A66C2] opacity-0 group-hover:opacity-100 transition-opacity">
                            فتح المحادثة →
                          </span>
                        </div>
                      </div>
                      <div class="flex flex-col items-end gap-1">
                        <button
                          @click.stop="markMessageAsRead(message.id)"
                          class="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-[#0A66C2] p-1"
                        >
                          ✓
                        </button>
                        <button
                          @click.stop="deleteMessage(message.id)"
                          class="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-500 p-1"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-4 border-t border-gray-100/50 bg-gradient-to-r from-gray-50/30 to-white/30">
                  <RouterLink
                    to="/messages"
                    class="flex items-center justify-center gap-2 text-sm text-[#0A66C2] hover:text-blue-700 font-medium cursor-pointer transition-colors"
                    @click="showMessages = false"
                  >
                    عرض جميع الرسائل
                    <span class="text-lg">→</span>
                  </RouterLink>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Profile Menu - Desktop Only -->
        <div dir="ltr" class="absolute left-4 hidden md:block" data-dropdown="profile">

          <!-- Profile Dropdown -->
          <div
            v-if="showProfileMenu"
            class="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
            data-dropdown="profile"
          >
            <div class="p-3 border-b border-gray-100">
              <p class="font-semibold text-sm">علي البغدادي</p>
              <p class="text-xs text-gray-600">مطور فرونتند</p>
            </div>
            <div class="p-1">
              <RouterLink
                to="/profile"
                class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer"
                @click="showProfileMenu = false"
              >
                الملف الشخصي
              </RouterLink>
              <RouterLink
                to="/settings"
                class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer"
                @click="showProfileMenu = false"
              >
                الإعدادات
              </RouterLink>
              <RouterLink
                to="/help"
                class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer"
                @click="showProfileMenu = false"
              >
                المساعدة والدعم
              </RouterLink>
              <div class="border-t border-gray-100 my-1"></div>
              <button
                @click="logout"
                class="block w-full text-right px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded cursor-pointer"
              >
                تسجيل خروج
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Popup -->
      <div
        v-if="showMobileMenu"
        class="md:hidden fixed inset-0 z-50 bg-white/20"
        @click="closeMobileMenu"
      >
        <div
          class="absolute top-0 right-0 w-80 h-full bg-white shadow-2xl transform transition-all duration-500 ease-out"
          :class="showMobileMenu ? 'translate-x-0' : 'translate-x-full'"
          @click.stop
        >
          <!-- Mobile Menu Header -->
          <div class="relative p-6 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center gap-4">
                <div class="relative">
                  <div class="w-12 h-12 bg-gradient-to-br from-[#0A66C2] via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl shadow-[#0A66C2]/25">
                    <span class="text-white text-xl font-bold">ف</span>
                  </div>
                  <div class="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                </div>
                <div>
                  <h3 class="font-bold text-2xl text-gray-900 mb-1">فرصة الي</h3>
                  <p class="text-sm text-gray-600 font-medium">شبكة مهنية عراقية</p>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-xs text-[#0A66C2] font-semibold">متصل الآن</span>
                    <div class="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
              <button
                @click="closeMobileMenu"
                class="p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-2xl transition-all duration-300 cursor-pointer group hover:shadow-md"
              >
                <div class="w-6 h-6 flex flex-col justify-center items-center">
                  <span class="block w-5 h-0.5 bg-current transition-all duration-300 group-hover:rotate-45 group-hover:bg-red-500"></span>
                  <span class="block w-5 h-0.5 bg-current mt-1 transition-all duration-300 group-hover:-rotate-45 group-hover:-translate-y-1 group-hover:bg-red-500"></span>
                </div>
              </button>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-3 gap-4">
              <div class="text-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
                <div class="text-xl font-bold text-[#0A66C2] group-hover:scale-110 transition-transform">{{ notifications.length }}</div>
                <div class="text-xs text-gray-600 font-medium">إشعارات</div>
              </div>
              <div class="text-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
                <div class="text-xl font-bold text-[#0A66C2] group-hover:scale-110 transition-transform">{{ unreadMessages }}</div>
                <div class="text-xs text-gray-600 font-medium">رسائل</div>
              </div>
              <div class="text-center p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
                <div class="text-xl font-bold text-[#0A66C2] group-hover:scale-110 transition-transform">3</div>
                <div class="text-xs text-gray-600 font-medium">دعوات</div>
              </div>
            </div>
          </div>

          <!-- Mobile Navigation -->
          <nav class="p-4 space-y-4">
            <RouterLink
              v-for="item in navigationItems"
              :key="item.path"
              :to="item.path"
              class="flex items-center gap-4 p-5 rounded-3xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
              :class="isActiveRoute(item.path)
                ? 'bg-gradient-to-r from-[#0A66C2] via-blue-600 to-blue-700 text-white shadow-xl shadow-[#0A66C2]/30'
                : 'text-gray-700 hover:bg-gray-50 hover:shadow-lg hover:scale-[1.02]'"
              @click="closeMobileMenu"
            >
              <!-- Background glow for active items -->
              <div
                v-if="isActiveRoute(item.path)"
                class="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50"
              ></div>

              <div class="relative z-10">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  :class="isActiveRoute(item.path)
                    ? 'bg-white/20 backdrop-blur-sm'
                    : 'bg-gray-100 group-hover:bg-[#0A66C2]/10'"
                >
                  <span class="text-xl">{{ item.icon }}</span>
                </div>
                <div
                  v-if="isActiveRoute(item.path)"
                  class="absolute -inset-1 bg-white/30 rounded-full animate-ping"
                ></div>
              </div>

              <div class="flex-1 z-10">
                <span class="font-semibold text-base">{{ item.label }}</span>
                <div class="text-xs opacity-70 mt-1" :class="isActiveRoute(item.path) ? 'text-white/80' : 'text-gray-500'">
                  {{ getNavigationDescription(item.path) }}
                </div>
              </div>

              <div class="flex items-center gap-3 z-10">
                <span
                  v-if="item.badge"
                  class="h-7 w-7 bg-gradient-to-r from-red-500 via-pink-500 to-red-600 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg animate-pulse"
                >
                  {{ item.badge }}
                </span>
                <span
                  v-if="!isActiveRoute(item.path)"
                  class="text-gray-400 group-hover:text-[#0A66C2] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </RouterLink>
          </nav>

          <!-- Mobile User Section -->
          <div class="p-4 border-t border-gray-100 bg-gray-50">
            <div class="flex items-center gap-4 p-5 rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div class="relative">
                <img
                  class="h-16 w-16 rounded-2xl ring-4 ring-[#0A66C2]/20 shadow-xl group-hover:ring-[#0A66C2]/40 transition-all duration-300"
                  src="https://api.dicebear.com/7.x/initials/svg?seed=Ali%20Al-Baghdadi"
                  alt="Profile"
                />
                <div class="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-3 border-white shadow-xl animate-pulse"></div>
              </div>
              <div class="flex-1">
                <p class="font-bold text-lg text-gray-900 mb-1">علي البغدادي</p>
                <p class="text-sm text-gray-600 font-medium">مطور فرونتند</p>
                <div class="flex items-center gap-3 mt-2">
                  <span class="text-xs text-[#0A66C2] font-semibold bg-[#0A66C2]/10 px-2 py-1 rounded-full">عضو منذ 2023</span>
                  <div class="flex items-center gap-1">
                    <div class="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                    <span class="text-xs text-green-600 font-semibold">متصل الآن</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-center gap-1">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                <span class="text-xs text-green-600 font-semibold">متصل</span>
              </div>
            </div>

            <div class="mt-6 space-y-3">
              <RouterLink
                to="/profile"
                class="flex items-center gap-4 p-4 rounded-2xl text-gray-700 hover:bg-white cursor-pointer transition-all duration-300 group hover:shadow-md"
                @click="closeMobileMenu"
              >
                <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-[#0A66C2] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <span class="text-white text-lg group-hover:scale-110 transition-transform">👤</span>
                </div>
                <span class="flex-1 font-medium">الملف الشخصي</span>
                <span class="text-gray-400 group-hover:text-[#0A66C2] transition-colors opacity-0 group-hover:opacity-100">→</span>
              </RouterLink>

              <RouterLink
                to="/settings"
                class="flex items-center gap-4 p-4 rounded-2xl text-gray-700 hover:bg-white cursor-pointer transition-all duration-300 group hover:shadow-md"
                @click="closeMobileMenu"
              >
                <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <span class="text-white text-lg group-hover:scale-110 transition-transform">⚙️</span>
                </div>
                <span class="flex-1 font-medium">الإعدادات</span>
                <span class="text-gray-400 group-hover:text-[#0A66C2] transition-colors opacity-0 group-hover:opacity-100">→</span>
              </RouterLink>

              <RouterLink
                to="/help"
                class="flex items-center gap-4 p-4 rounded-2xl text-gray-700 hover:bg-white cursor-pointer transition-all duration-300 group hover:shadow-md"
                @click="closeMobileMenu"
              >
                <div class="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <span class="text-white text-lg group-hover:scale-110 transition-transform">❓</span>
                </div>
                <span class="flex-1 font-medium">المساعدة والدعم</span>
                <span class="text-gray-400 group-hover:text-[#0A66C2] transition-colors opacity-0 group-hover:opacity-100">→</span>
              </RouterLink>

              <div class="border-t border-gray-200 my-4"></div>

              <button
                @click="logout"
                class="flex items-center gap-4 p-4 rounded-2xl text-red-600 hover:bg-white cursor-pointer w-full text-right transition-all duration-300 group hover:shadow-md"
              >
                <div class="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <span class="text-white text-lg group-hover:scale-110 transition-transform">🚪</span>
                </div>
                <span class="flex-1 font-medium">تسجيل خروج</span>
                <span class="text-red-400 group-hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- vibrant Iraqi flag accent -->
      <div class="h-1 w-full rounded-b-lg overflow-hidden">
        <div  class="h-full w-full bg-gradient-to-r from-red-500 via-white to-black relative">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent animate-pulse"></div>
        </div>
      </div>
    </header>

    <!-- main content -->
    <main
      class="transition-all duration-500"
      :class="{ 'blur-sm md:blur-none': showMobileMenu }"
    >
      <slot />
    </main>

    <footer class="max-w-6xl mx-auto px-4 pb-10 text-center text-xs text-gray-500">
      مصنوع بالعراق • بمحبة من بغداد 🇮🇶
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

// Add component name
defineOptions({
  name: 'MainLayout',
})

const route = useRoute()
const router = useRouter()

// Navigation data
const navigationItems = ref([
  { path: '/', label: 'الرئيسية', icon: '🏠' },
  { path: '/my-network', label: 'شبكتي', icon: '👥', badge: 3 },
  { path: '/jobs', label: 'وظايف', icon: '💼' },
  { path: '/messages', label: 'الرسائل', icon: '💬', badge: 2 },
  { path: '/notifications', label: 'الإشعارات', icon: '🔔', badge: 5 },
  { path: '/profile', label: 'الملف الشخصي', icon: '👤' }
])

// Reactive state
const showProfileMenu = ref(false)
const showMobileMenu = ref(false)
const showNotifications = ref(false)
const showMessages = ref(false)
const unreadMessages = ref(2)
const notifications = ref([
  { id: 1, text: 'Zahraa Hameed قبلت دعوتك', time: 'قبل 5 دقائق', unread: true },
  { id: 2, text: 'وظيفة جديدة: مطور Vue.js', time: 'قبل ساعة', unread: true },
  { id: 3, text: 'Hussein Al-Musawi أرسل رسالة', time: 'قبل 3 ساعات', unread: false }
])

const recentMessages = ref([
  {
    id: 1,
    name: 'Zahraa Hameed',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Zahraa%20Hameed',
    lastMessage: 'شكراً لك! راح أتواصل معك قريب',
    time: 'قبل 5 دقائق',
    unread: true
  },
  {
    id: 2,
    name: 'Hussein Al-Musawi',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Hussein%20Al%20Musawi',
    lastMessage: 'أهلاً وسهلاً! كيف المشروع؟',
    time: 'قبل ساعة',
    unread: false
  },
  {
    id: 3,
    name: 'Amina Al-Rashid',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Amina%20Al-Rashid',
    lastMessage: 'ممتاز! راح أرسل لك الكود',
    time: 'قبل ساعتين',
    unread: true
  },
  {
    id: 4,
    name: 'Karim Al-Zubaidi',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Karim%20Al-Zubaidi',
    lastMessage: 'أكيد! راح أكون موجود',
    time: 'قبل 3 ساعات',
    unread: false
  }
])

// Computed properties
const isActiveRoute = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

// Helper function for navigation descriptions
const getNavigationDescription = (path: string) => {
  const descriptions: Record<string, string> = {
    '/': 'الصفحة الرئيسية',
    '/my-network': 'إدارة شبكتك المهنية',
    '/jobs': 'البحث عن الوظائف',
    '/messages': 'رسائل ومحادثات',
    '/notifications': 'الإشعارات والتحديثات'
  }
  return descriptions[path] || ''
}

// Methods
const toggleProfileMenu = () => {
  showProfileMenu.value = !showProfileMenu.value
  showMobileMenu.value = false // Close mobile menu if open
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  showProfileMenu.value = false // Close profile menu if open
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value
}

const toggleMessages = () => {
  showMessages.value = !showMessages.value
}

const goToMessages = () => {
  showMessages.value = false
  showMobileMenu.value = false
  showProfileMenu.value = false
  router.push('/messages')
}

const logout = () => {
  showProfileMenu.value = false
  showMobileMenu.value = false
  // In a real app, this would handle logout
  alert('تم تسجيل الخروج')
}

const markAllNotificationsAsRead = () => {
  notifications.value.forEach(n => n.unread = false)
}

const dismissNotification = (id: number) => {
  notifications.value = notifications.value.filter(n => n.id !== id)
}

const markMessageAsRead = (id: number) => {
  const message = recentMessages.value.find(m => m.id === id)
  if (message) {
    message.unread = false
  }
}

const deleteMessage = (id: number) => {
  recentMessages.value = recentMessages.value.filter(m => m.id !== id)
}

// Close menus when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement

  // Check if click is outside profile dropdown
  if (!target.closest('[data-dropdown="profile"]')) {
    showProfileMenu.value = false
  }

  // Check if click is outside notifications dropdown
  if (!target.closest('[data-dropdown="notifications"]')) {
    showNotifications.value = false
  }

  // Check if click is outside messages dropdown
  if (!target.closest('[data-dropdown="messages"]')) {
    showMessages.value = false
  }
}

// Close mobile menu on escape key
const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    showMobileMenu.value = false
    showProfileMenu.value = false
    showNotifications.value = false
    showMessages.value = false
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscapeKey)
})

const stars = Array.from({ length: 24 }, () => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
  delay: Math.random() * 4,
}))
</script>

<style scoped>
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

/* Active route indicator */
.router-link-active {
  color: #0A66C2;
  font-weight: 500;
}

/* Cursor pointer for all interactive elements */
a, button, [role="button"] {
  cursor: pointer;
}

/* Mobile menu animations */
@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

/* Ensure mobile menu has proper z-index */
.mobile-menu {
  z-index: 9999;
}

/* Custom scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
