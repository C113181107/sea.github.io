document.getElementById("region-select").addEventListener("change", function() {
    const region = this.value;
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const beachInfo = data[region].beach;
            const creatures = data[region].creatures.join(", ");

            document.getElementById("beach-info").innerHTML = `<h2>沙灘: ${beachInfo}</h2>`;
            document.getElementById("creature-info").innerHTML = `<h2>常見生物: ${creatures}</h2>`;
        })
        .catch(error => console.error('Error loading the data:', error));
});