package model.dto.board;

public class SearchDto {
	private String title;
	private String content;
	private String pimg;
	private String count;
	private String link;
	
	
	public SearchDto() {
		super();
		// TODO Auto-generated constructor stub
	}


	public SearchDto(String title, String pimg, String count, String link) {
		super();
		this.title = title;
		this.pimg = pimg;
		this.count = count;
		this.link = link;
	}


	public SearchDto(String title, String content, String pimg, String count, String link) {
		super();
		this.title = title;
		this.content = content;
		this.pimg = pimg;
		this.count = count;
		this.link = link;
	}


	@Override
	public String toString() {
		return "SearchDto [title=" + title + ", content=" + content + ", pimg=" + pimg + ", count=" + count + ", link="
				+ link + "]";
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}


	public String getPimg() {
		return pimg;
	}


	public void setPimg(String pimg) {
		this.pimg = pimg;
	}


	public String getCount() {
		return count;
	}


	public void setCount(String count) {
		this.count = count;
	}


	public String getLink() {
		return link;
	}


	public void setLink(String link) {
		this.link = link;
}
}