const areaData = {
  "台北市": {
    "海邊": ["淡水海灘", "金山海岸"],
    "生態": ["海岸植物", "海鳥", "珊瑚"]
  },
  "高雄市": {
    "海邊": ["蓮池潭", "旗津海灘"],
    "生態": ["海豚", "珊瑚礁", "海藻"]
  },
  "台中市": {
    "海邊": [
      "大甲海灘",
      "清水海岸",
      "沙鹿海灘"
    ],
    "生態": [
      "沙灘植物",
      "水鳥",
      "潮汐生態",
      "貝類"
    ]
  },
  "花蓮縣": {
    "海邊": [
      "花蓮海岸",
      "石雨傘海灘",
      "鯉魚潭"
    ],
    "生態": [
      "海鷗",
      "白海豚",
      "珊瑚礁",
      "潮間帶"
    ]
  },
  "屏東縣": {
    "海邊": [
      "墾丁海灘",
      "後壁湖",
      "大鵬灣"
    ],
    "生態": [
      "海龜",
      "珊瑚礁",
      "熱帶魚",
      "海藻"
    ]
  },
  "澎湖縣": {
    "海邊": [
      "澎湖本島海灘",
      "吉貝島",
      "望安島"
    ],
    "生態": [
      "藍藻",
      "水母",
      "海底珊瑚",
      "海鳥"
    ]
  },
  "金門縣": {
    "海邊": [
      "金門海灘",
      "北海岸",
      "東海岸"
    ],
    "生態": [
      "海岸植物",
      "海鳥",
      "海蝕洞",
      "潮間帶生物"
    ]
  }
}

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