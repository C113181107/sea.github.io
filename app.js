document.getElementById("region-select").addEventListener("change", function() {
    const region = this.value;

    // 使用 fetch 載入 JSON 資料
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            if (data[region]) {
                const beach = data[region].beach;
                const ecology = data[region].ecology.join(", ");

                // 顯示海邊名稱
                document.getElementById("beach-info").innerHTML = `<h2>海邊: ${beach}</h2>`;
                
                // 顯示生態資訊
                document.getElementById("ecology-info").innerHTML = `<p>常見生態: ${ecology}</p>`;
            } else {
                document.getElementById("beach-info").innerHTML = "<h2>未找到該地區的海邊資訊</h2>";
                document.getElementById("ecology-info").innerHTML = "<p>請選擇其他地區。</p>";
            }
        })
        .catch(error => {
            console.error('資料載入錯誤:', error);
            document.getElementById("beach-info").innerHTML = "<h2>資料載入失敗</h2>";
            document.getElementById("ecology-info").innerHTML = "<p>請稍後再試。</p>";
        });
});