drop database if exists movie;
create database movie;
use movie;

-- 회원 테이블
drop table if exists member;
create table member(
	mno int auto_increment primary key,-- 회원번호
    mid varchar(20),-- ID
    mpwd varchar(20), -- 비밀번호
    memail varchar(20),-- 이메일
    mimg varchar(20)-- 프로필 이미지
);
insert into member(mid,mpwd,memail,mimg) values ('admin','admin1','admin@admin.com',null);
insert into member(mid,mpwd,memail,mimg) values ('qwert','qwert1','admin@admin.com',null);
insert into member(mid,mpwd,memail,mimg) values ('asdfg','asdfg1','admin@admin.com',null);
insert into member(mid,mpwd,memail,mimg) values ('zxcvb','zxcvb1','admin@admin.com',null);


-- 영화 테이블
drop table if exists movie;
create table movie(
	mno	int auto_increment primary key,	-- 영화번호
	title varchar(30),					-- 영화제목
    openDt date,						-- 개봉일
    directors varchar(20),				-- 감독
    genre varchar(20), 					-- 장르
    audience int,						-- 누적관객수
    mstate boolean						-- 상영여부 [ true : 상영중, false= 상영중지 ]
);

insert into movie(title,openDt,directors,genre,audience,mstate) values ('스즈메의 문단속',20230308,'신카이 마코토','애니메이션',2207371,true);
insert into movie(title,openDt,directors,genre,audience,mstate) values ('웅남이',20230322,'박성광','코미디',54783,true);
insert into movie(title,openDt,directors,genre,audience,mstate) values ('더 퍼스트 슬램덩크',20230104,'이노우에 다케히코','애니메이션',4190218,true);
insert into movie(title,openDt,directors,genre,audience,mstate) values ('소울메이트',20230315,'민용근','드라마',147846,true);
insert into movie(title,openDt,directors,genre,audience,mstate) values ('파벨만스',20230322,'스티븐 스필버그','드라마',12876,true);
insert into movie(title,openDt,directors,genre,audience,mstate) values ('모나리자와 블러드 문',20230322,'애나 릴리 아미푸르','판타지',8995,true);
insert into movie(title,openDt,directors,genre,audience,mstate) values ('에브리씽 에브리웨어 올 앳 원스',20230301,'다니엘 콴','액션',74222,true);
insert into movie(title,openDt,directors,genre,audience,mstate) values ('귀멸의 칼날: 상현집결, 그리고 도공 마을로',20230302,'소토자키 하루오','애니메이션',507505,true);
insert into movie(title,openDt,directors,genre,audience,mstate) values ('플레인',20230315,'장-프랑소 와 리셰','액션',33046,true);
insert into movie(title,openDt,directors,genre,audience,mstate) values ('아임 히어로 더 파이널',20230301,'오윤동','다큐멘터리',218529,true);

-- 영화관 테이블
drop table if exists screen;
create table screen(
	sno int auto_increment primary key,		-- 고유번호
    seat int 								-- 좌석수
);
insert into screen(seat) values (100);
insert into screen(seat) values (110);
insert into screen(seat) values (120);
insert into screen(seat) values (130);
insert into screen(seat) values (140);

-- 상영정보 테이블
drop table if exists playinglist;
create table playinglist(
	pno int auto_increment primary key,				-- 고유번호
    pstate boolean default true,					-- 예약가능상태
    pseat int default 0,							-- 현재예약좌석수
    pprice int,										-- 가격
    playtime datetime, 								-- 상영시간
	mno int,										-- 영화(FK)
    sno int,										-- 영화관번호(FK)
    foreign key (mno) references movie(mno),
    foreign key (sno) references screen(sno)
);
insert into playinglist(pprice,playtime,mno,sno) values (14000,'2023-04-01 14:00',1,1);
insert into playinglist(pprice,playtime,mno,sno) values (14000,'2023-04-02 22:00',2,2);
insert into playinglist(pprice,playtime,mno,sno) values (11000,'2023-04-03 09:30',2,3);
insert into playinglist(pprice,playtime,mno,sno) values (12000,'2023-04-04 08:40',2,4);
insert into playinglist(pprice,playtime,mno,sno) values (14000,'2023-04-05 19:20',2,5);


-- 예약 테이블
drop table if exists reservation;
create table reservation(
	rno int auto_increment primary key, -- 예약고유번호
    mno int,							-- 예약회원번호(FK)
    pno int,							-- 상영번호(FK)
	foreign key (mno) references member(mno) on delete set null,
    foreign key (pno) references playinglist(pno) on delete set null
);
insert into reservation(mno,pno) values (1,2);
insert into reservation(mno,pno) values (2,3);
insert into reservation(mno,pno) values (3,4);
insert into reservation(mno,pno) values (4,5);

select *from member;
select *from movie;
select *from screen;
select *from playinglist;
select *from reservation;


-- 게시물 테이블 [ 번호 , 영화 , 내용 , 작성일 , 작성자 , 카테고리번호 ]
create table board(
	bno			int auto_increment primary key , 
    bmovie 		varchar(1000) not null ,
    bcontent	longtext	not null ,
    bdate 		datetime default now() ,
	bscore		int not null ,
    mno			int , -- 회원번호 fk 
    foreign key ( mno ) references member( mno ) on delete set null  	-- [회원]pk가 삭제되면 게시물fk는 null 변경
);

-- select *from board;
-- select *from board where bno=2;
-- select bno , bmovie , bcontent , bdate , bscore , mno , mid from board natural join member;
-- select bno , bmovie , bcontent , bdate , bscore , mno , mid from board natural join member where bmovie="https://pedia.watcha.com/ko-KR/contents/md7YzgM";
-- select  b.bno , r.rno , r.rdate , r.rmovie , r.rindex , r.mno , r.rcontent from board b join reply r on b.bmovie="https://pedia.watcha.com/ko-KR/contents/mOgjx80" and b.bno=r.rindex;
-- select  b.bno , r.rno , r.rdate , r.rmovie , r.rindex , r.mno , r.rcontent from board b join reply r on  r.rindex=b.bno and r.rmovie like '%mOgjx80';
-- select  r.rno , r.rcontent, r.rmovie ,  r.rindex ,r.mno,  b.bno , r.rdate from board b , reply r where r.rindex=b.bno and r.rmovie='mOgjx80';

-- 댓글 테이블 [ 댓글번호 , 내용 , 작성일 , 인덱스(계층구분) , 작성자 , 게시물번호 ]
create table reply(
	rno			int auto_increment primary key , 
    rcontent	longtext , 
    rdate		datetime default now(),
    rmovie		varchar(1000) not null,
	mid  varchar(100),
	rindex		int , 
    mno			int ,
    bno			int ,
    foreign key( mno ) references member(mno) on delete set null ,
    foreign key( bno ) references board(bno) on delete cascade 
);
-- select *from reply;
-- select rno , rcontent , rmovie , rindex , mno , bno , rdate , mid from reply where bno=2;

