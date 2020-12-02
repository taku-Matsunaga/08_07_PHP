// 2) CSVから２次元配列に変換
function csv2Array(str) {
  var csvData = [];
  var lines = str.split("\n");
  for (var i = 0; i < lines.length; ++i) {
    var cells = lines[i].split(",");
    csvData.push(cells);
  }
  return csvData;
}

function drawBarChart(data) {
  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels = [], tmpData1 = [], tmpData2 = [], tmpData3 = [], tmpData4 = [];
  for (var row in data) {
    tmpLabels.push(data[row][0])
    tmpData1.push(data[row][1])
    tmpData2.push(data[row][2])
    tmpData3.push(data[row][3])
    tmpData4.push(data[row][4])
  };

  console.log(tmpLabels[1]);

  // 4)chart.jsで描画
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ["JAZZ", "ELECTRONIC", "METAL"],
      datasets: [
        // { label: tmpLabels, data: tmpData1, backgroundColor: "red" },
        { label: tmpLabels[0], data: [tmpData2[0],tmpData3[0],tmpData4[0]], backgroundColor: "blue" },
        { label: tmpLabels[1], data: [tmpData2[1],tmpData3[1],tmpData4[1]], backgroundColor: "red" },
        { label: tmpLabels[2], data: [tmpData2[2],tmpData3[2],tmpData4[2]], backgroundColor: "pink" }
      ]
    }
  });
}

function main() {
  // 1) ajaxでCSVファイルをロード
  var req = new XMLHttpRequest();
  var filePath = 'data/storage.csv';
  req.open("GET", filePath, true);
  req.onload = function() {
    // 2) CSVデータ変換の呼び出し
    data = csv2Array(req.responseText);
    // 3) chart.jsデータ準備、4) chart.js描画の呼び出し
    drawBarChart(data);
  }
  req.send(null);
}

main();