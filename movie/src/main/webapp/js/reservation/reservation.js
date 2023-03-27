
/*
$.ajax({
   url : "/movie/admin/movie",
   method : "get",
   success : (r)=>{ 
	   console.log(r);
   }
})*/
//현재 년도, 월, 일 구하기
let year = (new Date().getFullYear()) 
let month = new Date().getMonth() +1  //0~11 => 1~12
let date = new Date().getDate();
let last = new Date(year,month,0).getDate();
let week = ['일', '월', '화', '수', '목', '금', '토'];
let week_day = week[new Date(year,month,date).getDay()]

console.log("년도 : "+year)
console.log("월 : "+month)
console.log("일 : "+date);
console.log("말일 : "+last)
console.log(week_day)

function dateCalculate(){
	date++;
	
	if(date > last){
		date = 1;
		month= new Date().getMonth() +2;
		week_day = '';
	}else{
		month = '';
	}

}


//날짜 출력
dayPrint()
function dayPrint(){
	let html = `<div class="carousel-inner">
					<div class="carousel-item active">	<!-- 캐러셀하나 -->
						<ul class="date_week_li">
							<li> <span class="date_month">${month}월</span> 
							  	<span class="date_day"> ${date} </span> 
							  	<span class="date_week_day"> ${week[new Date(year,month,date).getDay()]} </span> 
							</li>
							`;
	dateCalculate()
	
	for(let i = 0 ; i < 3 ; i ++){ //총 3주 출력
		for(let j = 0 ; j < 7 ; j ++){ // 7일만 보이게
			for(let k = 0 ; k < 7 ; k++){ //말일까지
				html+= `
						<li> <span class="date_month">${month}월</span> 
						 <span class="date_day"> ${date} </span> 
						 <span class="date_week_day"> ${week[new Date(year,month,date).getDay()]} </span> 
						</li>
						`
				dateCalculate()
			}
		}
	}


	html +=`
		
					<li> <span class="date_month">${month}월</span> 
						 <span class="date_day"> ${date} </span> 
						 <span class="date_week_day"> 오늘 </span> 
					</li>
					<li>
						<span class="date_month"></span> 
						<span class="date_day"> 13일</span> 
						<span class="date_week_day"> 수 </span> 
					</li>
					<li>
						<span class="date_month"></span> 
						<span class="date_day"> 14일</span> 
						<span class="date_week_day"> 목 </span>   
					</li>
					<li>
						<span class="date_month"></span> 
						<span class="date_day"> 14일</span> 
						<span class="date_week_day"> 목 </span>   
					</li>
					<li>
						<span class="date_month"></span> 
						<span class="date_day"> 14일</span> 
						<span class="date_week_day"> 목 </span>   
					</li>
					<li>
						<span class="date_month"></span> 
						<span class="date_day"> 14일</span> 
						<span class="date_week_day"> 목 </span>   
					</li>
					<li>
						<span class="date_month"></span> 
						<span class="date_day"> 14일</span> 
						<span class="date_week_day"> 목 </span>   
					</li>
					<li>
						<span class="date_month"></span> 
						<span class="date_day"> 14일</span> 
						<span class="date_week_day"> 목 </span>   
					</li>
				</ul>
			
			</div>	<!-- carousel-item active -->
				<div class="carousel-item ">	<!-- 캐러셀 둘 -->
					<ul class="date_week_li">
						<li>
							<span class="date_month"></span> 
							<span class="date_day"> 20일</span> 
							<span class="date_week_day"> 목 </span>   
						</li>
						<li>
							<span class="date_month"></span> 
							<span class="date_day"> 120일</span> 
							<span class="date_week_day"> 목 </span>   
						</li>
						<li>
							<span class="date_month"></span> 
							<span class="date_day"> 120일</span> 
							<span class="date_week_day"> 목 </span>   
						</li>
						<li>
							<span class="date_month"></span> 
							<span class="date_day"> 120일</span> 
							<span class="date_week_day"> 목 </span>   
						</li>
						<li>
							<span class="date_month"></span> 
							<span class="date_day"> 120일</span> 
							<span class="date_week_day"> 목 </span>   
						</li>
						<li>
							<span class="date_month"></span> 
							<span class="date_day"> 120일</span> 
							<span class="date_week_day"> 목 </span>   
						</li>
						<li>
							<span class="date_month"></span> 
							<span class="date_day"> 120일</span> 
							<span class="date_week_day"> 목 </span>   
						</li>
						<li>
							<span class="date_month"></span> 
							<span class="date_day"> 120일</span> 
							<span class="date_week_day"> 목 </span>   
						</li>
					</ul>
				</div>	<!-- carousel-item active -->
								
				<div class="carousel-item ">	<!-- 캐러셀 3 -->
					<ul class="date_week_li">
						<li> <span class="date_month">3월</span> 
							 <span class="date_day"> 30일</span> 
							 <span class="date_week_day"> 오늘 </span> 
						</li>
						
						<li> <span class="date_month">3월</span> 
							 <span class="date_day"> 30일</span> 
							 <span class="date_week_day"> 오늘 </span> 
						</li>
						<li> <span class="date_month">3월</span> 
							 <span class="date_day"> 30일</span> 
							 <span class="date_week_day"> 오늘 </span> 
						</li>
						<li> <span class="date_month">3월</span> 
							 <span class="date_day"> 30일</span> 
							 <span class="date_week_day"> 오늘 </span> 
						</li>
						<li> <span class="date_month">3월</span> 
							 <span class="date_day"> 30일</span> 
							 <span class="date_week_day"> 오늘 </span> 
						</li>
						<li> <span class="date_month">3월</span> 
							 <span class="date_day"> 30일</span> 
							 <span class="date_week_day"> 오늘 </span> 
						</li>
						<li> <span class="date_month">3월</span> 
							 <span class="date_day"> 30일</span> 
							 <span class="date_week_day"> 오늘 </span> 
						</li>
						<li> <span class="date_month">3월</span> 
							 <span class="date_day"> 30일</span> 
							 <span class="date_week_day"> 오늘 </span> 
						</li>
					</ul>
				</div>	<!-- carousel-item active -->
			</div>	<!-- carousel-inner -->	
			
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

