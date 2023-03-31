console.log('index.js 연결')

BoxOfficePrint();
function BoxOfficePrint(){
	$.ajax({
		url : "/movie/boxoffice/servlet" ,
		method : "get" ,
		success : (r)=>{
			console.log(r)
			
		}
	})
}