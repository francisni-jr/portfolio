<script>
  import '../app.postcss';
	import { ChevronDownIcon, HashIcon, Navigation2Icon, GithubIcon, InstagramIcon } from 'svelte-feather-icons'
	
	
</script>



<div id="app-lay" class="bg-is-main h-page font-general text-onmain">
  <header class="w-full flex items-start justify-center h-30 text-onblock">
    <div class="hidden">
      <label class="btn btn-action" for="modal-2">About this software</label>
      
      <input class="modal-state" id="modal-2" type="checkbox" />
      <div class="modal">
        <label class="modal-overlay" for="modal-2"></label>
        <div class="modal-content flex flex-col gap-5 max-w-3xl">
          <label for="modal-2" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
          <h2 class="text-xl">V0.0.0</h2>
          <span>This software (portfolio), had the first version released in july/00/00. You can take a look at the
            GitHub repository to analyze the source of the old versions. </span>
          <div class="flex gap-3">
            <button class="btn btn-error btn-block">Delete</button>
            <button class="btn btn-block">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <nav class="popover">
      <label
        class="popover-trigger w-30 flex items-center justify-center rounded-b-lg bg-is-action text-onaction mb-5 h-20"
        tabindex="0">
        <ChevronDownIcon size="20" />
      </label>
      <div class="popover-content md:mb-120 bg-is-block p-5" tabindex="0">
        <div style="z-index: -1;" class="popover-arrow mt-5 p-5 bg-is-block"></div>
        <div class="text-sm">
          <ul translate="no" class="pb-10 text-2xl p-5">
            <li style="word-wrap: break-word;" class="w-full rounded p-5 bg-is-action text-onaction">
              <a class="" href="/">/</a>
            </li>
            <li style="word-wrap: break-word;" class="w-full rounded p-5 bg-is-action mt-5 text-onaction">
              <a class="" href="#welcome">/#welcome</a>
            </li>
            <li style="word-wrap: break-word;" class="w-full rounded p-5 bg-is-action mt-5 text-onaction">
              <a class="" href="#aboutme">/#aboutme</a>
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
          <p class="text-is-warn border p-5 rounded ">
            <b class="">INFO</b>
            <br />
            <span>Click outside to close this menu</span>
          </p>
        </div>
      </div>
    </nav>
  </header>
  <aside class="fixed top-20 w-25 flex justify-center items-center flex flex-col gap-5 px-25">
    <p class="fixed top-20 mx-20 mt-20 right-0  py-5 w-25 bg-is-action flex justify-center items-center rounded-l-lg">
      <a class="text-onaction" href="/">
        <Navigation2Icon />
      </a>
    </p>
    <span href="#" class=" text-sm">/</span>
    <ol translate="no" class="steps steps-vertical">
      <li class="step">
        <a href="#welcome">
          <div class="step-circle w-auto hover:shadow-md bg-is-action text-onaction">
            <HashIcon size="20" />
          </div>
        </a>
        <span href="#" class=" text-sm">Welcome</span>
      </li>
      <li class="step">
        <a href="#test">
          <div class="step-circle w-auto hover:shadow-md bg-is-action text-onaction ">
            <HashIcon size="20" />
          </div>
        </a>
        <span href="#" class=" text-sm">About Me</span>
      </li>
      <li class="step">
        <a href="#">
          <div class="step-circle w-auto hover:shadow-md bg-is-action text-onaction">
            <HashIcon size="20" />
          </div>
        </a>
        <span href="#" class="text-sm">My Experience</span>
      </li>
      
    </ol>
  </aside>
  <slot />
  <footer class="p-5 bg-is-main fixed bottom-0 right-0 flex flex-col justify-center items-center gap-5 border w-25 mx-20 border-yellow ">
    <a class="text-onaction" href="#">
      <GithubIcon size="30" class="" />
    </a>
    <a class="text-onaction" href="#">
      <InstagramIcon size="30" class="" />
    </a>
    <p class="flex justify-center items-center">
      <details class="flex flex-col justify-center items-center" >
        <summary class="text-sm">
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