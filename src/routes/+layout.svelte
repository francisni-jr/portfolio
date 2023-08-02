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
      <div class="popover-content shadow-xl h-60 overflow-y-scroll mx-5 mt-30 absolute popover-right z-50 bg-is-block p-5 rounded-tl-lg">
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
              <a class="" href="/#myexperience">/#myexperience</a>
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
        <a href="/#myexperience">
          <div class="step-circle w-auto hover:shadow-[0_0_40px_yellow] bg-is-action text-onaction">
            <HashIcon size="20" />
          </div>
        </a>
        <span class="text-sm text-center">My <br class="md:hidden" /> Experience</span>
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
  <footer class="p-5 bg-is-main fixed bottom-0 right-0 flex flex-col justify-center items-center gap-5 border md:w-25 w-20 mx-5 md:mx-20 border-yellow ">
    <a class="text-onaction" href="https://github.com/francisni-jr">
      <GithubIcon size="30" class="" />
    </a>
    <a class="text-onaction" href="https://instagram.com/">
      <InstagramIcon size="30" class="" />
    </a>
    <p class="flex justify-center items-center">
      <details translate="no" class="flex flex-col justify-center items-center" >
        <summary>
          &copy
        </summary>
        <div class="flex flex-col justify-center items-center my-5">
        <span>F</span>
        <span>R</span>
        <span>A</span>
        <span>N</span>
        <span>C</span>
        <span>I</span>
        <span>S</span>
        <span>N</span>
        <span>Í</span>
        </div>
                <span class="mx-auto border-t w-full"></span>
                <div class="flex flex-col justify-center items-center my-5">
        <span>2</span>
        <span>0</span>
        <span>2</span>
        <span>3</span>
        </div>
      </details>
    </p>
  </footer>
</div>