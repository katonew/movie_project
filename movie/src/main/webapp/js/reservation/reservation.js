console.log('a')

$.ajax({
   url : "/movie/admin/movie",
   method : "get",
   success : (r)=>{ 
	   console.log(r);
   }
})