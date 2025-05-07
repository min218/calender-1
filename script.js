function setup() {
    // 캔버스 크기를 윈도우 크기로 설정
    createCanvas(windowWidth, windowHeight);
  
    // 사진 크기 조정 함수 호출
    adjustPhotos();
  }
  
  function draw() {
    // 매 프레임마다 배경을 흰색으로 설정
    background(255);
  
    // 프레임 크기 계산 (가로는 90%, 세로는 90%로 설정)
    let frameWidth = width * 0.9;
    let frameHeight = height * 0.9;
  
    // 캔버스의 가운데에 직사각형을 그리기 위한 좌표 계산
    let x = (width - frameWidth) / 2;
    let y = (height - frameHeight) / 2;
  
    // 선 스타일 설정
    stroke(0, 0, 0);
    strokeWeight(10); // 선 두께 (10px)
  
    // 직사각형 그리기 (화면의 중앙에 크기 frameWidth와 frameHeight만큼)
    line(x, y, x + frameWidth, y); // 상단 선
    line(x, y, x, y + frameHeight); // 좌측 선
    line(x, y + frameHeight, x + frameWidth, y + frameHeight); // 하단 선
    line(x + frameWidth, y, x + frameWidth, y + frameHeight); // 우측 선
  }
  
  // 사진 크기 조정 함수
  function adjustPhotos() {
    // 사진 컨테이너와 사진을 선택
    const photoContainer = document.getElementById('photoContainer');
    const photos = photoContainer.getElementsByTagName('img');
  
    // 캔버스 크기 기반으로 사진 크기 조정
    const maxPhotoWidth = width * 0.15; // 캔버스 너비의 15%를 사진의 최대 너비로 설정
    const maxPhotoHeight = height * 0.15; // 캔버스 높이의 15%를 사진의 최대 높이로 설정
  
    // 각 사진 크기 조정
    for (let photo of photos) {
    }  
}

//-------------------------------------------------------------------------------


newWindow.document.write(`
  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>캘린더 보기</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        height: 100vh;
        background-color: #f9f9f9;
        overflow-x: auto;
        overflow-y: hidden;
      }
      img {
        flex: 0 0 100%;
        height: 100%;
        object-fit: contain;
      }
      .back-button {
        position: fixed;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #333;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        z-index: 1000;
      }
      .back-button:hover {
        background-color: #555;
      }
    </style>
  </head>
  <body>
    <button class="back-button" onclick="window.close()">이전</button>
    <div style="display: flex; overflow-x: auto; width: 100%;">
      ${reorderedImages
        .map(
          (src, index) =>
            `<img src="${src}" alt="${index + 1}월 캘린더" ${
              index === 0 ? 'id="start"' : ""
            }>`
        )
        .join("")}
    </div>
    <script>
      window.onload = function () {
        const startImage = document.getElementById("start");
        if (startImage) {
          startImage.scrollIntoView({ behavior: "smooth", inline: "start" });
        }
      };
    </script>
  </body>
  </html>
`);
