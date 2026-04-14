import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

let userSelectedDate = null;
let timerId = null;

startBtn.disabled = true;

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (userSelectedDate <= Date.now()) {
      startBtn.disabled = true;

      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
      });

      return;
    }

    startBtn.disabled = false;
  },
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;

  timerId = setInterval(() => {
    const currentTime = Date.now();
    const timeDiff = userSelectedDate - currentTime;

    if (timeDiff <= 0) {
      clearInterval(timerId);

      contentUpdate({ days: 0, hours: 0, minutes: 0, seconds: 0 });

      return;
    }
    input.disabled = true;

    contentUpdate(convertMs(timeDiff));
  }, 1000);
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function contentUpdate(time) {
  days.textContent = addLeadingZero(time.days);
  hours.textContent = addLeadingZero(time.hours);
  minutes.textContent = addLeadingZero(time.minutes);
  seconds.textContent = addLeadingZero(time.seconds);
}
