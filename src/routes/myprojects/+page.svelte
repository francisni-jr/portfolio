<script type="text/javascript" charset="utf-8">
  // import HomeLoader from '../loaders/HomeLoader.svelte'
  import { PlayIcon, SearchIcon, ArrowRightIcon, EyeOffIcon} from 'svelte-feather-icons'
</script>


<main class="md:mt-0 hidden md:px-60 ml-10 md:ml-0 px-10">
  <section id="start" class="max-h-vh h-vh w-full overflow-x-scroll mt-20 text-onmain mx-auto flex flex-col rounded-t-lg  mb-10">
    <div class="p-5 z-20 mx-auto font-header text-center flex flex-col justify-center items-center  flex-wrap">
      <h1>
        <span class="text-4xl">Get to know</span>
        <div class=""></div>
        <br /> <span
          class="font-highlight underline text-4xl md:text-5xl text-onblock drop-shadow-lg animate-pulse duration-1000 delay-1000">
          My projects in production</span>
        <div class="pt-10"></div>
        <span class="text-4xl">Here</span>
      </h1>
      <section class="p-20 mt-10 rounded-t-full bg-is-block">
        <img class="sm:h-30 mx-auto h-120" src="https://res.cloudinary.com/djglhdlln/image/upload/v1688410073/Logos/TypeMainLogoVertical_ivgmez.png" alt="project-image" />
               <a class="text-onaction t-20 text-1xl" href="https://gerastucter.site">https://gerastucter.site</a>
        <h2 class="font-highlight underline text-3xl md:text-5xl text-onblock drop-shadow-lg animate-pulse duration-1000 delay-1000">Gerastucter</h2>
        <p class="mt-10">GERASTUCTER is an anonymous project created by me, which is not yet officially available to search engines. I created Gerastucter in order to apply web knowledge with personal knowledge always researching well so as not to distribute fake news to users. Gerastucter project was created by me in June 2023, but it is by anonymous creation without declaring My/our name in any terms or guidelines. I get help from others always, and I post content often, but I prefer to keep the project anonymous in order to preserve the "brand" in all its aspects.  </p>
      </section>
            <section class="p-20 rounded-b-full my-10 bg-is-block scroll-mb-10">
              <p>I'll publish more here so soon</p>
      </section>
    </div>
  </section>
</main>

<section class="h-full w-full p-60">
  <h3 class="text-4xl text-hightlight mx-auto my-auto">
    Page in production, come here soon
  </h3>
  <EyeOffIcon size="40"/>
</section>

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