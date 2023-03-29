package model.dto.reservation;

public class reservationDto {

	private int rno; // 예약고유번호
	private int mno; //	예약회원번호(FK)
	private int pno; //	 상영번호(FK)	
	
	
	public reservationDto(int rno, int mno, int pno) {
		super();
		this.rno = rno;
		this.mno = mno;
		this.pno = pno;
	}


	public int getRno() {
		return rno;
	}


	public void setRno(int rno) {
		this.rno = rno;
	}


	public int getMno() {
		return mno;
	}


	public void setMno(int mno) {
		this.mno = mno;
	}


	public int getPno() {
		return pno;
	}


	public void setPno(int pno) {
		this.pno = pno;
	}


	@Override
	public String toString() {
		return "reservationDto [rno=" + rno + ", mno=" + mno + ", pno=" + pno + "]";
	}
	
	
	
	
}
