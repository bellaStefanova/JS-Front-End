function solve() {
    let nextStopName = '';
    let nextStopCode = 'depot';
    let nextStopEl = document.querySelector('span.info');
    let departButton = document.getElementById('depart');
    let arriveButton = document.getElementById('arrive');

    
    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopCode}`)
        .then((response) => response.json())
        .then((data) => {returnInitialStop(data)})
        .catch((error) => console.error(error));
    }

    async function arrive() {
        nextStopEl.textContent = `Arriving at ${nextStopName}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    function returnInitialStop(data) {
                nextStopCode = data.next;
                nextStopName = data.name;
                nextStopEl.textContent = `Next stop ${nextStopName}`;
                departButton.disabled = true;
                arriveButton.disabled = false;
    }

    return {
        depart,
        arrive
    };

}

let result = solve();