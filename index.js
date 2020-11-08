class CountdownTimer{
  constructor(selector, targetDate) { 
    this.selector = selector;
    this.targetDate = new Date(targetDate);
  }

  startTimer() { 
      this.intrvalId = setInterval(() => {
      this.currentDate = new Date();
      this.differenceTime = this.targetDate - this.currentDate;  
      this.timeSetting(), this.timeChangeText();
      if (this.differenceTime < 0) {
        this.stopTimer();
      }  
    }, 1000);
  }

  timeSetting() { 
    this.days = Math.floor(this.differenceTime / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((this.differenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.mins = Math.floor((this.differenceTime % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((this.differenceTime % (1000 * 60)) / 1000);
  }  

  timeChangeText() {
    this.refs = {
      days: document.querySelector('[data-value=days]'),
      hours: document.querySelector('[data-value=hours]'),
      mins: document.querySelector('[data-value=mins]'),
      secs: document.querySelector('[data-value=secs]'),
    };

    this.refs.days.textContent = this.pad(this.days);
    this.refs.hours.textContent = this.pad(this.hours);
    this.refs.mins.textContent = this.pad(this.mins);
    this.refs.secs.textContent = this.pad(this.secs);
  }

   stopTimer() {
    clearInterval(this.intervalId);
    this.differenceTime = 0;
    this.timeSetting(this.differenceTime);
    this.timeChangeText(this.differenceTime);
  }

pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer(
  '#timer-1',
 'march 31, 2021',
);
 
timer.startTimer();