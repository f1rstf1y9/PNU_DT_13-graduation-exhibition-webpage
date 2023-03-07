/* menu on off */
$('#menu').click(function(){
  $('#menu').fadeOut();
  $('#menu-cont').fadeIn();
})
$('#menu-close').click(function(){
  $('#menu-cont').fadeOut();
  $('#menu').fadeIn();
})

/* modal on off */
body =  document.querySelector('body');
$('.inter .btn-modal__open').click(function(){
  console.log('d')
  $('.modal-cont').fadeIn();
  body.style.overflow = 'hidden';
})
$('.modal-cont.designer-inter').click(function(){
  $('.modal-cont').fadeOut();
  body.style.overflow = 'auto';
})

/* kakao map api */
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(35.174080617422206, 129.12942644924033), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options);

var imageSrc = '../img/map_marker.svg', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
    // 마커가 표시될 위치입니다 
    markerPosition  = new kakao.maps.LatLng(35.1740363524854, 129.12938139432495); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition, 
    image: markerImage // 마커이미지 설정 
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);


/* PC 모바일 구분 */
// var filter = "win16|win32|win64|mac|macintel";
// if ( navigator.platform ) {
// 	if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
// 		//mobile
// 		alert('본 페이지는 PC에 최적화된 웹페이지입니다.')
// 	} // else {
// 	// 	//pc
// 	// 	$('.mobile').css('display', 'none');
//   // }
// }