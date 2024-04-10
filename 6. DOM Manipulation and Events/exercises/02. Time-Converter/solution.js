function attachEventsListeners() {
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', () => {
        hoursInput.value = daysInput.value * 24;
        minutesInput.value = daysInput.value * 1440;
        secondsInput.value = daysInput.value * 86400;
    });

    hoursBtn.addEventListener('click', () => {
        daysInput.value = hoursInput.value / 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = hoursInput.value * 3600;
    });

    minutesBtn.addEventListener('click', () => {
        daysInput.value = minutesInput.value / 1440;
        hoursInput.value = minutesInput.value / 60;
        secondsInput.value = minutesInput.value * 60;
    });

    secondsBtn.addEventListener('click', () => {
        daysInput.value = secondsInput.value / 86400;
        hoursInput.value = secondsInput.value / 3600;
        minutesInput.value = secondsInput.value / 60;
    });
    
}
