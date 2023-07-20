<section id="loader" class="sshadow-b-lg bg-is-main absolute h-page top-0 w-screen flex items-start justify-center overflow-y-hidden z-40">
  <div class="skeleton h-full w-full flex items-start justify-center  ">
        
        <div class="loader-body mt-60 text-onblock p-10"></div>
                  <h2 class="absolute top-30 mx-auto text-onblock text-2xl font-header">Only a second, I'm writing this website...</h2>
  </div>

</section>

<style type="text/css" media="all">

  .loader-body {
  --size: 30px;
  --stroke-width: calc(var(--size) / 6);
  --color: currentColor;
  --animation-timing-function: linear;
  --animation-duration: 1s;
  position: relative;
  width: var(--size);
  height: var(--size);
  border-bottom: var(--stroke-width) solid var(--color);
}

.loader-body::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: calc(var(--stroke-width) / 2);
  left: 0;
  width: calc(var(--stroke-width) * 1.25);
  background-color: var(--color);
  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%);
  transform: translateX(0) rotate(10deg);
  animation: var(--animation-timing-function) var(--animation-duration) infinite loader-body-animation;
}

@keyframes loader-body-animation {
  0% {
    transform: translateX(0) rotate(10deg);
  }

  85% {
    transform: translateX(var(--size)) rotate(10deg);
  }

  100% {
    transform: translateX(0) rotate(10deg);
  }
}

    #loader {
    animation: fade 8s ease-in-out;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  @keyframes fade {
    0% {
      opacity: 1;
      height: 100%;
    }
    60% {
      opacity: 1;
      height: 100%;
    }
    100% {
      opacity: .8;
      height: 0%;
      border-radius: 0 0 50% 50%;
      margin-bottom: 2rem;
    }
  }

</style>