console.log('test.js연결')

$.ajax({
	url : "/movie/testjsoup",
	method : "get",
	success : (r)=>{
		console.log('통신')
		console.log(r)
	}
})