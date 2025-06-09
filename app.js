document.getElementById("region-select").addEventListener("change", function() {
    const region = this.value;

    // 使用 fetch 載入 JSON 資料
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // 確保選中的地區有對應的資料
            if (data[region]) {
                const beach = data[region].beach;
                const description = data[region].description;

                // 顯示海邊名稱與描述
                document.getElementById("beach-info").innerHTML = `<h2>海邊: ${beach}</h2>`;
                document.getElementById("description").innerHTML = `<p>${description}</p>`;
            } else {
                document.getElementById("beach-info").innerHTML = "<h2>未找到該地區的海邊資訊</h2>";
                document.getElementById("description").innerHTML = "<p>請選擇其他地區。</p>";
            }
        })
        .catch(error => {
            console.error('資料載入錯誤:', error);
            document.getElementById("beach-info").innerHTML = "<h2>資料加載失敗</h2>";
            document.getElementById("description").innerHTML = "<p>請稍後再試。</p>";
        });
});