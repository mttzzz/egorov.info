// i18n.config.ts

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      // General
      name: 'Kirill Egorov',
      gender: 'Male',
      location: 'Minsk',
      locationLabel: 'Location',
      languagesSpoken: 'English, Russian',

      // Sections
      personalDetails: 'Personal Details',
      email: 'Email',
      phone: 'Phone',
      linkedin: 'LinkedIn',
      genderLabel: 'Gender',
      skills: 'Skills',
      profileSummary: 'Profile Summary',
      projects: 'Projects',
      employmentHistory: 'Employment History',
      education: 'Education',
      languages: 'Languages',
      technologiesLabel: 'Technologies',
      languageSwitcher: 'Switch Language',

      // Content
      profileSummaryText: `I am a skilled creative software engineer with a strong passion for quality and leadership skills. 9+ years of professional experience in the software industry under various technologies. Full-cycle creation and development of architectural solutions for several business streams from the idea to ready market products. Preparing and presenting technical solutions for new features, products, processes, and improvements/rewrites for existing products and processes. My key strength is the ability to tame the chaos of software engineering, and my background allows me to have an infinite range of creative approaches to do just that. I am also exceptionally good at explaining concepts I understand and interpreting what people say.`,

      educationDetails: 'Belarusian State University; Faculty of Law, Taxes and Banks (2000 - 2005)',

      // Projects
      projectsSection: [
        {
          name: 'Widget for Generating Documents in amoCRM',
          description: `The purpose was to create a widget for the amoCRM system that allows you to connect a Google account and both generate documents using templates and upload external files. Enables you to view files directly inside amoCRM and perform operations on them (CRUD).`,
        },
        {
          name: 'chatgpt.pushka.biz',
          description: `The purpose was to create a web application for convenient communication with neural networks from OpenAI, Anthropic, and image generation via Midjourney and Stable Diffusion (Fooocus).`,
        },
      ],

      // Employment History
      employmentHistoryData: [
        {
          title: 'CTO, Fullstack Developer',
          company: 'Easy Standart, Belarus',
          dates: 'Mar 2016 - Present',
          responsibilities: `Communication with customers; Business logic analysis; Development of a full solution architecture and the technology stack; Requirements gathering, clarification, and analysis; Design creation; Task formulation; Quality control; Development of the site management system on PHP/MySQL.`,
        },
        {
          title: 'Fullstack Developer',
          company: 'Freelance, Belarus',
          dates: 'Oct 2016 - Present',
          responsibilities: `Requirements gathering, clarification, and analysis; Increased functionality and development of new features; Quality control; HTML coding; API development; Processing and development of algorithms for storing a large number of audio files; Implemented functionality for detecting author, album, year of release of the uploaded track; Set up development processes on the project; Task distribution; Customer communication.`,
        },
        {
          title: 'DevOps Engineer',
          company: 'Freelance, Belarus',
          dates: 'Sep 2020 - Present',
          responsibilities: `Creating and configuring CI/CD infrastructure; Creating scripts for managing and deploying infrastructure; Researching and creating Proof of Concepts for deploying production/staging/development infrastructure.`,
        },
      ],
    },
    ru: {
      // General
      name: 'Кирилл Егоров',
      gender: 'Мужской',
      locationLabel: 'Местоположение',
      location: 'Минск',
      languagesSpoken: 'Английский, Русский',

      // Sections
      personalDetails: 'Личные данные',
      email: 'Электронная почта',
      phone: 'Телефон',
      linkedin: 'LinkedIn',
      genderLabel: 'Пол',
      skills: 'Навыки',
      profileSummary: 'Резюме',
      projects: 'Проекты',
      employmentHistory: 'Опыт работы',
      education: 'Образование',
      languages: 'Языки',
      technologiesLabel: 'Технологии',
      languageSwitcher: 'Сменить язык',

      // Content
      profileSummaryText: `Я опытный креативный инженер-программист с сильной страстью к качеству и лидерскими навыками. Более 9 лет профессионального опыта в индустрии программного обеспечения под различными технологиями. Полный цикл создания и разработки архитектурных решений для нескольких бизнес-направлений от идеи до готовых рыночных продуктов. Подготовка и представление технических решений для новых функций, продуктов, процессов и улучшений/переписываний для существующих продуктов и процессов. Моя ключевая сила — способность укротить хаос инженерии программного обеспечения, и мой опыт позволяет мне иметь бесконечный диапазон творческих подходов для этого. Я также исключительно хорошо объясняю концепции, которые понимаю, и интерпретирую то, что говорят люди.`,

      educationDetails: 'Белорусский государственный университет; Факультет права, налоги и банки (2000 - 2005)',

      // Projects
      projectsSection: [
        {
          name: 'Виджет для генерации документов в amoCRM',
          description: `Цель состояла в создании виджета для системы amoCRM, который позволяет подключить учетную запись Google и как генерировать документы с использованием шаблонов, так и загружать внешние файлы. Позволяет просматривать файлы непосредственно внутри amoCRM и выполнять операции над ними (CRUD).`,
        },
        {
          name: 'chatgpt.pushka.biz',
          description: `Цель состояла в создании веб-приложения для удобного общения с нейронными сетями от OpenAI, Anthropic и генерации изображений через Midjourney и Stable Diffusion (Fooocus).`,
        },
      ],

      // Employment History
      employmentHistoryData: [
        {
          title: 'Технический директор, Fullstack разработчик',
          company: 'Easy Standart, Беларусь',
          dates: 'Март 2016 - настоящее время',
          responsibilities: `Общение с клиентами; Анализ бизнес-логики; Разработка полной архитектуры решения и технологического стека; Сбор требований, уточнение и анализ; Создание дизайна; Формулирование задач; Контроль качества; Разработка системы управления сайтом на PHP/MySQL.`,
        },
        {
          title: 'Fullstack разработчик',
          company: 'Фриланс, Беларусь',
          dates: 'Октябрь 2016 - настоящее время',
          responsibilities: `Сбор требований, уточнение и анализ; Увеличение функциональности и разработка новых функций; Контроль качества; HTML-кодирование; Разработка API; Обработка и разработка алгоритмов для хранения большого количества аудиофайлов; Реализация функциональности для определения автора, альбома, года выпуска загруженного трека; Настройка процессов разработки на проекте; Распределение задач; Общение с клиентом.`,
        },
        {
          title: 'Инженер DevOps',
          company: 'Фриланс, Беларусь',
          dates: 'Сентябрь 2020 - настоящее время',
          responsibilities: `Создание и настройка инфраструктуры CI/CD; Создание скриптов для управления и развертывания инфраструктуры; Исследование и создание Proof of Concepts для развертывания инфраструктуры для production/staging/development.`,
        },
      ],
    },
  },
}))
