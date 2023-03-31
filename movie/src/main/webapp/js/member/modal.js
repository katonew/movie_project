console.log('modal.js 실행')

function onpenModal( ){
	document.querySelector('.modal_wrap').style.display ='flex';
}
function closeModal(){
	document.querySelector('.modal_wrap').style.display ='none';
	document.querySelector('.deletecheck').value = '';
}