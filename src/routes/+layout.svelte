<script>
  import '../app.postcss';
	import { ChevronDownIcon, GridIcon, HashIcon, Navigation2Icon, GithubIcon, InstagramIcon } from 'svelte-feather-icons'
	
</script>


<div id="app-lay" class="bg-gradient-to-b from-is-main via-is-main to-is-block h-page font-general text-onmain break-words overflow-x-scroll max-h-vh overflow-y-hidden
">
    <nav class="popover fixed z-40 top-0 left-0">
      <label
        class="popover-trigger hover:shadow-[0_0_40px_yellow] w-25 h-25 flex items-start justify-start rounded-br-[100%] bg-is-action text-onaction mb-5 h-20"
        tabIndex="50"
        >
        <GridIcon size="60" class="p-5" />
      </label>
      <div class="popover-content  shadow-xl h-60 overflow-y-scroll mx-5 mt-30 absolute popover-right z-50 bg-is-block p-5 rounded-tl-lg">
        <div class="text-sm">
          <p class="text-is-warn border p-5 rounded ">
            <b class="">INFO</b>
            <br />
            <span>Click outside to close this menu</span>
          </p>
          <ul translate="no" class="text-2xl p-5">
            <p translate="yes" class="mx-auto text-onblock">PAGES | SCROLL DOWN</p>
            <ChevronDownIcon class="mx-auto text-onblock mb-10" size="20" />
            <li style="word-wrap: break-word;" class="w-full rounded p-5 bg-is-action text-onaction">
              <a class="" href="/#start">/</a>
            </li>
            <li style="word-wrap: break-word;" class="w-full rounded p-5 bg-is-action mt-5 text-onaction">
              <a class="" href="/#aboutme">/#aboutme</a>
            </li>
            <li style="word-wrap: break-word;" class="w-full rounded p-5 bg-is-action mt-5 text-onaction">
              <a class="" href="/#mycurriculum">/#mycurriculum</a>
            </li>
            <li style="word-wrap: break-word;" class="w-full rounded p-5 bg-is-action mt-5 text-onaction">
              <a class="" href="/myprojects">/myprojects</a>
            </li>
            <li style="word-wrap: break-word;" class="w-full rounded p-5 bg-is-action mt-5 text-onaction">
              <a class="" href="/contactme">/contactme</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="brand absolute top-0 right-0 drop-shadow-xl m-[5px] mx-auto">
        <div class="mx-auto h-25 w-25">
          <img src="https://res.cloudinary.com/dt2se4cle/image/upload/v1696983171/brand_unic_png_plyt5u.png"
            alt="avatar" />
        </div>
    </div>
  <aside class="fixed top-20 w-5 md:w-25 flex justify-center items-center md:h-full h-screen bg-transparent flex flex-col gap-5 px-10 md:px-25">
    <p style="padding:8px;" class="">
      <a class="text-onaction" href="/#start">
        <Navigation2Icon />
      </a>
    </p>
    <ol translate="no" class="steps steps-vertical">
      <li class="step">
        <a href="/#welcome">
          <div class="step-circle w-auto hover:shadow-[0_0_40px_yellow] bg-is-action text-onaction">
            <HashIcon size="20" />
          </div>
        </a>
        <span class=" text-sm">Welcome</span>
      </li>
      <li class="step">
        <a href="/#aboutme">
          <div class="step-circle hover:shadow-[0_0_40px_yellow] w-auto bg-is-action text-onaction ">
            <HashIcon size="20" />
          </div>
        </a>
        <span class=" text-sm">About Me</span>
      </li>
      <li class="step">
        <a href="/#mycurriculum">
          <div class="step-circle w-auto hover:shadow-[0_0_40px_yellow] bg-is-action text-onaction">
            <HashIcon size="20" />
          </div>
        </a>
        <span class="text-sm text-center">My <br class="md:hidden" />CV</span>
      </li>
            <li class="step">
        <a href="/#myknowledge">
          <div class="step-circle w-auto hover:shadow-[0_0_40px_yellow] bg-is-action text-onaction">
            <HashIcon size="20" />
          </div>
        </a>
        <span class="text-sm text-center">My <br class="md:hidden" /> Knowledge</span>
      </li>
    </ol>
  </aside>
  <slot />
<!--  <footer class="p-5 bg-building fixed bottom-0 right-0 z-40 flex flex-col justify-center items-center gap-5 md:w-25 w-20 mx-5 mb-10 md:mx-20">-->
<!--    <a class="text-onaction" href="https://github.com/francisni-jr">-->
<!--      <GithubIcon size="30" class="" />-->
<!--    </a>-->
<!--    <a class="text-onaction" href="https://instagram.com/">-->
<!--      <InstagramIcon size="30" class="" />-->
<!--    </a>-->
<!--    <div class="flex justify-center items-center">-->
<!--      <span class="tooltip tooltip-left" data-tooltip="FRANCISNÍ - 2023">-->
<!--	<button class="text-onaction">&copy</button>-->
<!--</span>-->
<!--    </div>-->
<!--  </footer>-->
</div>