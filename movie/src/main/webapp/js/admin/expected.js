console.log('expected js 시작')

let movielist = []

start()
function start(){
	for(let i=1;i<=2;i++){
		$.ajax({
			url : "https://api.themoviedb.org/3/movie/upcoming?api_key=fc5bcf6e9c88d59559fafe20b6032a0e",
			method : "get",
			data : {
				"language" : "ko-KR",
				"page" : i,
				"region" : "KR"
			},
			async : false,
			success : (r)=>{
				let list = r.results
				list.forEach((o)=>{
					if(o.title=='레디 플레이어 원'){
						o.release_date = '2023-04-12'
					}
					movielist.push(o)
				}) // for e
			} // success e
		}) // ajax e
	} // for e
	print()
}


function print(){
	let html = '';
	console.log(movielist)
	list = movielist.sort(function(a,b) {
		return parseFloat(a.order) - parseFloat(b.order);
	});
	console.log(list)
	movielist.forEach((o,i)=>{
		let getday = new Date(o.release_date)
		let today = new Date()
		getday.setHours(getday.getHours()+9,0,0);
		today.setHours(today.getHours()+9,0,0);
		let togo=today.getTime()-getday.getTime();
		let days=Math.abs(Math.floor(togo/(1000*60*60*24)));
		html += `<div onclick="openmodal(${i})" class="moviebox">
					<div class="imgbox">
						<img class="mimg" src="https://image.tmdb.org/t/p/w500/${o.poster_path}">
						<div class="dday"><span>D-</span>${days}</div>
					</div>
					<div>
						<h4>${o.title}</h4>
						<div class="release_date"> 개봉일자 : ${o.release_date}</div>
					</div>
				</div>`
	})
	document.querySelector('.movielist').innerHTML = html
}

function openmodal(i){
	document.querySelector('.modal').style.display = 'block'
	document.querySelector('.modal_title').innerHTML = `${movielist[i].title}`
	document.querySelector('.modalimgbox').innerHTML = 
	`<img class="modalimg" src="https://image.tmdb.org/t/p/w500/${movielist[i].poster_path}">`
	document.querySelector('.modaloverview').innerHTML = 
	`	<h3>줄거리</h3>
		${movielist[i].overview}`
}

function closeModal(){	document.querySelector('.modal').style.display = 'none'}
