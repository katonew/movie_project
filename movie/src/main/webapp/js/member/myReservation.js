console.log('myReservation js 실행')


// 포스터저장하기
//let posterlist = []
//getposter();
//function getposter(){
//		$.ajax({
//			url : "/movie/boxoffice/servlet" ,
//			method : "get" ,
//			async :false ,
//			success : (r)=>{
//				console.log(r)
//				r.forEach((o,i)=>{
//					let poster = { "title":o.title , "pimg": o.pimg}
//					posterlist.push(poster)
//				})
//				console.log(posterlist)
//			}
//		})			
//}

function test(){
	document.querySelector('.test').style.backgroundImage= "url(https://an2-img.amz.wtchn.net/image/v2/bHT0I-pIjglxXeylqodk7g.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk56ZzFNRGt4TkRrM09UZ3dOelUzTmpraWZRLk1TTW1qLWpSaHZLY242N0JHc3o4aFlXSHNFVER1Z092WHhIZlA1cWEtdVE)" 
	document.querySelector('.test').style.backgroundImage= "url()"
	
}

// 예약조회페이지 예매한 영화타이틀 list (출력순서대로저장)
let movietitlelist = []
// 영화타이틀로 영화이미지url 구하기
function posterprint(){
	movietitlelist.forEach((title,i)=>{
		$.ajax({
			url : "/movie/search/poster" ,
			method : "get" ,
			data : { "title":title } ,
			success : (r)=>{
				console.log('--------------------------------------------------------------------')
				console.log(title+' 포스터검색결과 r : '+r)
				let classname = (title.split(' ').join(''))+i
				console.log('찾을 클래스명 : '+classname)
				console.log('--------------------------------------------------------------------')
				//document.querySelector('.'+classname).src = r
				document.querySelector('.'+classname).style.backgroundImage= `url(${r})`	
			}
		})
	})
			
}

myReservationPrint();
function myReservationPrint(){
	$.ajax({
		url : "/movie/myreservation" ,
		method : "get" ,
		async :false ,
		success : (r)=>{
			console.log('통신')
			console.log(r)
			
			
			
			// o.rno / o.seatnum / o.mno / o.plistdto
		
			// o.plistdto.pno / o.plistdto.pstate / o.plistdto.pseat 
			// o.plistdto.pprice / o.plistdto.playtime 
			// o.plistdto.moviedto / o.plistdto.screendto
			
			// o.plistdto.moviedto.mno / o.plistdto.moviedto.title / o.plistdto.moviedto.openDt 
			// o.plistdto.moviedto.directors / o.plistdto.moviedto.genre / o.plistdto.moviedto.audience
			// o.plistdto.moviedto.mstate

			// o.plistdto.screendto.seat / o.plistdto.screendto.sno
			
			// pno만 담기 ( 중복pno제거 )
			let pnolist = []
			r.forEach((o)=>{
				//배열명.includes(데이터) :  찾을데이터의 존재 여부 true / 없으면 false
				if ( !(pnolist.includes(o.plistdto.pno)) ){
					pnolist.push(o.plistdto.pno)	
				}
			})	
			console.log(pnolist)
			// 동일한 상영정보 별로 묶을 rlist / pno가 같으면 같은예매(영화,상영시간,상영관이 같음) / 한번에 여러명 예매했을 경우를 생각해서 상영정보별로 묶은 rlist
			let rlist = []
			pnolist.forEach((o)=>{ // pnolist forEach
				let rlistone = [] // rlist 배열에 담길 예약정보r 배열
				// pnolist 돌때
				r.forEach((r)=>{
					if ( o == r.plistdto.pno ){
						rlistone.push(r)		
					}
				})	
				rlist.push(rlistone)
			}) 
			console.log(rlist)
			
			// 좌석출력
			function seatnumprint( o ){ // o는 동일한 상영정보를 가진 예약리스트
				let seatnumlist = []
				o.forEach((n)=>{
					seatnumlist.push(n.seatnum) 
				})
				return seatnumlist;
			}
			// 결제금액출력
			function ppriceprint(o){
				let pprice = 0;
				o.forEach((p)=>{
					console.log("1건 주문금액 : "+p.plistdto.pprice)
					pprice = pprice + p.plistdto.pprice
				})
				console.log("pprice : "+pprice)
				return pprice;
			}
			
			
	
			
			// html 출력
			let html = ''
			rlist.forEach((o,i)=>{
				movietitlelist.push((o[0].plistdto.moviedto.title))
				// o안에는 영화정보별 arraylist , for문을 안에 더 돌려주거나 인덱스로 호출해야함.
				console.log(o[0].plistdto.moviedto.title)
				console.log(o[0].plistdto.playtime)
				console.log(o[0].plistdto.screendto.sno)
				console.log(o[0].seatnum)
				console.log(o[0].plistdto.pprice.toLocaleString())
				//<div class="pimg"><img class="poster , ${(o[0].plistdto.moviedto.title+i).split(' ').join('')}" src=""></div>  
				html += `
						<div class="oneReservation , ${(o[0].plistdto.moviedto.title+i).split(' ').join('')}" style="background-image: URL();">
							<img class="reinfogradient" src="/movie/member/img/mypage/gradientblack.png">
							<div class="reinfo">
								<div class="title">${o[0].plistdto.moviedto.title}</div>
								<div class="rinfotext playtime">${o[0].plistdto.playtime}</div>
								<div class="screeninfo">
									<div class="rinfotext sno">${o[0].plistdto.screendto.sno}관&nbsp;·&nbsp;</div>
									
									<div class="rinfotext seatnum">${seatnumprint(o)}</div>
								</div>
								<div class="rinfotext pprice">${ppriceprint(o).toLocaleString()}원</div>
							</div>
						</div> 
						`
			})
			document.querySelector('.reservationDiv').innerHTML = html
			console.log('movietitlelist : '+movietitlelist)
			posterprint();	
			
			
		}
		
	})
}

