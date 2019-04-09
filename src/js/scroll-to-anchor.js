export default function scrollToAnchor() {
  const targetBuffer = 30;
  const elementsLinks = document.querySelectorAll('.js-scroll-to-anchor');

  elementsLinks.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();

      // Get target element and its position
      const elementTarget = document.querySelector(event.target.hash);
      const elementTargetPosition = window.pageYOffset + elementTarget.getBoundingClientRect().top;

      // Calculate scroll position
      const scrollPosition = elementTargetPosition - targetBuffer;

      // Scroll to position
      window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: 'smooth',
      });
    });
  });
}
