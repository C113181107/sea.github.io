document.getElementById("region-select").addEventListener("change", function() {
    const region = this.value;
    console.log("Selected region:", region);  // 輸出當前選中的地區

    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched data:", data);  // 輸出加載的資料，檢查是否正確

            const beachInfo = data[region]?.beach;  // 防止資料錯誤，使用可選鏈（optional chaining）
            const creatures = data[region]?.creatures.join(", ");

            // 檢查資料是否存在
            if (beachInfo && creatures) {
                document.getElementById("beach-info").innerHTML = `<h2>沙灘: ${beachInfo}</h2>`;
                document.getElementById("creature-info").innerHTML = `<h2>常見生物: ${creatures}</h2>`;
            } else {
                document.getElementById("beach-info").innerHTML = "<h2>沒有找到這個地區的資料</h2>";
                document.getElementById("creature-info").innerHTML = "<h2>沒有相關的生物資訊</h2>";
            }
        })
        .catch(error => {
            console.error('Error loading the data:', error);
            document.getElementById("beach-info").innerHTML = "<h2>資料載入錯誤</h2>";
            document.getElementById("creature-info").innerHTML = "<h2>請稍後再試</h2>";
        });
});