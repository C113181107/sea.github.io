const areaData = {
  "台北市": {
    "海邊": [
      { name: "淡水海灘", lat: 25.1683, lng: 121.4431 },
      { name: "金山海岸", lat: 25.2184, lng: 121.6382 }
    ],
    "生態": [
      "海岸植物", "海鳥", "珊瑚", "潮間帶生物"
    ]
  },
  "高雄市": {
    "海邊": [
      { name: "旗津海灘", lat: 22.6164, lng: 120.2773 },
      { name: "蓮池潭", lat: 22.6867, lng: 120.2947 }
    ],
    "生態": [
      "海豚", "珊瑚礁", "海藻", "潮間帶動物"
    ]
  },
  "台中市": {
    "海邊": [
      { name: "大甲海灘", lat: 24.3047, lng: 120.5715 },
      { name: "沙鹿海灘", lat: 24.2802, lng: 120.5369 }
    ],
    "生態": [
      "沙灘植物", "水鳥", "潮汐生態", "貝類"
    ]
  },
  "花蓮縣": {
    "海邊": [
      { name: "花蓮海岸", lat: 23.9906, lng: 121.5897 },
      { name: "石雨傘海灘", lat: 24.0155, lng: 121.6117 }
    ],
    "生態": [
      "海鷗", "白海豚", "珊瑚礁", "潮間帶"
    ]
  },
  "屏東縣": {
    "海邊": [
      { name: "墾丁海灘", lat: 21.9426, lng: 120.7863 },
      { name: "後壁湖", lat: 21.9574, lng: 120.7467 }
    ],
    "生態": [
      "海龜", "珊瑚礁", "熱帶魚", "海藻"
    ]
  },
  "澎湖縣": {
    "海邊": [
      { name: "澎湖本島海灘", lat: 23.5666, lng: 119.5673 },
      { name: "吉貝島", lat: 23.5557, lng: 119.5489 }
    ],
    "生態": [
      "藍藻", "水母", "海底珊瑚", "海鳥"
    ]
  },
  "金門縣": {
    "海邊": [
      { name: "金門海灘", lat: 24.4388, lng: 118.3141 },
      { name: "北海岸", lat: 24.4261, lng: 118.4206 }
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
    listItem.textContent = location.name;
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

  // 更新地圖
  updateMap(result["海邊"]);
});

// 初始化地圖
function initMap() {
  const taiwanCenter = { lat: 23.6978, lng: 120.9796 };
  window.map = new google.maps.Map(document.getElementById("map"), {
    center: taiwanCenter,
    zoom: 7
  });
}

// 更新地圖顯示海邊
function updateMap(beaches) {
  const map = window.map;

  // 清除舊的標記
  if (window.markers) {
    window.markers.forEach(marker => marker.setMap(null));
  }
  window.markers = [];

  // 在地圖上顯示海邊標記
  beaches.forEach(location => {
    const marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: location.name
    });

    // 顯示標記的資訊窗
    const infoWindow = new google.maps.InfoWindow({
      content: location.name
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    window.markers.push(marker);
  });
}