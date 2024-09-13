<script setup>
const { locale, setLocale } = useI18n()
const profile = {
  email: 'kirill_egorov@me.com',
  phone: '+375296117699',
  linkedin: 'https://www.linkedin.com/in/kirill-egorov696816121',
  skills: [
    'Javascript',
    'Vue2|3',
    'Node JS',
    'Nuxt 2|3',
    'Typescript',
    'Prisma',
    'Webpack',
    'Vite',
    'Eslint',
    'Git',
    'Kubernetes',
    'Docker',
    'Github Actions',
    'PHP',
    'Laravel',
    'Tailwind CSS',
    'PhpUnit',
    'Laravel Pint',
    'Laravel Horizon',
    'Laravel Nova',
    'Uno CSS',
    'Asterisk',
    'Websockets',
    'AmoCRM',
    'Chrome Extensions',
    'MySQL',
    'Terraform',
    'Business Strategy',
    'Customer Service',
    'Managing Team Priorities',
    'Strong Communication Skills',
  ],
  projects: [
    {
      technologies: 'Vue3, Typescript, Pinia, Tailwind CSS, ky, Naive-UI, Laravel',
    },
    {
      technologies: 'Nuxt 3, Typescript, Pinia, Tailwind CSS, ky, Naive-UI, Prisma, MySQL',
    },
  ],
  jobs: [
    {
      languagesAndTechnologies: [
        'Laravel',
        'PHP',
        'MySQL',
        'HTML',
        'CSS',
        'JavaScript',
        'Node JS',
        'Vue',
        'Nuxt',
      ],
    },
    {
      languagesAndTechnologies: [
        'Laravel',
        'PHP',
        'MySQL',
        'HTML',
        'CSS',
        'JavaScript',
        'Node JS',
        'Vue',
        'Nuxt',
      ],
    },
    {
      languagesAndTechnologies: [
        'Kubernetes',
        'Docker',
        'GitHub Actions',
        'Terraform',
        'CI/CD',
        'Scripting',
      ],
    },
  ],

}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-r from-gray-900 to-blue-900 text-gray-200 py-0 lg:py-10 font-sans">
    <div class="px-0 lg:px-20 flex justify-center">
      <div class="bg-gray-800 rounded-none lg:rounded-lg shadow-lg overflow-hidden transform max-w-4xl">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold mb-2 text-white">
            {{ $t('name') }}
          </h1>
          <div>
            <NButton
              class="text-white mr-4 text-xl"
              :class="{ underline: locale === 'en' }"
              :focusable="false"
              text
              @click="setLocale('en')"
            >
              EN
            </NButton>
            <NButton
              class="text-white text-xl"
              :class="{ underline: locale === 'ru' }"
              :focusable="false"
              text
              @click="setLocale('ru')"
            >
              RU
            </NButton>
          </div>
        </div>

        <!-- Content Section -->
        <div class="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Personal Info -->
          <div>
            <h2 class="text-2xl font-bold text-white mb-4">
              {{ $t('personalDetails') }}
            </h2>
            <ul class="space-y-2">
              <li>
                <strong>{{ $t('email') }}:</strong> <a
                  :href="`mailto:${profile.email}`"
                  class="text-blue-400 hover:text-blue-600"
                >{{ profile.email }}</a>
              </li>
              <li>
                <strong>{{ $t('phone') }}:</strong> <a
                  :href="`tel:${profile.phone}`"
                  class="text-blue-400 hover:text-blue-600"
                >{{ profile.phone }}</a>
              </li>
              <li>
                <strong>{{ $t('linkedin') }}:</strong> <a
                  :href="profile.linkedin"
                  class="text-blue-400 hover:text-blue-600"
                >LinkedIn</a>
              </li>
              <li><strong>{{ $t('locationLabel') }}:</strong> {{ $t('location') }}</li>
              <li><strong>{{ $t('genderLabel') }}:</strong> {{ $t('gender') }}</li>
            </ul>
          </div>

          <!-- Skills Section -->
          <div>
            <h2 class="text-2xl font-bold text-white mb-4">
              {{ $t('skills') }}
            </h2>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="skill in profile.skills"
                :key="skill"
                class="bg-blue-600 text-white py-1 px-3 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Profile Summary -->
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold text-white mb-4">
              {{ $t('profileSummary') }}
            </h2>
            <p class="leading-loose text-gray-300">
              {{ $t('profileSummaryText') }}
            </p>
          </div>

          <!-- Projects Section -->
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold text-white mb-4">
              {{ $t('projects') }}
            </h2>
            <div
              v-for="(project, n) in profile.projects"
              :key="n"
              class="mb-6 bg-gray-700 p-4 rounded-lg"
            >
              <h3 class="text-xl font-semibold text-white">
                {{ $t(`projectsSection.${n}.name`) }}
              </h3>
              <p class="text-gray-400">
                {{ $t(`projectsSection.${n}.description`) }}
              </p>
              <p class="mt-2">
                <strong>{{ $t('technologiesLabel') }}:</strong> {{ project.technologies }}
              </p>
            </div>
          </div>

          <!-- Employment History -->
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold text-white mb-4">
              {{ $t('employmentHistory') }}
            </h2>
            <div
              v-for="(job, n) in profile.jobs"
              :key="n"
              class="mb-6 bg-gray-700 p-4 rounded-lg"
            >
              <h3 class="text-xl font-semibold text-white">
                {{ $t(`employmentHistoryData.${n}.title`) }}
              </h3>
              <p class="text-gray-400">
                {{ $t(`employmentHistoryData.${n}.company`) }} (  {{ $t(`employmentHistoryData.${n}.dates`) }})
              </p>
              <p class="mt-2 text-gray-300">
                {{ $t(`employmentHistoryData.${n}.responsibilities`) }}
              </p>
              <p class="mt-2">
                <strong>{{ $t('technologiesLabel') }}:</strong> {{ job.languagesAndTechnologies.join(', ') }}
              </p>
            </div>
          </div>

          <!-- Education Section -->
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold text-white mb-4">
              {{ $t('education') }}
            </h2>
            <p class="text-gray-300">
              {{ $t('educationDetails') }}
            </p>
          </div>

          <!-- Languages Section -->
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold text-white mb-4">
              {{ $t('languages') }}
            </h2>
            <p class="text-gray-300">
              {{ $t('languagesSpoken') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
