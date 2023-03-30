console.log('search 확인')
Search();
function Search(){
	
		
	$.ajax({
		url : "/movie/SearchServlet",
		method : "get" ,
		success : (r)=>{
			console.log(r);
			
			let html = '';
			
			r.forEach((o,i)=>{
				
				html +=`
						<div class="m_wrap">
						<a href="${o.link}">
						<div>
						<img class="img-fluid" src="${o.pimg}"><br/>
						</div>
						<div>
						<span class="m_title">${o.title}</span><br/>
						<span class="m_count">${o.count}</span>
						</div>
						</a>
						</div>
						`
				
			})    
			document.querySelector('.m_p').innerHTML = html;
			}
		
	})
}