<script type="text/javascript" charset="utf-8">
  import HomeLoader from '../loaders/HomeLoader.svelte'
  import { PlayIcon, SearchIcon } from 'svelte-feather-icons'
</script>

<HomeLoader  />

<main class="md:mt-0 md:px-60 ml-10 md:ml-0 px-10">
  <section id="start" class="h-vh mt-10 max-h-[100vh] scroll-mt-10 text-onmain mx-auto flex flex-col rounded-t-lg  mb-10">
    <div class="p-5 z-20 mx-auto font-header text-center">
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
    class="shadow-[0_0_10px_black] scroll-mt-10 mt-10 bg-is-block md:bg-gradient-to-b from-is-block to-transparent text-onblock w-30 mx-auto w-full flex flex-col h-[100vh] rounded-t-lg text-center">
    <h2 class="px-20 pt-20 p-5 font-header text-4xl">Hi👋🏼, Welcome to my <span
        class="font-highlight font-bold text-2xl">PORTFOLIO</span></h2>
    <h3 class="px-20 pb-20">
      This project is aimed at anyone who wants to know more <a class="text-onaction" href="#">about me</a> ( Francisní
      Jr ) or who wants to get involved in this or other <a class="text-onaction" href="/projects">projects</a> I have
      created.
    </h3>
    
  </section>
  <section id="aboutme"
    class="shadow-[0_0_10px_black] scroll-mt-10 mt-10 bg-is-block md:bg-gradient-to-b from-is-block to-transparent text-onblock w-30 mx-auto w-full flex flex-col h-[100vh] rounded-t-lg text-center">
    <h2 class="px-20 pt-20 p-5 font-header text-3xl">I'm
      <span
        class="font-highlight underline text-3xl text-onblock drop-shadow-lg animate-pulse duration-1000 delay-1000">Francisní</span>
      ,
      <br class="md:hidden" />
      <span class="font-header text-3xl">A software developer from last line</span>
    </h2>
    
    <div class="flex flex-wrap justify-center items-center mx-auto gap-5 overflow-y-scroll">
      <div class="">
        <p class="p-5 mt-5 text-3xl">Picture</p>
        <div class="avatar mx-auto h-30  w-30">
          <img src="https://res.cloudinary.com/dt2se4cle/image/upload/v1689804230/20230602_140608_3_lmcuky.jpg"
            alt="avatar" />
        </div>
      </div>
      <div class="">
        <p class="p-5 mt-5 text-3xl">Brand</p>
        <div class="avatar p-5 mx-auto h-30  w-30">
          <img
            src="https://res.cloudinary.com/dt2se4cle/image/upload/v1689629217/Brand/brand_symbolic_francisnijr_gfpve6.png"
            alt="avatar" />
        </div>
      </div>
      <h3 class="px-20 py-20 pb-20">
        You can see my brand used like profile in social media or favicon in websites. It represents me and my work, So
        maybemaybe you see me around in a photo or in a logo, stay tuned.
      </h3>
    </div>
    
  </section>
  <section id="myexperience"
    class="shadow-[0_0_10px_black] scroll-mt-10 mt-10 bg-is-block md:bg-gradient-to-b from-is-block to-transparent text-onblock w-30 mx-auto w-full flex flex-col h-[100vh] rounded-t-lg text-center">
    <p class="px-20 pt-20 p-5 ">
      My specialty is the web and I have experience in other areas as well. But here I will touch only on what I am
      better.
    </p>
    <h3 class="p-5 mx-20 font-header text-3xl">What I do?</h3>
    <div class="px-20 overflow-y-scroll">
      <p class="">At the moment I'm just doing individual hands-on projects, or helping other devs build their tools. I
        don't have a permanent job, my income is varied and my time is versatile. I am looking to evolve more into the
        mobile or hybrid development environment, but the web is my home and I will not stop applying it.
      </p>
    </div>
  </section>
    <section id="myknowledge"
    class="shadow-[0_0_10px_black] scroll-mt-10 mt-10 bg-is-block md:bg-gradient-to-b from-is-block to-transparent text-onblock w-30 mx-auto w-full flex flex-col h-[100vh] rounded-t-lg text-center">
    <h3 class="p-5 px-20 text-3xl overflow-y-scroll">My main tools and languages I've worked on so far:</h3>
    <div class="px-20 text-3xl text-header md:py-5">
      <div translate="no" class="flex justify-center items-center w-full flex-wrap sm:overflow-y-scroll">
        
        <i class="m-5 flex devicon-html5-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck" href="https://www.google.com/search?q=what+is+html5"><SearchIcon size="15"/>HTML</a></span>
        </i>
         <i class="m-5 flex devicon-css3-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck" href="https://www.google.com/search?q=what+is+css"><SearchIcon size="15"/>CSS</a></span>
        </i>
         <i class="m-5 flex devicon-javascript-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck" href="https://www.google.com/search?q=what+is+javascript"><SearchIcon size="15"/>JAVASCRIPT</a></span>
        </i>
         <i class="m-5 flex devicon-svelte-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck" href="https://www.google.com/search?q=what+is+sveltekit"><SearchIcon size="15"/>SVELTEKIT</a></span>
        </i>
         <i class="m-5 flex devicon-vuejs-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck" href="https://www.google.com/search?q=what+is+vuejs"><SearchIcon size="15"/>VUEJS</a></span>
        </i>
         <i class="m-5 flex devicon-nodejs-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck" href="https://www.google.com/search?q=what+is+nodejs"><SearchIcon size="15"/>NODEJS</a></span>
        </i>
         <i class="m-5 flex devicon-github-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck" href="https://www.google.com/search?q=what+is+git+and+github"><SearchIcon size="15"/>GITHUB&GIT</a></span>
        </i>
                 <i class="m-5 flex devicon-bulma-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck" href="https://www.google.com/search?q=what+is+bulmacss"><SearchIcon size="15"/>BULMA</a></span>
        </i>
         <i class="m-5 flex devicon-tailwindcss-plain">
          <span class="px-5"><a class="flex text-onaction items-center justify-center gap-px" target="_blanck" href="https://www.google.com/search?q=what+is+tailwindcss"><SearchIcon size="15"/>TAILWIND</a></span>
        </i>
        
        
        
      </div>
    </div>
  </section>
</main>

<style type="text/css" media="all">
  #sft-dvp {
    animation: sft-dvp-float 2s ease-in-out infinite;
  }
  
  @keyframes sft-dvp-float {
    from {
      transform: translateY(-50px);
      transform: scale(1.2);
    }
    
    to {
      transform: translateY(40px);
      transform: scale(1);
    }
  }
</style>