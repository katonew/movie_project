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
insert into playinglist(pprice,playtime,mno,sno) values (14000,'2023-04-06 14:00',1,1);
insert into playinglist(pprice,playtime,mno,sno) values (14000,'2023-04-06 22:00',1,2);
insert into playinglist(pprice,playtime,mno,sno) values (16000,'2023-04-06 09:30',1,3);
insert into playinglist(pprice,playtime,mno,sno) values (12000,'2023-04-06 08:40',1,4);
insert into playinglist(pprice,playtime,mno,sno) values (14000,'2023-04-06 19:20',1,5);


-- 예약 테이블
drop table if exists reservation;
create table reservation(
   rno int auto_increment primary key, -- 예약고유번호
   seatnum varchar(10),            -- 선택한 좌석
    mno int,                     -- 예약회원번호(FK)
    pno int,                     -- 상영번호(FK)
   foreign key (mno) references member(mno),   
    foreign key (pno) references playinglist(pno)
);
insert into reservation(mno,pno) values (1,2);
insert into reservation(mno,pno) values (2,3);
insert into reservation(mno,pno) values (3,4);
insert into reservation(mno,pno) values (4,5);

select * from reservation;

