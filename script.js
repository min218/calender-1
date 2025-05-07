document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "./data/cal1.svg", 
    "./data/cal2.svg", 
    "./data/cal3.svg",
    "./data/cal4.svg",
    "./data/cal5.svg",
    "./data/cal6.svg",
    "./data/cal7.svg",
    "./data/cal8.svg",
    "./data/cal9.svg", // 9월
    "./data/cal10.svg",
    "./data/cal11.svg", // 11월
    "./data/cal12.svg" // 12월
  ];

  function getReorderedImages(initialIndex) {
    // 클릭된 이미지를 기준으로 배열을 재배치
    return [
      ...images.slice(initialIndex), // 선택된 달부터 끝까지
      ...images.slice(0, initialIndex) // 처음부터 선택된 달 이전까지
    ];
  }

  function openCalendar(initialIndex) {
    const reorderedImages = getReorderedImages(initialIndex);
    const newWindow = window.open("", "SVG View", "width=1920,height=1080,scrollbars=yes");
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
            overflow-x: auto; /* 가로 스크롤 활성화 */
            overflow-y: hidden; /* 세로 스크롤 비활성화 */
          }
          img {
            flex: 0 0 100%; /* 각 이미지를 화면 크기에 맞게 설정 */
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
  }

  function adjustPhotos() {
    const photoContainer = document.getElementById('photoContainer');
    const photos = photoContainer.getElementsByTagName('img');

    // 사진의 랜덤 위치를 설정
    const maxPhotoWidth = window.innerWidth * 0.15; // 너비 비율
    const maxPhotoHeight = window.innerHeight * 0.15; // 높이 비율

    for (let photo of photos) {
      const randomTop = Math.random() * 50; // 0~80% 사이의 랜덤 위치
      const randomLeft = Math.random() * 50;
      photo.style.position = 'absolute';
      photo.style.top = randomTop + 'vh';
      photo.style.left = randomLeft + 'vw';
      photo.style.width = maxPhotoWidth + 'px';
      photo.style.height = maxPhotoHeight + 'px';
    }
  }

  // 페이지가 로드되면 adjustPhotos 호출
  adjustPhotos();

  // 각 photo 클릭 시 적절한 초기 이미지로 캘린더 표시
  document.getElementById("photo1").addEventListener("click", function () {
    openCalendar(0); // cal1을 처음으로
  });
  document.getElementById("photo2").addEventListener("click", function () {
    openCalendar(1); // cal2를 처음으로
  });
  document.getElementById("photo3").addEventListener("click", function () {
    openCalendar(2); // cal3를 처음으로
  });
  document.getElementById("photo4").addEventListener("click", function () {
    openCalendar(3); // cal4를 처음으로
  });
  document.getElementById("photo5").addEventListener("click", function () {
    openCalendar(4); // cal5를 처음으로
  });
  document.getElementById("photo6").addEventListener("click", function () {
    openCalendar(5); // cal6를 처음으로
  });
  document.getElementById("photo7").addEventListener("click", function () {
    openCalendar(6); // cal7를 처음으로
  });
  document.getElementById("photo8").addEventListener("click", function () {
    openCalendar(7); // cal8를 처음으로
  });
  document.getElementById("photo9").addEventListener("click", function () {
    openCalendar(8); // cal9를 처음으로
  });
  document.getElementById("photo10").addEventListener("click", function () {
    openCalendar(9); // cal10를 처음으로
  });
  document.getElementById("photo11").addEventListener("click", function () {
    openCalendar(10); // cal11를 처음으로
  });
  document.getElementById("photo12").addEventListener("click", function () {
    openCalendar(11); // cal12를 처음으로
  });
});

