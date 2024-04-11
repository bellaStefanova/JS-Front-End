function getInfo() {
    let button = document.getElementById('submit');

    let stopId = document.getElementById('stopId').value;
    let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let stopName = data.name;
            let buses = data.buses;
            let result = Object.entries(buses)
                .map(([bus, time]) => `<li>Bus ${bus} arrives in ${time} minutes</li>`)
                .join('');

            document.getElementById('stopName').textContent = stopName;
            document.getElementById('buses').innerHTML = result;
        })
        .catch((error) => {
            document.getElementById('stopName').textContent = 'Error';
            document.getElementById('buses').innerHTML = '';
        });

}