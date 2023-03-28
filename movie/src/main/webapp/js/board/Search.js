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
						<img class="m_img" src="${o.pimg}"><br/>
						<span class="m_title">${o.title}</span><br/>
						<span class="m_count">${o.count}</span>
						</a>
						<div>
						`
				
			})
			document.querySelector('.m_p').innerHTML = html;
			}
		
	})
}