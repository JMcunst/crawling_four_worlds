document.getElementById("compareBtn").addEventListener("click", function () {
  var file1 = document.getElementById("file1").files[0];
  var file2 = document.getElementById("file2").files[0];

  if (!file1 || !file2) {
    console.log("두 개의 파일을 선택해주세요.");
    return;
  }

  var reader1 = new FileReader();
  reader1.onload = function (e) {
    var data1 = JSON.parse(e.target.result);

    var reader2 = new FileReader();
    reader2.onload = function (e) {
      var data2 = JSON.parse(e.target.result);

      if (JSON.stringify(data1) === JSON.stringify(data2)) {
        console.log("두 파일의 내용이 동일합니다.");
        return;
      }

      var diff = [];
      for (var i = 0; i < data1.length; i++) {
        if (JSON.stringify(data1[i]) !== JSON.stringify(data2[i])) {
          diff.push({
            file1: data1[i],
            file2: data2[i],
          });
        }
      }

      if (diff.length === 0) {
        console.log("두 파일은 같은 구조를 가지지만 값이 다릅니다.");
        return;
      }

      var diffData = JSON.stringify(diff, null, 4);

      // diff.json 파일로 다운로드
      var blob = new Blob([diffData], { type: "application/json" });
      var url = URL.createObjectURL(blob);
      var downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = "diff.json";
      downloadLink.click();

      console.log("두 파일의 차이를 diff.json 파일로 저장하였습니다.");
    };

    reader2.readAsText(file2);
  };

  reader1.readAsText(file1);
});
