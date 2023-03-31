console.log('index.js 연결')

BoxOfficePrint();
function BoxOfficePrint(){
	$.ajax({
		url : "/movie/boxoffice/servlet" ,
		method : "get" ,
		success : (r)=>{
			console.log(r)
			html = ''
			r.forEach((o,i)=>{
				html += `
					<div class="onemovie">
						<div class="mposter">
							<img alt="" src="${o.pimg}">
							<div class="mrank">${i+1}</div>
						</div>   
						<div class="moviename">${o.title}</div>
					
						<div class="movieinfo">
							<div>${o.count}</div>
							<div>${o.year}</div>
						</div>
					</div>
						
						`
			})
			document.querySelector('.boxofficeinfobox').innerHTML = html;
		}
	})
}