console.log('index.js 연결')

// 슬라이더 position 값 설정
// position absolute 구역 가져오기
let boxofficeinfobox = document.querySelector('.boxofficeinfobox')
// position 위치 전역변수 선언
let positionleft = 0;
let positiontop = 0;
// position 위치 슬라이더에 적용
boxofficeinfobox.style.left = positionleft+"px";
boxofficeinfobox.style.top = positiontop+"px";

//버튼출력유무체크
//btncheck()
// left 값에 따라서 left버튼 생김,숨김
function btncheck(){
	if ( positionleft == 0 ){
		document.querySelector('.sliderleftbtn').style.display = 'none'
	}else{
		document.querySelector('.sliderleftbtn').style.display = 'block'
	}
	
	if ( positionleft == -1215 ){
		document.querySelector('.sliderrightbtn').style.display = 'none'
	}else{
		document.querySelector('.sliderrightbtn').style.display = 'block'
	}
}

// 왼쪽,오른쪽버튼
// -1025px씩 옮기면 됨
//rightmove( -1025 )
// left값 오른쪽으로 옮기는 함수
// 전역변수 left값 저장 , 실제 left값 변경
function slidermove( px ){
	// 현재위치 + 매개변수값
	positionleft = positionleft + px
	// 변경된 위치값으로 left값 변경
	boxofficeinfobox.style.left = positionleft+"px";
	// 변경된 위치에 따른 버튼출력유무체크
	// btncheck()
	// 변경된 현재 left 위치
	console.log( '현재 left값 : '+ positionleft+"px");
}

/* */
slidermovebar( 0 )
function slidermovebar( no ){
	positionleft = (no*(-243))
	if( positionleft >= (-1215) ){
		boxofficeinfobox.style.left = positionleft+"px";
		let boxofficebar = document.querySelectorAll('.boxofficebar');
		console.log(boxofficebar)
		boxofficebar.forEach((o)=>{
			o.style.opacity = "0.3";
		})
		document.querySelector('.boxofficebar'+no).style.opacity = "1";
	}
		
	console.log( '현재 left값 : '+ positionleft+"px");
}

/////////3초마다 박스오피스 슬라이드 넘기기
let barcount = 0;
function changebar(){
	if ( barcount == 0 ){
		barcount = 5;
	}else{
		barcount = 0;
	}
	slidermovebar(barcount)
}

setInterval(()=>{
	changebar();	
},4000)

/////////////////////////////////////

// 박스오피스 영화정보 출력
BoxOfficePrint();
function BoxOfficePrint(){
	$.ajax({
		url : "/movie/boxoffice/servlet" ,
		method : "get" ,
		success : (r)=>{
			console.log(r)
			html = ''
			r.forEach((o,i)=>{
				html += `
					<div class="onemovie">
						<div class="mposter">
							<img class="boxofficegradient" src="/movie/member/img/mypage/boxofficeshadow.png">
							<img alt="" src="${o.pimg}">
							<div class="mrank">${i+1}</div>
						</div>   
						<div class="moviename">${o.title}</div>
					
						<div class="movieinfo">
							<div>${o.count}</div>
							<div>${o.year}</div>
						</div>
					</div>
						
						`
			})
			document.querySelector('.boxofficeinfobox').innerHTML = html;
		}
	})
}