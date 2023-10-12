<script type="text/javascript" charset="utf-8">
  import HomeLoader from '../loaders/HomeLoader.svelte'
  import { PlayIcon, SearchIcon, ArrowUpIcon, ArrowDownIcon, GithubIcon,
  InstagramIcon, FastForwardIcon, ChevronsDownIcon, SunriseIcon, ZoomInIcon } from 'svelte-feather-icons'
</script>

<svelte:head>
  <title>Welcome to my Portfolio</title>
</svelte:head>

<!--<HomeLoader  />-->



<main class="md:mt-0 md:px-60 ml-10 md:ml-0 px-10">
  <section id="start"
    class="h-vh mt-10 max-h-[100vh] relative scroll-mt-10 text-onmain mx-auto flex flex-col rounded-t-lg  mb-10">
    
    <div
      class="p-5 bg-building absolute bottom-0 right-0 z-40 flex flex-col justify-center items-center gap-5 md:w-25 w-20 mx-5 mb-10 md:mx-20">
      <a class="text-onaction" href="https://github.com/francisni-jr">
        <GithubIcon size="30" class="" />
      </a>
      <a class="text-onaction" href="https://instagram.com/">
        <InstagramIcon size="30" class="" />
      </a>
      <div class="flex justify-center items-center">
        <span class="tooltip tooltip-left" data-tooltip="FRANCISNÍ - 2023">
          <button class="text-onaction">&copy</button>
        </span>
      </div>
    </div>
    
    <svg class="absolute bottom-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#273036" fill-opacity="1"
        d="M0,256L0,224L49.7,224L49.7,192L99.3,192L99.3,32L149,32L149,128L198.6,128L198.6,192L248.3,192L248.3,160L297.9,160L297.9,192L347.6,192L347.6,32L397.2,32L397.2,288L446.9,288L446.9,192L496.6,192L496.6,192L546.2,192L546.2,224L595.9,224L595.9,256L645.5,256L645.5,224L695.2,224L695.2,96L744.8,96L744.8,128L794.5,128L794.5,96L844.1,96L844.1,256L893.8,256L893.8,288L943.4,288L943.4,32L993.1,32L993.1,320L1042.8,320L1042.8,96L1092.4,96L1092.4,96L1142.1,96L1142.1,96L1191.7,96L1191.7,160L1241.4,160L1241.4,256L1291,256L1291,224L1340.7,224L1340.7,64L1390.3,64L1390.3,128L1440,128L1440,320L1390.3,320L1390.3,320L1340.7,320L1340.7,320L1291,320L1291,320L1241.4,320L1241.4,320L1191.7,320L1191.7,320L1142.1,320L1142.1,320L1092.4,320L1092.4,320L1042.8,320L1042.8,320L993.1,320L993.1,320L943.4,320L943.4,320L893.8,320L893.8,320L844.1,320L844.1,320L794.5,320L794.5,320L744.8,320L744.8,320L695.2,320L695.2,320L645.5,320L645.5,320L595.9,320L595.9,320L546.2,320L546.2,320L496.6,320L496.6,320L446.9,320L446.9,320L397.2,320L397.2,320L347.6,320L347.6,320L297.9,320L297.9,320L248.3,320L248.3,320L198.6,320L198.6,320L149,320L149,320L99.3,320L99.3,320L49.7,320L49.7,320L0,320L0,320Z">
      </path>
    </svg>
    
    
    <div class="p-5 z-20 mx-auto font-header text-center ">
      <h1>
        <span class="text-4xl">This is a</span>
        <div class=""></div>
        <br /> <span
          class="font-highlight underline text-4xl md:text-5xl text-onblock drop-shadow-lg animate-pulse duration-1000 delay-1000">
          software developer</span>
        <div class="pt-10"></div>
        <span class="text-4xl">Portfolio</span>
      </h1>
      
      <div class="divider flex items-end justify-end pt-10">
        
      </div>
      
      <h2 class="text-1xl mt-10">
        Browse the website to get to know it
      </h2>
    </div>
    
    
    
  </section>
  <section id="welcome"
    class="scroll-mt-10 mt-10  to-transparent relative text-onblock w-30 mx-auto w-full flex flex-col h-[100vh] rounded-tl-full text-center">
    
    <div
      class="p-5 bg-building absolute bottom-0 right-0 z-40 flex flex-col justify-center items-center gap-5 md:w-25 w-20 mx-5 mb-10 md:mx-20">
      <a class="text-onaction" href="https://github.com/francisni-jr">
        <GithubIcon size="30" class="" />
      </a>
      <a class="text-onaction" href="https://instagram.com/">
        <InstagramIcon size="30" class="" />
      </a>
      <div class="flex justify-center items-center text-sm">
        <span class="tooltip tooltip-left" data-tooltip="FRANCISNÍ - 2023">
          <button class="text-onaction">&copy</button>
        </span>
      </div>
    </div>
    
    <svg class="absolute bottom-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#273036" fill-opacity="1"
        d="M0,256L0,224L49.7,224L49.7,192L99.3,192L99.3,32L149,32L149,128L198.6,128L198.6,192L248.3,192L248.3,160L297.9,160L297.9,192L347.6,192L347.6,32L397.2,32L397.2,288L446.9,288L446.9,192L496.6,192L496.6,192L546.2,192L546.2,224L595.9,224L595.9,256L645.5,256L645.5,224L695.2,224L695.2,96L744.8,96L744.8,128L794.5,128L794.5,96L844.1,96L844.1,256L893.8,256L893.8,288L943.4,288L943.4,32L993.1,32L993.1,320L1042.8,320L1042.8,96L1092.4,96L1092.4,96L1142.1,96L1142.1,96L1191.7,96L1191.7,160L1241.4,160L1241.4,256L1291,256L1291,224L1340.7,224L1340.7,64L1390.3,64L1390.3,128L1440,128L1440,320L1390.3,320L1390.3,320L1340.7,320L1340.7,320L1291,320L1291,320L1241.4,320L1241.4,320L1191.7,320L1191.7,320L1142.1,320L1142.1,320L1092.4,320L1092.4,320L1042.8,320L1042.8,320L993.1,320L993.1,320L943.4,320L943.4,320L893.8,320L893.8,320L844.1,320L844.1,320L794.5,320L794.5,320L744.8,320L744.8,320L695.2,320L695.2,320L645.5,320L645.5,320L595.9,320L595.9,320L546.2,320L546.2,320L496.6,320L496.6,320L446.9,320L446.9,320L397.2,320L397.2,320L347.6,320L347.6,320L297.9,320L297.9,320L248.3,320L248.3,320L198.6,320L198.6,320L149,320L149,320L99.3,320L99.3,320L49.7,320L49.7,320L0,320L0,320Z">
      </path>
    </svg>
    
    <h2 class="px-20 pt-20 p-5 font-header text-2xl">Hi👋🏼, Welcome to my
      <span class="font-highlight underline text-2xl text-onblock drop-shadow-lg
      animate-pulse duration-1000 delay-1000">Portfolio</span>
    </h2>
    <h3 class="px-20 pb-20">
      This project is aimed at anyone who wants to know more <a class="text-onaction" href="#">about me</a> ( Francisní
      Jr ) or who wants to get involved in this or other <a class="text-onaction" href="/projects">projects</a> I have
      created.
    </h3>
    
    
  </section>
  <section id="aboutme" class=" 
    scroll-mt-10 mt-10 relative text-onblock w-30 mx-auto w-full flex flex-col h-[100vh] rounded-t-lg text-center">
    
    <div
      class="p-5 bg-building absolute bottom-0 right-0 z-40 flex flex-col justify-center items-center gap-5 md:w-25 w-20 mx-5 mb-10 md:mx-20">
      <a class="text-onaction" href="https://github.com/francisni-jr">
        <GithubIcon size="30" class="" />
      </a>
      <a class="text-onaction" href="https://instagram.com/">
        <InstagramIcon size="30" class="" />
      </a>
      <div class="flex justify-center items-center text-sm">
        <span class="tooltip tooltip-left" data-tooltip="FRANCISNÍ - 2023">
          <button class="text-onaction">&copy</button>
        </span>
      </div>
    </div>
    
    <svg class="absolute bottom-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#273036" fill-opacity="1"
        d="M0,256L0,224L49.7,224L49.7,192L99.3,192L99.3,32L149,32L149,128L198.6,128L198.6,192L248.3,192L248.3,160L297.9,160L297.9,192L347.6,192L347.6,32L397.2,32L397.2,288L446.9,288L446.9,192L496.6,192L496.6,192L546.2,192L546.2,224L595.9,224L595.9,256L645.5,256L645.5,224L695.2,224L695.2,96L744.8,96L744.8,128L794.5,128L794.5,96L844.1,96L844.1,256L893.8,256L893.8,288L943.4,288L943.4,32L993.1,32L993.1,320L1042.8,320L1042.8,96L1092.4,96L1092.4,96L1142.1,96L1142.1,96L1191.7,96L1191.7,160L1241.4,160L1241.4,256L1291,256L1291,224L1340.7,224L1340.7,64L1390.3,64L1390.3,128L1440,128L1440,320L1390.3,320L1390.3,320L1340.7,320L1340.7,320L1291,320L1291,320L1241.4,320L1241.4,320L1191.7,320L1191.7,320L1142.1,320L1142.1,320L1092.4,320L1092.4,320L1042.8,320L1042.8,320L993.1,320L993.1,320L943.4,320L943.4,320L893.8,320L893.8,320L844.1,320L844.1,320L794.5,320L794.5,320L744.8,320L744.8,320L695.2,320L695.2,320L645.5,320L645.5,320L595.9,320L595.9,320L546.2,320L546.2,320L496.6,320L496.6,320L446.9,320L446.9,320L397.2,320L397.2,320L347.6,320L347.6,320L297.9,320L297.9,320L248.3,320L248.3,320L198.6,320L198.6,320L149,320L149,320L99.3,320L99.3,320L49.7,320L49.7,320L0,320L0,320Z">
      </path>
    </svg>
    
    
    
    <h2 class="px-20 p-5 font-header text-2xl">I'm
      <span
        class="font-highlight underline text-2xl text-onblock drop-shadow-lg animate-pulse duration-1000 delay-1000">Francisní</span>
      ,
      <br class="md:hidden" />
      <span class="font-header text-2xl">A frontend software dev</span>
    </h2>
          <div class="popover w-full my-5">
        <label class="popover-trigger w-full flex justify-center items-center
        mb-5" tabindex="0">          <ZoomInIcon
        class="text-onaction" size="30" /></label>
        <div class="popover-content bg-is-main sm:popover-top-center
        popover-bottom-center " tabindex="0">
          <div class="popover-arrow bg-is-main"></div>
          <div class="p-4 text-sm text-black">
            I stay on the web only a year ago, but I have a nice experience in projects and startups. I am flattered to have
        you know me here, it would be a pleasure to talk to people interested in my person. If you want to know more
        about me, take a look at my curriculum 😊
     
          </div>
        </div>
      </div>
    
    <div class="flex flex-col justify-center items-center mx-auto gap-5
">
      <div class="flex flex-col justify-center items-center">
        <div class="avatar mx-auto h-30  w-30">
          <img src="https://res.cloudinary.com/dt2se4cle/image/upload/v1689804230/20230602_140608_3_lmcuky.jpg"
            alt="avatar" />
        </div>
      </div>
      </div>
    
  </section>
  <section id="mycurriculum"
    class="scroll-mt-10 mt-10 relative text-onblock w-30 mx-auto w-full flex flex-col h-[100vh] rounded-t-lg text-center">
    
        <div
      class="p-5 bg-building absolute bottom-0 right-0 z-40 flex flex-col justify-center items-center gap-5 md:w-25 w-20 mx-5 mb-10 md:mx-20">
      <a class="text-onaction" href="https://github.com/francisni-jr">
        <GithubIcon size="30" class="" />
      </a>
      <a class="text-onaction" href="https://instagram.com/">
        <InstagramIcon size="30" class="" />
      </a>
      <div class="flex justify-center items-center text-sm">
        <span class="tooltip tooltip-left" data-tooltip="FRANCISNÍ - 2023">
          <button class="text-onaction">&copy</button>
        </span>
      </div>
    </div>
    
    <svg class="absolute bottom-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#273036" fill-opacity="1"
        d="M0,256L0,224L49.7,224L49.7,192L99.3,192L99.3,32L149,32L149,128L198.6,128L198.6,192L248.3,192L248.3,160L297.9,160L297.9,192L347.6,192L347.6,32L397.2,32L397.2,288L446.9,288L446.9,192L496.6,192L496.6,192L546.2,192L546.2,224L595.9,224L595.9,256L645.5,256L645.5,224L695.2,224L695.2,96L744.8,96L744.8,128L794.5,128L794.5,96L844.1,96L844.1,256L893.8,256L893.8,288L943.4,288L943.4,32L993.1,32L993.1,320L1042.8,320L1042.8,96L1092.4,96L1092.4,96L1142.1,96L1142.1,96L1191.7,96L1191.7,160L1241.4,160L1241.4,256L1291,256L1291,224L1340.7,224L1340.7,64L1390.3,64L1390.3,128L1440,128L1440,320L1390.3,320L1390.3,320L1340.7,320L1340.7,320L1291,320L1291,320L1241.4,320L1241.4,320L1191.7,320L1191.7,320L1142.1,320L1142.1,320L1092.4,320L1092.4,320L1042.8,320L1042.8,320L993.1,320L993.1,320L943.4,320L943.4,320L893.8,320L893.8,320L844.1,320L844.1,320L794.5,320L794.5,320L744.8,320L744.8,320L695.2,320L695.2,320L645.5,320L645.5,320L595.9,320L595.9,320L546.2,320L546.2,320L496.6,320L496.6,320L446.9,320L446.9,320L397.2,320L397.2,320L347.6,320L347.6,320L297.9,320L297.9,320L248.3,320L248.3,320L198.6,320L198.6,320L149,320L149,320L99.3,320L99.3,320L49.7,320L49.7,320L0,320L0,320Z">
      </path>
    </svg>
    
    
    Comming soon...
    
  </section>
  <section id="myknowledge"
    class="scroll-mt-10 mt-10 relative text-onblock w-30 mx-auto w-full flex flex-col h-[100vh] rounded-t-lg text-center">
    
        <div
      class="p-5 bg-building absolute bottom-0 right-0 z-40 flex flex-col justify-center items-center gap-5 md:w-25 w-20 mx-5 mb-10 md:mx-20">
      <a class="text-onaction" href="https://github.com/francisni-jr">
        <GithubIcon size="30" class="" />
      </a>
      <a class="text-onaction" href="https://instagram.com/">
        <InstagramIcon size="30" class="" />
      </a>
      <div class="flex justify-center items-center text-sm">
        <span class="tooltip tooltip-left" data-tooltip="FRANCISNÍ - 2023">
          <button class="text-onaction">&copy</button>
        </span>
      </div>
    </div>
    
    <svg class="absolute bottom-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#273036" fill-opacity="1"
        d="M0,256L0,224L49.7,224L49.7,192L99.3,192L99.3,32L149,32L149,128L198.6,128L198.6,192L248.3,192L248.3,160L297.9,160L297.9,192L347.6,192L347.6,32L397.2,32L397.2,288L446.9,288L446.9,192L496.6,192L496.6,192L546.2,192L546.2,224L595.9,224L595.9,256L645.5,256L645.5,224L695.2,224L695.2,96L744.8,96L744.8,128L794.5,128L794.5,96L844.1,96L844.1,256L893.8,256L893.8,288L943.4,288L943.4,32L993.1,32L993.1,320L1042.8,320L1042.8,96L1092.4,96L1092.4,96L1142.1,96L1142.1,96L1191.7,96L1191.7,160L1241.4,160L1241.4,256L1291,256L1291,224L1340.7,224L1340.7,64L1390.3,64L1390.3,128L1440,128L1440,320L1390.3,320L1390.3,320L1340.7,320L1340.7,320L1291,320L1291,320L1241.4,320L1241.4,320L1191.7,320L1191.7,320L1142.1,320L1142.1,320L1092.4,320L1092.4,320L1042.8,320L1042.8,320L993.1,320L993.1,320L943.4,320L943.4,320L893.8,320L893.8,320L844.1,320L844.1,320L794.5,320L794.5,320L744.8,320L744.8,320L695.2,320L695.2,320L645.5,320L645.5,320L595.9,320L595.9,320L546.2,320L546.2,320L496.6,320L496.6,320L446.9,320L446.9,320L397.2,320L397.2,320L347.6,320L347.6,320L297.9,320L297.9,320L248.3,320L248.3,320L198.6,320L198.6,320L149,320L149,320L99.3,320L99.3,320L49.7,320L49.7,320L0,320L0,320Z">
      </path>
    </svg>
    <div class="px-20 my-auto text-3xl text-header md:py-5">
      <div translate="no" class="flex justify-center items-center w-full flex-wrap sm:overflow-y-scroll">
        
        <i class="m-5 flex devicon-html5-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck"
              href="https://www.google.com/search?q=what+is+html5">
              <SearchIcon size="15" />HTML
            </a></span>
        </i>
        <i class="m-5 flex devicon-css3-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck"
              href="https://www.google.com/search?q=what+is+css">
              <SearchIcon size="15" />CSS
            </a></span>
        </i>
        <i class="m-5 flex devicon-javascript-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck"
              href="https://www.google.com/search?q=what+is+javascript">
              <SearchIcon size="15" />JAVASCRIPT
            </a></span>
        </i>
        <i class="m-5 flex devicon-svelte-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck"
              href="https://www.google.com/search?q=what+is+sveltekit">
              <SearchIcon size="15" />SVELTEKIT
            </a></span>
        </i>
        <i class="m-5 flex devicon-vuejs-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck"
              href="https://www.google.com/search?q=what+is+vuejs">
              <SearchIcon size="15" />VUEJS
            </a></span>
        </i>
        <i class="m-5 flex devicon-nodejs-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck"
              href="https://www.google.com/search?q=what+is+nodejs">
              <SearchIcon size="15" />NODEJS
            </a></span>
        </i>
        <i class="m-5 flex devicon-github-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck"
              href="https://www.google.com/search?q=what+is+git+and+github">
              <SearchIcon size="15" />GITHUB&GIT
            </a></span>
        </i>
        <i class="m-5 flex devicon-bulma-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck"
              href="https://www.google.com/search?q=what+is+bulmacss">
              <SearchIcon size="15" />BULMA
            </a></span>
        </i>
        <i class="m-5 flex devicon-tailwindcss-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck"
              href="https://www.google.com/search?q=what+is+tailwindcss">
              <SearchIcon size="15" />TAILWIND
            </a></span>
        </i>
        
        
        
      </div>
    </div>
  </section>
</main>