<template>
    <div class="flex flex-col items-center justify-center">
      <div class="bg-gray-900 w-full h-40 flex flex-row text-white items-center justify-between">
        <div class="ml-4 md:ml-8 lg:ml-16">
          <span>SkillsWapp Logo</span>
        </div>
  
        <nav class="flex md:justify-center items-center">
          <ul class="flex flex-row gap-5 text-xl">
            <li class="hidden sm:block">Home</li>
            <li class="hidden sm:block">Services</li>
            <li class="hidden sm:block">Projects</li>
          </ul>
        </nav>
  
        <div class="mr-4 md:mr-8 lg:mr-16 flex flex-row gap-4">
          <button>
            <img class="rounded-full" src="https://via.placeholder.com/32" alt="Search Bar" />
          </button>
          <button>
            <img class="rounded-full" src="https://via.placeholder.com/32" alt="SkillsWapp Logo" />
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  @media screen and (max-width: 768px) {
    .ml-4.md\:ml-8.lg\:ml-16,
    .mr-4.md\:mr-8.lg\:mr-16 {
      display: none;
    }
  
    .hidden.sm\:block {
      display: block;
    }
  
    .flex.md\:justify-center {
      justify-content: center;
    }
  }
  </style>
  