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

-- 영화 테이블
drop table if exists movie;
create table movie(
	mno	int auto_increment primary key,	-- 영화번호
	title varchar(20),					-- 영화제목
    openDt date,						-- 개봉일
    directors varchar(20),				-- 감독
    genre varchar(20), 					-- 장르
    audience int,						-- 누적관객수
    mstate boolean						-- 상영여부 [ true : 상영중, false= 상영중지 ]
);

-- 영화관 테이블
drop table if exists screen;
create table screen(
	sno int auto_increment primary key,		-- 고유번호
    seat int 								-- 좌석수
);

-- 상영정보 테이블
drop table if exists playinglist;
create table playinglist(
	pno int auto_increment primary key,				-- 고유번호
    pstate boolean, 								-- 예약가능상태
    pseat int, 										-- 현재예약좌석수
    pprice int,										-- 가격
    playtime datetime, 								-- 상영시간
	mno int,										-- 영화(FK)
    sno int,										-- 영화관번호(FK)
    foreign key (mno) references movie(mno),
    foreign key (sno) references screen(sno)
);


-- 예약 테이블
drop table if exists reservation;
create table reservation(
	rno int auto_increment primary key, -- 예약고유번호
    mno int,							-- 예약회원번호(FK)
    pno int,							-- 상영번호(FK)
	foreign key (mno) references member(mno),
    foreign key (pno) references playinglist(pno)
);
    
-- 좌석 테이블
create table seats(
	seat varchar(10),			# 좌석
	rno int,					# 예약번호 fk - (예약된 좌석 찾기위함)
	foreign key (rno) references reservation(rno)
);
select * from seats;