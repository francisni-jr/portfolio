<script type="text/javascript" charset="utf-8">
  import HomeLoader from '../loaders/HomeLoader.svelte'
</script>

<!--<HomeLoader  />-->

<main class="bg-is-main mt-[10vh] md:mt-0 md:px-60 ml-10 md:ml-0 px-10">
  <section
    id="top"
    class="h-[100vh] md:mt-60 mt-10 scroll-mt-10 text-onmain mx-auto flex flex-col rounded-t-lg mb-10">
    <div class="p-5 mx-auto font-header text-center">
      <h1>
        <span class="text-4xl">This is a</span>
        <div class=""></div>
        <br /> <span
          class="font-highlight underline text-4xl md:text-5xl text-onblock drop-shadow-lg animate-pulse duration-1000 delay-1000">
          software developer</span>
        <div class="pt-10"></div>
        <span class="text-4xl">Portfolio</span>
      </h1>
      <div class="divider pt-10"></div>
      <h2 class="text-1xl pt-10">
        Browse the website to get to know it
      </h2>
    </div>
  </section>
  <section id="welcome"
    class="scroll-mt-10 mt-auto bg-gradient-to-b from-is-block to-transparent text-onblock w-30 mx-auto w-full flex flex-col h-vh rounded-t-lg text-center">
    <h2 class="px-20 pt-20 p-5 font-header text-4xl">Hi👋🏼, Welcome to my <span
        class="font-highlight font-bold text-2xl">PORTFOLIO</span></h2>
    <h3 class="px-20 pb-20">
      This project is aimed at anyone who wants to know more <a class="text-onaction" href="#">about me</a> ( Francisní
      Jr ) or who wants to get involved in this or other <a class="text-onaction" href="#">projects</a> I have created.
      The header menu will be hidden to give you a better experience.
    </h3>
  </section>
  <section id="aboutme"
    class="scroll-mt-10 mt-auto bg-gradient-to-b from-is-block to-transparent text-onblock h-auto w-30 mx-auto w-full flex flex-col h-vh rounded-t-lg text-center">
    <h2 class="px-20 pt-20 p-5 font-header text-3xl">I'm
      <span
        class="font-highlight underline text-3xl text-onblock drop-shadow-lg animate-pulse duration-1000 delay-1000">Francisní</span>
      ,
      <br class="md:hidden" />
      <span class="font-header text-3xl">A software developer who loves what do</span>
    </h2>
    
    <div class="flex flex-wrap justify-center items-center mx-auto gap-5">
      <div class="">
        <p class="p-5 mt-10 text-3xl">Picture</p>
        <div class="avatar mx-auto h-30  w-30">
          <img src="https://res.cloudinary.com/dt2se4cle/image/upload/v1689804230/20230602_140608_3_lmcuky.jpg"
            alt="avatar" />
        </div>
      </div>
            <div class="">
        <p class="p-5 mt-10 text-3xl">Brand</p>
        <div class="avatar p-5 mx-auto h-30  w-30">
          <img src="https://res.cloudinary.com/dt2se4cle/image/upload/v1689629217/Brand/brand_symbolic_francisnijr_gfpve6.png"
            alt="avatar" />
        </div>
      </div>
    </div>
        <h3 class="px-20 py-20 pb-20 overflow-y-scroll">
      You can see my brand used like profile in social media or favicon in websites. It represents me and my work, So maybemaybe you see me around in a photo or in a logo, stay tuned. 
    </h3>
  </section>
  <section id="myexperience"
    class="scroll-mt-10 mt-10 bg-gradient-to-b from-is-block to-transparent text-onblock h-auto w-30 mx-auto w-full flex flex-col h-vh rounded-t-lg text-center">
    <h2 class="px-20 pt-20 p-5 font-header text-3xl">
      My specialty is the web and I have experience in other areas as well. But here I will touch only on what I am better.
    </h2>
    
    <div class="flex flex-wrap justify-center items-center mx-auto gap-5">
      <div class="">
        <p class="p-5 mt-10 text-3xl">Picture</p>
        <div class="avatar mx-auto h-30  w-30">
          <img src="https://res.cloudinary.com/dt2se4cle/image/upload/v1689804230/20230602_140608_3_lmcuky.jpg"
            alt="avatar" />
        </div>
      </div>
            <div class="">
        <p class="p-5 mt-10 text-3xl">Brand</p>
        <div class="avatar p-5 mx-auto h-30  w-30">
          <img src="https://res.cloudinary.com/dt2se4cle/image/upload/v1689629217/Brand/brand_symbolic_francisnijr_gfpve6.png"
            alt="avatar" />
        </div>
      </div>
    </div>
        <h3 class="px-20 py-20 pb-20 overflow-y-scroll">
      You can see my brand used like profile in social media or favicon in websites. It represents me and my work, So maybemaybe you see me around in a photo or in a logo, stay tuned. 
    </h3>
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