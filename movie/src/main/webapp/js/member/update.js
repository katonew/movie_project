console.log('update.js 실행')

if ( memberInfo == null ){
	alert('회원 로그인을 해주세요.');
	location.href = "/movie/member/login.jsp";
}

document.querySelector('.memail').value = memberInfo.memail;
console.log('memberInfo.mimg : '+memberInfo.mimg)
console.log(memberInfo.mimg==null)
document.querySelector('.mimgimg').src = `/movie/member/img/${memberInfo.mimg==null?'default.webp':memberInfo.mimg}` ;


function update(){
	console.log('update 함수 실행')
	let signupForm = document.querySelectorAll('.signupForm')[0]
	let signupFormData = new FormData(signupForm);
	
	$.ajax({
		url : "/movie/member/info",
		method : "put" ,
		data : signupFormData ,
		contentType : false , 
		processData : false ,
		success : (r)=>{
			console.log('통신')
			console.log(r)
			if ( r == 'true'){
				alert('회원정보 수정성공')
				location.href="/movie/member/update.jsp"
			}else{
				alert('현재비밀번호가 맞지 않습니다.')
			}
		}
	})
}

function deleteMember(){
	let deletecheck = document.querySelector('.deletecheck').value
	$.ajax({
		url : "/movie/member/info" ,
		method : "delete" ,
		data : { "mpwd":deletecheck} ,
		success : (r)=>{
			console.log('통신')
			console.log(r)
			if ( r == 'true'){
				alert('회원탈퇴가 완료되었습니다.')
				location.href="/movie/member/logout.jsp"
			}else{
				alert('비밀번호가 맞지 않습니다.')
			}
		}
	})
}
	
// 프로필이미지 미리보기
function premimg( object ){
	
	let file = new FileReader();
	file.readAsDataURL( object.files[0])
	file.onload = (e)=>{
		//console.log(e.target.result)
		document.querySelector('.mimgimg').src = e.target.result;
	}
	
}