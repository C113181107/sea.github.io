const areaData = {
  "台北市": {
    "海邊": ["淡水海灘", "金山海岸"],
    "生態": ["海岸植物", "海鳥", "珊瑚"]
  },
  "高雄市": {
    "海邊": ["蓮池潭", "旗津海灘"],
    "生態": ["海豚", "珊瑚礁", "海藻"]
  }
  // 這裡可以加更多的區域和資料
};

document.getElementById("searchBtn").addEventListener("click", function() {
  const selectedArea = document.getElementById("areaSelect").value;
  const result = areaData[selectedArea];

  // 顯示海邊
  const beachesList = document.getElementById("beaches");
  beachesList.innerHTML = "";
  result["海邊"].forEach(beach => {
    const listItem = document.createElement("li");
    listItem.textContent = beach;
    beachesList.appendChild(listItem);
  });

  // 顯示生態
  const ecologyList = document.getElementById("ecology");
  ecologyList.innerHTML = "";
  result["生態"].forEach(ecology => {
    const listItem = document.createElement("li");
    listItem.textContent = ecology;
    ecologyList.appendChild(listItem);
  });
});