const areaData = {
  "台北市": {
    "海邊": [
      "淡水海灘", "金山海岸"
    ],
    "生態": [
      "海岸植物", "海鳥", "珊瑚", "潮間帶生物"
    ]
  },
  "高雄市": {
    "海邊": [
      "旗津海灘", "蓮池潭"
    ],
    "生態": [
      "海豚", "珊瑚礁", "海藻", "潮間帶動物"
    ]
  },
  "台中市": {
    "海邊": [
      "大甲海灘", "沙鹿海灘"
    ],
    "生態": [
      "沙灘植物", "水鳥", "潮汐生態", "貝類"
    ]
  },
  "花蓮縣": {
    "海邊": [
      "花蓮海岸", "石雨傘海灘"
    ],
    "生態": [
      "海鷗", "白海豚", "珊瑚礁", "潮間帶"
    ]
  },
  "屏東縣": {
    "海邊": [
      "墾丁海灘", "後壁湖"
    ],
    "生態": [
      "海龜", "珊瑚礁", "熱帶魚", "海藻"
    ]
  },
  "澎湖縣": {
    "海邊": [
      "澎湖本島海灘", "吉貝島"
    ],
    "生態": [
      "藍藻", "水母", "海底珊瑚", "海鳥"
    ]
  },
  "金門縣": {
    "海邊": [
      "金門海灘", "北海岸"
    ],
    "生態": [
      "海岸植物", "海鳥", "海蝕洞", "潮間帶生物"
    ]
  }
};

document.getElementById("searchBtn").addEventListener("click", function() {
  const selectedArea = document.getElementById("areaSelect").value;
  const result = areaData[selectedArea];

  // 顯示海邊
  const beachesList = document.getElementById("beaches");
  beachesList.innerHTML = "";  // 清空舊的資料
  result["海邊"].forEach(location => {
    const listItem = document.createElement("li");
    listItem.textContent = location;
    beachesList.appendChild(listItem);
  });

  // 顯示生態
  const ecologyList = document.getElementById("ecology");
  ecologyList.innerHTML = "";  // 清空舊的資料
  result["生態"].forEach(ecology => {
    const listItem = document.createElement("li");
    listItem.textContent = ecology;
    ecologyList.appendChild(listItem);
  });
});