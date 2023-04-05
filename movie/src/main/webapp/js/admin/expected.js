console.log('expected js 시작')

let year = new Date().getFullYear();
let month = new Date().getMonth()+1;
let date = new Date().getDate();
let today = (year+(month<10?"0"+month:month)+(date<10?"0"+date:date))*1

$.ajax({
		url : "/movie/admin/test",
		method : "get",
		data : {"search" : "웅남이"},
		success : (r)=>{
			console.log(r)
		} // success e
	}) // ajax e


/*
for(let i=1;i<=4;i++){
	$.ajax({
		url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json",
		method : "get",
		data : {
			"key" : "879c7d6c72e8cf797dba5949ba07c616",
			"curPage" : i,
			"itemPerPage" : 100,
			"openStartDt" : 2023
		},
		success : (r)=>{
				let movielist = []
				r.movieListResult.movieList.forEach((o)=>{
					if(o.repGenreNm!="성인물(에로)"&&(o.openDt)*1>today){
						movielist.push(o)
					}
				})// for e
				let html = ``
				movielist.forEach((o)=>{
					console.log(o.movieNm)
					let img = getimg(o.movieNm)
					console.log(img)
					if(img!=null){
						html += 
						`<div>
							<img class="movieimg" src="${img}">
							<div><h3>${o.movieNm}</h3></div>
							<div>개봉일 : ${(o.openDt)*1-today}</div>
						</div>`
					}
				}) // for e
				document.querySelector('.movielist').innerHTML = html
		} // success e
	}) // ajax e
} // for e

function getimg(title){
	let movieimg = null;
	$.ajax({
		url : "/admin/test",
		method : "get",
		async : false,
		data : {"search" : title},
		success : (r)=>{
			let equalslist = [];
			r.forEach((o)=>{
				if(o.title==title){
					equalslist.push(o.pimg);
				}
			}) // for e
			movieimg = equalslist[0]
		} // success e
	}) // ajax e
	return movieimg;
}
*/
