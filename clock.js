class Clock {
  constructor() {
    // 1. Create a Date object.
    let date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.seconds = date.getSeconds();
    this.minutes = date.getMinutes();
    this.hours = date.getHours();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.  
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    const formatTime = `${this.hours}:${this.minutes}:${this.seconds}`;
    // Use console.log to print it.
    console.log(formatTime);
  }

  _tick() {
    // 1. Increment the time by one second.
    this.seconds += 1;
    if (this.seconds === 60) {
      this.minutes += 1;
      this.seconds = 0;
    }
    if (this.minutes === 60) {
      this.hours += 1;
      this.minutes = 0;
    }
    
    // 2. Call printTime.
    this.printTime();
  }
}

const clock = new Clock();