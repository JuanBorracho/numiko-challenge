const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const executeCountUp = () => {
    const numberToCountTo = Number(counter.getAttribute('data-number'));
    const count = Number(counter.innerText);
    const increment = numberToCountTo / 360;

    if (count < numberToCountTo) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(executeCountUp, 6);
    }
  };

  executeCountUp();
});
