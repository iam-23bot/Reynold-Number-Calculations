document.getElementById('reynoldsForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const density = parseFloat(document.getElementById('density').value);
    const velocity = parseFloat(document.getElementById('velocity').value);
    const diameter = parseFloat(document.getElementById('diameter').value);
    const dynamicViscosity = parseFloat(document.getElementById('dynamicViscosity').value);

    // Calculate Reynolds number
    const reynoldsNumber = (density * velocity * diameter) / dynamicViscosity;

    let flowType;
    if (reynoldsNumber < 2000) {
        flowType = 'Laminar';
    } else if (reynoldsNumber >= 2000 && reynoldsNumber <= 4000) {
        flowType = 'Transisi';
    } else {
        flowType = 'Turbulen';
    }

    const result = `Bilangan Reynolds: ${reynoldsNumber.toFixed(2)}<br>Jenis Aliran: ${flowType}`;
    document.getElementById('result').innerHTML = result;
});
