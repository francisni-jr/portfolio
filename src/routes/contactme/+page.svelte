<script type="text/javascript" charset="utf-8">
  import { PlayIcon, SearchIcon, InstagramIcon, MailIcon } from 'svelte-feather-icons'
</script>



<main class="md:mt-0 md:px-60 ml-10 md:ml-0 px-10">
  <section id="start" class="h-vh mt-10 max-h-[100vh] scroll-mt-10 text-onmain mx-auto flex flex-col rounded-t-lg  mb-10">
    <div class="p-5 z-20 mx-auto font-header text-center">
      
      <h1 class="text-4xl text my-10">
        options to contact me
      </h1>
      <ul class="bg-is-block px-20 rounded py-20 m-10 ">
        <span class="text-onblock">contact me by </span>
        <li class="mt-5 flex  flex-col gap-5">
          <a class="text-onaction hover:shadow bg-is-action p-5 flex justify-center items_center gap-5" href="mailto:francisnijr1.acc@gmail.com"><MailIcon/>GMAIL</a>
        </li>
        <li class="text-onblock flex  flex-col gap-5 mt-5">
          <a class="text-onaction hover:shadow bg-is-action p-5 flex justify-center items_center gap-5" href="https://instagram.com/francisnijr.acc?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"> <InstagramIcon/>INSTAGRAM</a>
        </li>
      </ul>
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
