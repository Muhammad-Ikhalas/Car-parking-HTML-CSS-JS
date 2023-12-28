document.addEventListener('DOMContentLoaded', function () {
    const parkingLot = document.getElementById('parkingLot');
    const moneyTable = document.getElementById('moneyTable');
    const totalMoneyDisplay = document.getElementById('totalMoney');
    const addCarButton = document.getElementById('addCar');
    const addBikeButton = document.getElementById('addBike');
    const addBusButton = document.getElementById('addBus');

    const parkingSpaces = Array(10).fill(0); // Initialize all spaces as vacant
    let totalMoney = 0;

    // Function to render parking spaces
    function renderParkingSpaces() {
        parkingLot.innerHTML = '';
        for (let i = 0; i < parkingSpaces.length; i++) {
            const space = document.createElement('div');
            space.classList.add('parking-space');

            if (parkingSpaces[i] === 1) {
                space.classList.add('reserved');
                space.innerText = 'Reserved';
            } else if (parkingSpaces[i] === 2) {
                space.classList.add('occupied');
                space.innerText = 'Occupied';
            } else {
                space.innerText = 'Vacant';
            }

            space.addEventListener('click', function () {
                // Ignore clicks on vacant spaces
                if (parkingSpaces[i] === 0) {
                    // Simulate marking space as reserved
                    space.classList.remove('vacant');
                    space.classList.add('reserved');
                    space.innerText = 'Reserved';
                    parkingSpaces[i] = 1;
                }
            });

            parkingLot.appendChild(space);
        }
    }

    // Function to add money to the table
    function addMoneyToTable(vehicleType, amount) {
        const row = moneyTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerText = vehicleType;
        cell2.innerText = `$${amount.toFixed(2)}`;
    }

    // Function to calculate and display total money
    function calculateTotalMoney() {
        totalMoney = Array.from(moneyTable.rows).slice(1) // Exclude the header row
            .reduce((sum, row) => sum + parseFloat(row.cells[1].innerText.slice(1)), 0);

        totalMoneyDisplay.innerText = `Total Money: $${totalMoney.toFixed(2)}`;
    }

    // Event listeners for vehicle buttons
    addCarButton.addEventListener('click', function () {
        const carPrice = 5.00;
        const availableSpaceIndex = parkingSpaces.indexOf(0);
        if (availableSpaceIndex !== -1) {
            parkingSpaces[availableSpaceIndex] = 2; // Mark space as occupied by a car
            renderParkingSpaces();
            addMoneyToTable('Car', carPrice);
            calculateTotalMoney();
        } else {
            alert('No available space for cars.');
        }
    });

    addBikeButton.addEventListener('click', function () {
        const bikePrice = 2.50;
        const availableSpaceIndex = parkingSpaces.indexOf(0);
        if (availableSpaceIndex !== -1) {
            parkingSpaces[availableSpaceIndex] = 2; // Mark space as occupied by a bike
            renderParkingSpaces();
            addMoneyToTable('Bike', bikePrice);
            calculateTotalMoney();
        } else {
            alert('No available space for bikes.');
        }
    });

    addBusButton.addEventListener('click', function () {
        const busPrice = 10.00;
        const availableSpaceIndex = parkingSpaces.indexOf(0);
        if (availableSpaceIndex !== -1) {
            parkingSpaces[availableSpaceIndex] = 2; // Mark space as occupied by a bus
            renderParkingSpaces();
            addMoneyToTable('Bus', busPrice);
            calculateTotalMoney();
        } else {
            alert('No available space for buses.');
        }
    });

    // Initial render
    renderParkingSpaces();
});
