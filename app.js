const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('animate', entry.isIntersecting);
    // if (entry.isIntersecting) {
    //   entry.target.classList.add('animate');
    // } else {
    //   entry.target.classList.remove('animate');
    // }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
