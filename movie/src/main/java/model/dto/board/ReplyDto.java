package model.dto.board;

public class ReplyDto {

	private int rno;
	private String rcontent;
	private String rmovie;
	private int rindex;
	private int mno;
	private int bno;
	private String rdate;
	
	
	
	
	
	
	public ReplyDto(String rcontent, String rmovie, int rindex, int mno, int bno) {
		super();
		this.rcontent = rcontent;
		this.rmovie = rmovie;
		this.rindex = rindex;
		this.mno = mno;
		this.bno = bno;
	}





	// 등록생성자
	public ReplyDto(String rcontent, String rmovie, int mno, int bno) {
		super();
		this.rcontent = rcontent;
		this.rmovie = rmovie;
		this.mno = mno;
		this.bno = bno;
	}





	// 풀생성자
	public ReplyDto(int rno, String rcontent, String rmovie, int rindex, int mno, int bno, String rdate) {
		super();
		this.rno = rno;
		this.rcontent = rcontent;
		this.rmovie = rmovie;
		this.rindex = rindex;
		this.mno = mno;
		this.bno = bno;
		this.rdate = rdate;
	}






	public ReplyDto() {
		super();
		// TODO Auto-generated constructor stub
	}






	public int getRno() {
		return rno;
	}






	public void setRno(int rno) {
		this.rno = rno;
	}






	public String getRcontent() {
		return rcontent;
	}






	public void setRcontent(String rcontent) {
		this.rcontent = rcontent;
	}






	public String getRmovie() {
		return rmovie;
	}






	public void setRmovie(String rmovie) {
		this.rmovie = rmovie;
	}






	public int getRindex() {
		return rindex;
	}






	public void setRindex(int rindex) {
		this.rindex = rindex;
	}






	public int getMno() {
		return mno;
	}






	public void setMno(int mno) {
		this.mno = mno;
	}






	public int getBno() {
		return bno;
	}






	public void setBno(int bno) {
		this.bno = bno;
	}






	public String getRdate() {
		return rdate;
	}






	public void setRdate(String rdate) {
		this.rdate = rdate;
	}


	
}