console.log('newMovieList js 열림')

let today = new Date()
let year = today.getFullYear() // 이번 년도
let month = today.getMonth()+1 // 이번 달 (표시할때는 +1 해야함)
let date = today.getDate()	// 오늘 날짜
let day = today.getDay() //  오늘 요일 ( 0: 일요일~~6:토요일)

let selectday = null;
let selecttime = null;

startweb()
function startweb(){
	// 특정 날짜의 마지막 날 가져오기
	let lastDay = new Date(year, month, 0).getDate();
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
	html = ';'
	for(let i=1;i<=lastDay;i++){
		if(i==date){
			html += `<option selected>
					${i}
					</option>`
		}else{
			html += `<option>
					${i}
					</option>`
		}
	}
	document.querySelector('.date').innerHTML = html;
	// 시간 셀렉트 출력
	html = ``;
	for(let i =0;i<=24;i++){
		if(i==12){
			html += `<option selected>
						${i}
					</option>`
			
		}else{
			html += `<option>
					${i<10? "0"+i : i}
				</option>`
		}
		
	}
	document.querySelector('.hour').innerHTML = html;
	html = '';
	for(let i =0;i<=60;i+=10){
		html += `<option>
					${i<10? "0"+i : i}
				</option>`
	}
	document.querySelector('.minute').innerHTML = html;
	
	// 현재 상영중인 영화 출력
	html = `<tr>
				<th>제목</th>
				<th>감독</th>
				<th>개봉일자</th>
				<th>장르</th>
			</tr>`;
	$.ajax({
		url : "/movie/admin/movie",
		method : "get",
		success : (r)=>{
			console.log(r)
			r.forEach((o)=>{
				html += `<tr>
							<td onclick="selectMovie(${o.mno})">${o.title}</td>
							<td>${o.directors}</td>
							<td>${o.openDt}</td>
							<td>${o.genre}</td>
						</tr>`
			})
			document.querySelector('.selectMovieTable').innerHTML = html;
		}
	})
	
	
}
// 달이 변경되었을때 함수
function monthchange(){
	month = document.querySelector('.month').value
	let html = '';
	let lastDay = new Date(year, month, 0).getDate();
	for(let i=1;i<=lastDay;i++){
		html += `<option>
				${i}
				</option>`
	}
	document.querySelector('.date').innerHTML = html;
}

// 영화 선택했을때 실행될 함수
function selectMovie(mno){
	console.log(mno+"번째 영화 선택")
}

getMovieList()
// 상영정보 가져오기
function getMovieList(){
	console.log('getmovielist 시작')
	// 아직 선택한게 아무것도 없을때
	console.log(selectday)
	console.log(selecttime)
	if(selectday == null&&selecttime==null) {
		$.ajax({
			url : "/movie/admin/movieList",
			method : "get",
			data : { "type" : 1},
			success : (r)=>{
				console.log(r)
				result(r)
			}// success e
		}) // ajax e
	} // if e
	else if(selectday==null){ // 시간은 선택하고 날짜는 선택 안했을때
		alert('날짜를 먼저 선택해주세요');
		return;
	}// else if e
	else if(selecttime==null){ // 날짜는 선택하고 시간은 선택 안했을때
		$.ajax({
			url : "/movie/admin/movieList",
			method : "get",
			data : { "type" : 2, "selectday" : selectday},
			success : (r)=>{
				console.log(r)
				result(r)
			}// success e
		}) // ajax e
	} // else if e
	else{
		$.ajax({
			url : "/movie/admin/movieList",
			method : "get",
			data : { "type" : 2, "selectday" : selectday},
			success : (r)=>{
				console.log(r)
				result(r)
			}// success e
		}) // ajax e
	}
} // getMovieList e

//날짜선택버튼을 눌렀을때
function setSelectday(){
	let selectyear = document.querySelector('.year').value
	let selectmonth = document.querySelector('.month').value
	let selectdate = document.querySelector('.date').value
	selectday = selectyear+ "-"+
				`${ selectmonth<10? "0"+selectmonth : selectmonth}`+ "-"
			+`${selectdate<10? "0"+selectdate : selectdate}`;
	console.log(selectday);
	getMovieList()
}
// 시간 선택버튼을 눌렀을때
function setSelecttime(){
	let selecthour = document.querySelector('.hour').value
	let selectminute = document.querySelector('.minute').value
	selecttime = selecthour +":"+selectminute
	if(selectday!=null){
		selectday = selectday+" "+selecttime
		console.log(selecttime)
		getMovieList()
	}else{
		alert('날짜를 먼저 선택해주세요');
		return;
	}
	
}

// 검색결과 출력
function result(r){
	let html = `<tr>
					<th>영화제목</th>
					<th>상영관</th>
					<th>상영시간</th>
					<th>예약좌석수</th>
					<th>만석상태</th>
					<th>비고</th>
				</tr>`;
	r.forEach((o)=>{
		html +=`<tr>
					<td>${o.title}</td>
					<td>${o.sno}관</td>
					<td>${o.playtime}</td>
					<td>${o.pseat}</td>
					<td>${o.pstate ? "00석남음" : "만석"}</td>
					<td>비고</td>
				</tr>`
	})
	document.querySelector('.movielisttable').innerHTML = html
			
}


