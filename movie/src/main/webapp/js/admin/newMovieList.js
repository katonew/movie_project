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
		html += `<option>
					${i<10? "0"+i : i}
				</option>`
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
	if(selectday == null&&selecttime==null) {
		$.ajax({
			url : "/movie/admin/movieList",
			method : "get",
			data : { "type" : 1},
			success : (r)=>{
				console.log(r)
			}// success e
		}) // ajax e
	} // if e
	else if(selecttime==null){ // 날짜는 선택하고 시간은 선택 안했을때
		$.ajax({
			url : "/movie/admin/movieList",
			method : "get",
			data : { "type" : 2, "selectday" : selectday},
			success : (r)=>{
				console.log(r)
			}// success e
		}) // ajax e
	}
} // getMovieList e

function setSelectday(){
	selectyear = document.querySelector('.year').value
	selectmonth = document.querySelector('.month').value
	selectdate = document.querySelector('.date').value
	selectday = selectyear+'-'+
				`${ selectmonth<10? "0"+selectmonth : selectmonth}`
			+'-'+`${selectdate<10? "0"+selectdate : selectdate}`;
	console.log(selectday);
	getMovieList()
}


