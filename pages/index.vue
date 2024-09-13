<script setup>
const profile = {
  name: 'Kirill Egorov',
  email: 'kirill_egorov@me.com',
  phone: '+375296117699',
  linkedin: 'https://www.linkedin.com/in/kirill-egorov696816121',
  location: 'Minsk',
  gender: 'Male',
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
  summary: `I am a skilled creative software engineer with a strong passion for quality, and leadership skills. 9+ years of professional experience in Software Industry under various technologies. Full-cycle of creation and development architecture solutions for several business streams from the idea to ready market products. Preparing and presenting technical solutions for new features, products, processes, and improvements/rewrites for existing products and processes. My key strength is the ability to tame the chaos of software engineering, and my background allows me to have an infinite range of creative approaches to do just that. I am also exceptionally good at explaining stuff I understand, and interpreting stuff people say.`,
  projects: [
    {
      name: 'Widget for Generating Documents in amoCRM',
      description: `The purpose was to create a widget for the amoCRM system that allows you to connect a Google account and both generate documents using templates and upload external files. Enables you to view files directly inside amoCRM and perform operations on them (CRUD).`,
      technologies: 'Vue3, Typescript, Pinia, Tailwind CSS, ky, Naive-UI, Laravel',
    },
    {
      name: 'chatgpt.pushka.biz',
      description: `The purpose was to create a web application for convenient communication with neural networks from OpenAI, Anthropic, and image generation via Midjourney and Stable Diffusion (Fooocus).`,
      technologies: 'Nuxt 3, Typescript, Pinia, Tailwind CSS, ky, Naive-UI, Prisma, MySQL',
    },
  ],
  jobs: [
    {
      title: 'CTO, Fullstack Developer',
      company: 'Easy Standart, Belarus',
      dates: 'Mar 2016 - Present',
      responsibilities: `Communication with customers; Business logic analysis; Development of a full solution architecture and the technology stack; Requirements gathering, clarification and analysis; Design creation; Task formulation; Quality control; Development of the site management system on PHP/MySQL.`,
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
      title: 'Fullstack Developer',
      company: 'Freelance, Belarus',
      dates: 'Oct 2016 - Present',
      responsibilities: `Requirements gathering, clarification and analysis; Increased functionality and development of new features; Quality control; HTML coding; API development; Processing and development of algorithms for storing a large number of audio files; Implemented functionality for detecting author, album, year of release of the uploaded track; Set up development processes on the project; Task distribution; Customer communication.`,
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
      title: 'DevOps Engineer',
      company: 'Freelance, Belarus',
      dates: 'Sep 2020 - Present',
      responsibilities: `Creating and configuring CI/CD infrastructure; Creating scripts for managing and deploying infrastructure; Researching and creating Proof of Concepts for deploying production/staging/development infrastructure.`,
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
  education: 'Belarusian State University; Faculty of Law, Taxes and Banks (2000 - 2005)',
  languages: 'English, Russian',
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-r from-gray-900 to-blue-900 text-gray-200 py-0 lg:py-10 font-sans">
    <div class="px-0 lg:px-20 flex justify-center">
      <div class="bg-gray-800 rounded-none lg:rounded-lg shadow-lg overflow-hidden transform max-w-4xl">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-center">
          <h1 class="text-4xl lg:text-5xl font-bold mb-2 text-white">
            {{ profile.name }}
          </h1>
          <p class="text-lg lg:text-xl italic">
            {{ profile.tagline }}
          </p>
        </div>

        <!-- Content Section -->
        <div class="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Personal Info -->
          <div>
            <h2 class="text-2xl font-bold text-white mb-4">
              Personal Details
            </h2>
            <ul class="space-y-2">
              <li>
                <strong>Email:</strong> <a
                  :href="`mailto:${profile.email}`"
                  class="text-blue-400 hover:text-blue-600"
                >{{ profile.email }}</a>
              </li>
              <li>
                <strong>Phone:</strong> <a
                  :href="`tel:${profile.phone}`"
                  class="text-blue-400 hover:text-blue-600"
                >{{ profile.phone }}</a>
              </li>
              <li>
                <strong>LinkedIn:</strong> <a
                  :href="profile.linkedin"
                  class="text-blue-400 hover:text-blue-600"
                >LinkedIn</a>
              </li>
              <li><strong>Location:</strong> {{ profile.location }}</li>
              <li><strong>Gender:</strong> {{ profile.gender }}</li>
            </ul>
          </div>

          <!-- Skills Section -->
          <div>
            <h2 class="text-2xl font-bold text-white mb-4">
              Skills
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
              Profile Summary
            </h2>
            <p class="leading-loose text-gray-300">
              {{ profile.summary }}
            </p>
          </div>

          <!-- Projects Section -->
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold text-white mb-4">
              Projects
            </h2>
            <div
              v-for="project in profile.projects"
              :key="project.name"
              class="mb-6 bg-gray-700 p-4 rounded-lg"
            >
              <h3 class="text-xl font-semibold text-white">
                {{ project.name }}
              </h3>
              <p class="text-gray-400">
                {{ project.description }}
              </p>
              <p class="mt-2">
                <strong>Technologies:</strong> {{ project.technologies }}
              </p>
            </div>
          </div>

          <!-- Employment History -->
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold text-white mb-4">
              Employment History
            </h2>
            <div
              v-for="job in profile.jobs"
              :key="job.company + job.title"
              class="mb-6 bg-gray-700 p-4 rounded-lg"
            >
              <h3 class="text-xl font-semibold text-white">
                {{ job.title }}
              </h3>
              <p class="text-gray-400">
                {{ job.company }} ({{ job.dates }})
              </p>
              <p class="mt-2 text-gray-300">
                {{ job.responsibilities }}
              </p>
              <p class="mt-2">
                <strong>Technologies:</strong> {{ job.languagesAndTechnologies.join(', ') }}
              </p>
            </div>
          </div>

          <!-- Education Section -->
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold text-white mb-4">
              Education
            </h2>
            <p class="text-gray-300">
              {{ profile.education }}
            </p>
          </div>

          <!-- Languages Section -->
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold text-white mb-4">
              Languages
            </h2>
            <p class="text-gray-300">
              {{ profile.languages }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
