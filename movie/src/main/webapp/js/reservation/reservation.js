/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 현재 상영중인 영화 제목 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/
let pmovie_html = '';
$.ajax({
	url:"/movie/playing/moive",
	method:"get",
	success:((r)=>{
		console.log(r);
		console.log(r.mlist) //????????
	 	
	})
})






/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ날짜 구하기 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */
//현재 년도, 월, 일 구하기
let year = (new Date().getFullYear()) 
let month = new Date().getMonth()   //0~11 => 1~12
let date = new Date().getDate();


//말일, 요일
let last = new Date(year,month+1,0).getDate(); //+1인채로
let week = ['일', '월', '화', '수', '목', '금', '토'];
let week_day = week[new Date(year,month,date).getDay()]


let monthCount = 0;
let month_kor =  month+1+'월'; // 최초 한번은 뜨고 시작
/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 달력 함수 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ  */
//현재날짜에서 하루씩 증가하는 함수
function dateCalculate(){
	date++; 
	if(date > last){ 	//말일이 지나면 
		date = 1;  		//1일부터
		monthCount++;	// 
		month+= monthCount;
		month_kor = month+1+'월' 
		
	}else{  //2일부턴 월이 안나오게
		month_kor = '';
	}
	week_day =  week[new Date(year,month,date).getDay()];
}


/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 달력 출력 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */
//날짜 출력
dayPrint()
function dayPrint(){
	let html = `<div class="carousel-inner">`;

	for(let i = 0 ; i < 3 ; i++){ //총 3주 출력
		if( i == 0 ){
			html += `<div class="carousel-item active">	
					   <ul class="date_week_li">`
		}else{
			html += `<div class="carousel-item">	
					   <ul class="date_week_li">`
		}
		for(let j = 0 ; j < 7 ; j++){ // 한번에 7일만 보이게
			
			html+= `<li onclick="select_date(${month}, ${date})"> 
						 <span class="date_month">${month_kor}</span> 
						 <span class="date_day D${month}_${date}"> ${date} </span> 
						 <span class="date_week_day" ${week_day === '토'|| week_day === '일' ? 'style="color:red"' : 'style="color:black"'}> ${week_day} </span> 
					</li>`
			dateCalculate() // 1일씩 증가하는 함수
		}// for j e	
		
		html +=`	</ul>
				</div>` //ul과 캐러셀 하나 닫기
	}// for i e


	html +=`</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			 </button>
			`;
	
	document.querySelector('#carouselExampleControls').innerHTML = html;
}

function select_date(month, date){
	
	let date_day = document.querySelectorAll('.date_day');
	
	for(let i = 0 ; i < date_day.length ; i++){
		date_day[i].style.color="black"
		date_day[i].style.backgroundColor="white"
	}
	
	document.querySelector(`.D${month}_${date}`).style.color="white"
	document.querySelector(`.D${month}_${date}`).style.backgroundColor="black"
	document.querySelector(`.D${month}_${date}`).style.borderRadius= "14px";
}

