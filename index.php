<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">

  <script src="http://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.min.js"></script>
  <script src="js/mychart.js"></script>

  <title>入力画面</title>
</head>

<body>
  <form action="create.php" method="POST">
    <div>
      <h1>音楽嗜好チェックフォーム</h1>
    </div>
    <div class="tac">
      Name: <input type="text" name="name">
    </div>
    <div class="tac">
      Email: <input type="email" name="email">
    </div>

    <div class="checkbox">JAZZは好き？
      <label for="jazzDislike">
        <input type="radio" name="jazz" id="jazzDislike" value="1">嫌い
      </label>
      <label for="jazzNormal">
        <input type="radio" name="jazz" id="jazzNormal" value="5">普通
      </label>
      <label for="jazzLike">
        <input type="radio" name="jazz" id="jazzLike" value="10">好き
      </label>
    </div>

    <div class="checkbox">エレクトロニックは好き？
      <label for="elecDislike">
        <input type="radio" name="elec" id="elecDislike" value="1">嫌い
      </label>
      <label for="elecNormal">
        <input type="radio" name="elec" id="elecNormal" value="5">普通
      </label>
      <label for="elecLike">
        <input type="radio" name="elec" id="elecLike" value="10">好き
      </label>
    </div>

    <div class="checkbox">Lo-Fi HIP-HOPは好き？
      <label for="lofiDislike">
        <input type="radio" name="lofi" id="lofiDislike" value="1">嫌い
      </label>
      <label for="elecNormal">
        <input type="radio" name="lofi" id="lofiNormal" value="5">普通
      </label>
      <label for="elecLike">
        <input type="radio" name="lofi" id="lofiLike" value="10">好き
      </label>
    </div>

    <div class="checkbox">メタルは好き？
      <label for="metalDislike">
        <input type="radio" name="metal" id="metalDislike" value="1">嫌い
      </label>
      <label for="metalNormal">
        <input type="radio" name="metal" id="metalNormal" value="5">普通
      </label>
      <label for="metalLike">
        <input type="radio" name="metal" id="metalLike" value="10">好き
      </label>
    </div>

    <div class="checkbox">ロックは好き？
      <label for="rockDislike">
        <input type="radio" name="rock" id="rockDislike" value="1">嫌い
      </label>
      <label for="metalNormal">
        <input type="radio" name="rock" id="rockNormal" value="5">普通
      </label>
      <label for="metalLike">
        <input type="radio" name="rock" id="rockLike" value="10">好き
      </label>
    </div>
    <div class="submitBtn">
      <button>Submit</button>
    </div>
  </form>

  <div class="clearBtn">
    <a href="delete.php" onclick="deleteStorage()">初期化する</a>
  </div>

  <div class="graph" style="width: 50%; height: 50%;">
    <canvas id="myChart" style="width: 100%; height: auto;"></canvas>
  </div>

  <div class="videoBox" id="insertVideo">

  </div>

  <script>
    function deleteStorage(){
      localStorage.removeItem('mydata');
    }
  </script>
</body>

</html>