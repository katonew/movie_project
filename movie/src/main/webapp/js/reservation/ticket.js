 //상영되는 영화 고유번호 
let pno = document.querySelector('.pno').value
let a_num = 0// adult num 성인 인원 
let t_num = 0// teen num 청소년 인원
let b_num = 0// baby num 시니어 인원

//----------------------- 영화 정보 출력 -----------------
$.ajax({
	url:"/movie/ticket",
	method:"get",
	data: {"pno":pno},
	success:(r)=>{
		console.log(r)
		document.querySelector('.movie_title').innerHTML = r.title;
		document.querySelector('.date').innerHTML = r.playtime.split(" ")[0];
		document.querySelector('.time').innerHTML = r.playtime.split(" ")[1].substr(0, 5);
		document.querySelector('.screen').innerHTML = r.sno +'관'
	}
})

/* ----------------------- 영화 인원 증가 ------------------*/
function p_up(human){
	p_max()
	if(human == 1){
		a_num++
		document.querySelector('.a_num').innerHTML= a_num;
	}
	else if (human == 2){
		t_num++;
		document.querySelector('.t_num').innerHTML= t_num;
	}
	else if (human == 3 ){
		b_num++;
		document.querySelector('.b_num').innerHTML= b_num;
	}
}

/* ----------------------- 영화 인원 감소 ------------------*/
function p_down(human){
	if(human == 1){
		a_num--
		document.querySelector('.a_num').innerHTML= a_num;
	}
	else if (human == 2){
		t_num--;
		document.querySelector('.t_num').innerHTML= t_num;
	}
	else if (human == 3 ){
		b_num--;
		document.querySelector('.b_num').innerHTML= b_num;
	}
}

/* 인원 유효성 검사 (최대 8명 )*/
function p_max(){
	if(a_num+t_num+b_num >= 8){
		alert('총 8명까지 예매할 수 있습니다!').
		return;
	}
}


/*-------------------------좌석 선택란------------------*/
select_screen();
function select_screen(){
	let html = '';
	for(index = 97; index<=105 ; index++ ){ //아스키코트 a~i
		html += `<div class="seat_text"> 
					<span class="col"> ${String.fromCharCode(index)} </span>`;	
		let i = 1;
			html += `<div class="left">`
		for(i =1; i <= 4 ; i++){
			html += `<span class="s${index}_${i} seat " 
					 onclick="click_seat(${index}, ${i})"> 
					 ${String.fromCharCode(index)+i} </span>`
		}
			html += `</div>`
		
			html += `<div class="center">`
		for(j =5; j <= 12 ; j++){
			html += `<span class="s${index}_${j} seat" 
					 onclick="click_seat(${index}, ${j})"> 
					 ${String.fromCharCode(index)+j} </span>`
		}
			html += `</div>`
		
			html += `<div class="right">`
		for(k =13; k <= 16 ; k++){
			html += `<span class="s${index}_${k} seat" 
					 onclick="click_seat(${index}, ${k})"> 
					 ${String.fromCharCode(index)+k} </span>`
		}
			html += `</div>`
		
		
		html += `</div> </div>`
		
	}
	document.querySelector('.select_seat').innerHTML = html;
	
}
