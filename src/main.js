// const counters = document.querySelectorAll('.counter');

// counters.forEach((counter) => {
//   counter.innerText = '0';

//   const executeCountUp = () => {
//     const numberToCountTo = Number(counter.getAttribute('data-number'));
//     const count = Number(counter.innerText);
//     const increment = numberToCountTo / 360;

//     if (count < numberToCountTo) {
//       counter.innerText = Math.ceil(count + increment);
//       setTimeout(executeCountUp, 6);
//     }
//   };

//   executeCountUp();
// });

gsap.to('#counter10', { innerText: 10, duration: 2, snap: { innerText: 1 } });
gsap.to('#counter314', { innerText: 314, duration: 2, snap: { innerText: 2 } });
gsap.to('#counter12', { innerText: 12, duration: 2, snap: { innerText: 1 } });
