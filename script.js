function adjustPhotos() {
  // 사진 컨테이너와 사진을 선택
  const photoContainer = document.getElementById('photoContainer');
  const photos = photoContainer.getElementsByTagName('img');

  // 캔버스 크기 기반으로 사진 크기 조정
  const maxPhotoWidth = window.innerWidth * 0.15; // 캔버스 너비의 15%를 사진의 최대 너비로 설정
  const maxPhotoHeight = window.innerHeight * 0.15; // 캔버스 높이의 15%를 사진의 최대 높이로 설정

  // 고정된 위치로 사진 배치
  const positions = [
    { top: '10%', left: '10%' },
    { top: '20%', left: '30%' },
    { top: '40%', left: '50%' },
    { top: '60%', left: '70%' },
    { top: '80%', left: '30%' },
    { top: '50%', left: '10%' },
  ];

  // 각 사진 크기 조정 및 위치 배치
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    const pos = positions[i % positions.length]; // 위치 배열을 순환적으로 사용

    photo.style.position = 'absolute';
    photo.style.top = pos.top;
    photo.style.left = pos.left;
    photo.style.width = maxPhotoWidth + 'px';
    photo.style.height = maxPhotoHeight + 'px';
  }
}
