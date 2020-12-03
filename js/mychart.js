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
  if (!localStorage.getItem('mydata')) {
    // mydata = "データがありません";
    console.log("データがありません");
    var mydata = -1;
  } else {
    mydata = localStorage.getItem('mydata');
  }

  // 3)chart.jsのdataset用の配列を用意
  var tmpLabels = [],
    tmpData1 = [],
    tmpData2 = [],
    tmpData3 = [],
    tmpData4 = [],
    tmpData5 = [],
    tmpData6 = [];
  for (var row in data) {
    tmpLabels.push(data[row][0])
    tmpData1.push(data[row][1])
    tmpData2.push(data[row][2])
    tmpData3.push(data[row][3])
    tmpData4.push(data[row][4])
    tmpData5.push(data[row][5])
    tmpData6.push(data[row][6])
  };

  // 4)chart.jsで描画
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ["JAZZ", "ELECTRONIC","Lo-Fi", "METAL", "ROCK"],
      datasets: [
        // { label: tmpLabels, data: tmpData1, backgroundColor: "red" },
        {
          label: tmpLabels[mydata],
          data: [tmpData2[mydata], tmpData3[mydata], tmpData4[mydata], tmpData5[mydata], tmpData6[mydata]],
          backgroundColor: "blue"
        },
        // {
        //   label: tmpLabels[1],
        //   data: [tmpData2[1], tmpData3[1], tmpData4[1], tmpData5[1], tmpData6[1]],
        //   backgroundColor: "red"
        // },
        // {
        //   label: tmpLabels[2],
        //   data: [tmpData2[2], tmpData3[2], tmpData4[2], tmpData5[2], tmpData6[2]],
        //   backgroundColor: "pink"
        // },
        // {
        //   label: tmpLabels[3],
        //   data: [tmpData2[3], tmpData3[3], tmpData4[3], tmpData5[3], tmpData6[3]],
        //   backgroundColor: "yellow"
        // }
      ]
    },
  });
}



function createYoutube() {

  if (!localStorage.getItem('mydata')) {
    // mydata = "データがありません";
    console.log("データがありません");
    var mydata = -1;
  } else {
    mydata = localStorage.getItem('mydata');
  }

  console.log(`mydata= ${mydata}`);

  var tmpLabels = [],
    tmpData1 = [],
    tmpData2 = [],
    tmpData3 = [],
    tmpData4 = [],
    tmpData5 = [],
    tmpData6 = [];
  for (var row in data) {
    // name
    tmpLabels.push(data[row][0])
    // email
    tmpData1.push(data[row][1])
    // jazz
    tmpData2.push(data[row][2])
    // elec
    tmpData3.push(data[row][3])
    // lofi
    tmpData4.push(data[row][4])
    // metal
    tmpData5.push(data[row][5])
    // rock
    tmpData6.push(data[row][6])
  };

  console.log(`ここはマイデータ${tmpData3[mydata]}`);

  const jazzSet = [
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/Cv9NSR-2DwM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/ylXk1LBvIqU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/1rxYw7Y45Eo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  ];

  const elecSet = [
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/3MteSlpxCpo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/4JkIs37a2JE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/JEq10L7u3SM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  ];

  const lofiSet = [
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/g9hwjQBQFIo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/k3QrEO4isws" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/wsBZmRtMoiI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  ];

  const metalSet = [
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/2f1Ny74_ou0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/tqvvaY2LvuI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/9rFkXmxXZ28?start=65" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  ];

  const rockSet = [
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/SBjQ9tuuTJQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/mc58QjI6vDc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/JsnIdx8JSBY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  ];

  const random = Math.floor(Math.random() * 3);

  if (tmpData2[mydata] > 4) {
    const jazzHTML = jazzSet[random];
    console.log(random);
    console.log(jazzSet[random]);
    document.getElementById('insertVideo').innerHTML = jazzHTML;
  }else if(tmpData3[mydata] > 4) {
    const elecHTML = elecSet[random];
    console.log(random);
    console.log(elecSet[random]);
    document.getElementById('insertVideo').innerHTML = elecHTML;
  }else if(tmpData4[mydata] > 4) {
    const lofiHTML = lofiSet[random];
    console.log(random);
    console.log(lofiSet[random]);
    document.getElementById('insertVideo').innerHTML = lofiHTML;
  }else if(tmpData5[mydata] > 4) {
    const metalHTML = metalSet[random];
    console.log(random);
    console.log(metalSet[random]);
    document.getElementById('insertVideo').innerHTML = metalHTML;
  }else if(tmpData6[mydata] > 4) {
    const rockHTML = rockSet[random];
    console.log(random);
    console.log(rockSet[random]);
    document.getElementById('insertVideo').innerHTML = rockHTML;
  }else if(tmpData2[mydata] == 1 && tmpData3[mydata] == 1 && tmpData4[mydata] == 1 && tmpData5[mydata] == 1 && tmpData6[mydata] == 1){
    document.getElementById('insertVideo').innerHTML = '<p>音楽の相性が合わないようです</p>';
  }


  mydata++;
  localStorage.setItem('mydata', mydata);

}


function main() {
  // 1) ajaxでCSVファイルをロード
  var req = new XMLHttpRequest();
  var filePath = 'data/storage.csv';
  req.open("GET", filePath, true);
  req.onload = function () {
    // 2) CSVデータ変換の呼び出し
    data = csv2Array(req.responseText);
    // 3) chart.jsデータ準備、4) chart.js描画の呼び出し
    drawBarChart(data);
    createYoutube();
  }
  req.send(null);
}

main();