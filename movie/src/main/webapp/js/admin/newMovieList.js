console.log('newMovieList js 열림')

let today = new Date()
let year = today.getFullYear()
let month = today.getMonth()
let date = today.getDate()
let day = today.getDay()

startweb()
function startweb(){
	console.log(today)
	// 특정 날짜의 마지막 날 가져오기
	let lastDay = new Date(year, month, 0).getDate();
	let html = '';
	for(let i=year;i<=year+1;i++){
		html += `<option>
				${i}
				</option>`
	}
	document.querySelector('.year').innerHTML = html;
	html = '';
	for(i=1;i<=12;i++){
		html += `<option>
				${i}
				</option>`
	}
	document.querySelector('.month').innerHTML = html;
	for(let i=1;i<=lastDay;i++){
		html += `<option>
				${i}
				</option>`
	}
	document.querySelector('.date').innerHTML = html;
}