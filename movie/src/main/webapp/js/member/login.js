console.log('login js 실행')

function login(){
	let mid = document.querySelector('.mid').value;
	let mpwd = document.querySelector('.mpwd').value;
	
	$.ajax({
		url : "/movie/login" ,
		method : "post" ,
		data : { "mid":mid , "mpwd":mpwd } ,
		success : (r)=>{
			console.log('통신')
			console.log(r)
			if( r == 'true'){
				alert('로그인 성공')
				location.href="/movie/index.jsp"
			}else{
				alert('로그인 실패')
			}
			
		}
	})
}