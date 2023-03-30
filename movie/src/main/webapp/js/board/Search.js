console.log('search 확인')
Search();



// 영화검색페이지 시작시 박스오피스탑10 / 넷플릭스 영화 순위 불러오기
function Search(){
	$.ajax({
		url : "/movie/SearchServlet",
		method : "get" ,
		data : {"type" : 1},   
		success : (r)=>{
			console.log(r); // 리턴값 확인
			
			let html = '';
			let html2='';
			r.forEach((o,i)=>{
				
				if(i<10){ // 인덱스 0~9까지  =  박스오피스 탑10
					html +=`
						<div class="m_wrap css_m_wrap"  onclick="openModal('${o.link}')">
						<a  href="#">
						<div>
						<img class="img-fluid" src="${o.pimg}"><br/>
						</div>
						<div>
						<span class="m_title">${o.title}</span><br/>
						<span class="m_title">${o.year}</span><br/>
						<span class="m_count">${o.count}</span>
						</div>
						</a>
						</div>
						`
				}
				else{ // 인덱스 10~19까지  =  넷플릭스 탑10
					html2 +=`
						<div class="m_wrap css_m_wrap" onclick="openModal('${o.link}')">
						<a href="#">
						<div>
						<img class="img-fluid" src="${o.pimg}"><br/>
						</div>
						<div>
						<span class="m_title">${o.title}</span><br/>
						<span class="m_title">${o.year}</span><br/>
						</div>
						</a>
						</div>
						`
				}	
			})
			document.querySelector('.m_p').innerHTML = html;
			document.querySelector('.m_p2').innerHTML = html2;
			}
		
	})
}

// 검색한 영화 불러오기
function search_m(){
	
	// 검색한 단어 가져오기
	let search = document.querySelector('.search_m').value;
	
	
	$.ajax({
		url : "/movie/SearchServlet",
		method : "get" ,
		data : {"type" : 2 ,
				"search" : search},
		success : (r)=>{
			console.log(r ); // 리턴값 확인
			let list = JSON.parse(JSON.stringify( r)); // 형변환
			console.log(list) // 형변환 확인
			
			let html = `<div class="searchtitle">
					<h3> "${search}" 검색 결과 </h3>
				</div>
				<div class = "search_m css_m_p">`;
			
			list.forEach((o , i) =>{
				
				html += `
						<div class="m_wrap css_m_wrap" onclick="openModal('${o.link}')">
						<a href="#">
						<div>
						<img class="img-fluid" src="${o.pimg}"><br/>
						</div>
						<div>
						<span class="m_title">${o.title}</span><br/>
						<span class="m_title">${o.year}</span><br/>
						</div>
						</a>
						</div>
						`
			})
			html += `</div>`
			document.querySelector('.searchresult').innerHTML = html;
			}
	})
	
}

// 모달 오픈/클로즈
function openModal(e){ // e = link주소
	console.log(e);	// 들어왔는지 확인
	document.querySelector('.modal_wrap').style.display = 'flex';
	modal_select(e); // 모달 열리면 modal_select()함수에 e값을 보내주고 실행
	
}
function closeModal(){
	document.querySelector('.modal_wrap').style.display = 'none';
	// 모달 닫을시 내용 초기화
	document.querySelector('.modal_title').innerHTML ='';
	document.querySelector('.modal_content').innerHTML ='';
}

// 선택한 영화 상세보기
function modal_select(select){
	console.log('modal : ' + select); // 넘겨받은 인수 확인
	
	$.ajax({
		url : "/movie/SearchServlet",
		method : "get" ,
		data : {"type" : 3 ,
				"select" : select},
		success : (r)=>{
			console.log('select') // 통신확인
			console.log(r)		 // 리턴값 확인
			let html = ``;
			
			r.forEach((o,i)=>{
				html +=`
						<img src=${o.pimg}><br/>
						<span> ${o.title}</span><br/>
						<span> ${o.year}</span><br/>
						<span> ${o.count}</span><br/>
						`
				
				
				document.querySelector('.modal_title').innerHTML = html;
				
				html = '';
				
				html+=`
						<div>
							<div>제목 : ${o.infotitle}</div>
							<div>제작연도 : ${o.infoyear}</div>
							<div>국가 : ${o.infocountry}</div>
							<div>장르 : ${o.infogenre}</div>
							<div>상영시간 : ${o.infotime}</div>
							<div>연령등급 : ${o.infoold}</div>
							<div>내용 : ${o.infocontent}</div>
						</div>
				`;
				document.querySelector('.modal_content').innerHTML = html;
			})
		}
	})
}
























