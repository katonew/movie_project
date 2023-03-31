console.log('allplayinglist js 시작')

// 사용하는 전역변수
let today = new Date()
let year = today.getFullYear() // 이번 년도
let month = today.getMonth()+1 // 이번 달 (표시할때는 +1 해야함)
let date = today.getDate()	// 오늘 날짜
let day = today.getDay() //  오늘 요일 ( 0: 일요일~~6:토요일)
let selectday = year+"-"+(month<10?"0"+month : month)+"-01";
let selecttime = null;
let selectmoviinfo = null;

startweb()
function startweb(){
	// 특정 달의 첫번째 날의 요일 가져오기
	let firstday = new Date(year, month-1, 1).getDay();
	// 특정 달의 마지막 날 가져오기
	let lastDay = new Date(year, month, 0).getDate();
	let lastdate = new Date(year, month, 0).getDay();
	let html = '';
	// 년,월,일 셀렉트 출력
	for(let i=year;i<=year+1;i++){
		html += `<option>
				${i}
				</option>`
	}
	document.querySelector('.year').innerHTML = html;
	html = '';
	for(i=1;i<=12;i++){
		if(i==month){
			html += `<option selected>
					${i}
					</option>`
		}else{
			html += `<option>
					${i}
					</option>`
		}
	}
	document.querySelector('.month').innerHTML = html;
	html = ''
	for(let i=0;i<firstday;i++){
		html += `<div class="date test"> </div>`
	}
	for(let i=1;i<=lastDay;i++){
		
		if(i==date){
			html += `<div class="date dateinfo${i<10? "0"+i : i} selectedDate">
					${i}
					</div>`
		}else{
			html += `<div class="date dateinfo${i<10? "0"+i : i}">
					${i}
					</div>`
		}
		if((i+firstday)==8){
			html += ``
		}
	}
	document.querySelector('.selectdate').innerHTML = html;
	getallmovielist()
}


// 영화 상영정보 가져오기
function getallmovielist(){
	$.ajax({
		url : "/movie/admin/movieList",
		method : "get",
		data : { "type" : 2, "selectday" : selectday},
		success : (r)=>{
			console.log(r)
			selectmoviinfo = r;
			r.forEach((o,i)=>{
				let html = ``;
				let getyear = o.playtime.split("-")[0]
				let getmonth = o.playtime.split("-")[1]
				let getdate = o.playtime.split("-")[2].split(" ")[0]
				console.log('dddd'+getdate)
				if(getyear==year&&(getmonth-1)==month){
					console.log(o)
					console.log(i)
					html += `<div class="movieinfo" onclick="getplayinginfo(${i})">
								${o.title}
							</div>`
				}
				document.querySelector('.dateinfo'+(getdate) ).innerHTML += html
				
			})
		}// success e
	}) // ajax e
}

// 선택한 상영정보를 모달에 띄우는 함수
function getplayinginfo(i){
	console.log('버튼 눌림')
	let playingmovie = selectmoviinfo[i]
	console.log(playingmovie)
	document.querySelector('.modal2').style.display = 'block'
	document.querySelector('.modal2_title').innerHTML = playingmovie.title
	let html = `<table>
					<tr>
						<th>상영시간</th>
						<td>${playingmovie.playtime}</td>
					</tr>
					<tr>
						<th>예약현황</th>
						<td>${playingmovie.pseat}</td>
					</tr>
					<tr>
						<th>잔여좌석</th>
						<td>${playingmovie.rseat}</td>
					</tr>
					
				</table>`;
	document.querySelector('.modal2_content').innerHTML = html
}


function closeModal1(){
	document.querySelector('.modal1').style.display = 'none'
}

function closeModal2(){
	document.querySelector('.modal2').style.display = 'none'
}



















