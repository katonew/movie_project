package model.dto.reservation;

import java.util.ArrayList;

import model.dto.admin.MovieDto;

public class plistDto {
	private int pno; 			// 고유번호
    private boolean pstate;  		//예약가능상태
    private int pseat;			// 현재예약좌석수
    private int pprice; 		//가격
    private String playtime; 	// 상영시간
	private int mno;			//영화(FK)
    private int sno;			//영화관번호(FK)
    
    private ArrayList<MovieDto> mlist; //영화 리스트
    
    
    
    
    
    //전체생성자
	public plistDto(int pno, boolean pstate, int pseat, int pprice, String playtime, int mno, int sno,
			ArrayList<MovieDto> mlist) {
		super();
		this.pno = pno;
		this.pstate = pstate;
		this.pseat = pseat;
		this.pprice = pprice;
		this.playtime = playtime;
		this.mno = mno;
		this.sno = sno;
		this.mlist = mlist;
	}
	
	
	
	
	public plistDto(int pno, boolean pstate, int pseat, int pprice, String playtime, int mno, int sno) {
		super();
		this.pno = pno;
		this.pstate = pstate;
		this.pseat = pseat;
		this.pprice = pprice;
		this.playtime = playtime;
		this.mno = mno;
		this.sno = sno;
	}




	@Override
	public String toString() {
		return "plistDto [pno=" + pno + ", pstate=" + pstate + ", pseat=" + pseat + ", pprice=" + pprice + ", playtime="
				+ playtime + ", mno=" + mno + ", sno=" + sno + ", mlist=" + mlist + "]";
	}




	public int getPno() {
		return pno;
	}
	public void setPno(int pno) {
		this.pno = pno;
	}
	public boolean getPstate() {
		return pstate;
	}
	public void setPstate(boolean pstate) {
		this.pstate = pstate;
	}
	public int getPseat() {
		return pseat;
	}
	public void setPseat(int pseat) {
		this.pseat = pseat;
	}
	public int getPprice() {
		return pprice;
	}
	public void setPprice(int pprice) {
		this.pprice = pprice;
	}
	public String getPlaytime() {
		return playtime;
	}
	public void setPlaytime(String playtime) {
		this.playtime = playtime;
	}
	public int getMno() {
		return mno;
	}
	public void setMno(int mno) {
		this.mno = mno;
	}
	public int getSno() {
		return sno;
	}
	public void setSno(int sno) {
		this.sno = sno;
	}
    
    
}
