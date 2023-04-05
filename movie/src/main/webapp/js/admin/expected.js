console.log('expected js 시작')

$.ajax({
	url : "https://api.themoviedb.org/3/movie/upcoming?api_key=fc5bcf6e9c88d59559fafe20b6032a0e&language=ko-KR&page=2&region=KR",
	method : "get",
	success : (r)=>{
		console.log(r)
		let html = '';
		let list = r.results
		list.forEach((o)=>{
			console.log(o)
			let getday = new Date(o.release_date)
			let today = new Date()
			getday.setHours(getday.getHours()+9);
			today.setHours(today.getHours()+9);
			console.log('test1 : ', getday)
			console.log('test2 : ', today)
			let togo=today.getTime()-getday.getTime();
			let days=Math.abs(Math.floor(togo/(1000*60*60*24)));
			console.log(days+'일')
			html += `
			<div>
			<img src="https://image.tmdb.org/t/p/w500/${o.poster_path}">
			<span> 제목 : ${o.title}</span>
			<span> 개봉일자 : ${o.release_date}</span>
			<span> 개봉일자까지 : D-${days}일</span>
			</div>`
		})
		document.querySelector('.movielist').innerHTML = html
	}
})
