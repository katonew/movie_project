package model.dto.member;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class MemberDto {
	private int mno;
    private String mid;
    private String mpwd;
    private String memail;
    private String mimg;
    
    // 1. 이메일 전송 메소드
    public boolean sendEmail( String toemail , String updatePwd ) {
    	
    	// 1. 보내는 사람 이메일 정보
    	final String username = "movieproject2023@gmail.com"; // 이메일
        final String password = "movieproject1!"; // 비번

        Properties prop = new Properties();
		prop.put("mail.smtp.host", "smtp.gmail.com");
        prop.put("mail.smtp.port", "587");
        prop.put("mail.smtp.auth", "true");
        prop.put("mail.smtp.starttls.enable", "true"); //TLS
        
        Session session = Session.getInstance(prop,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(username, password);
                    }
                });

        try {

            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress( username )); // 보내는 이메일
            message.setRecipients(
                    Message.RecipientType.TO,
                    InternetAddress.parse(toemail) // 수업때는 new InternetAddress( toEmail )
            );
            message.setSubject("CINEVERSE 임시 비밀번호");
            message.setText("임시비밀번호 : "+updatePwd);

            Transport.send(message);
            System.out.println("Done");
            return true; // 전송성공

            

        } catch (MessagingException e) {
            e.printStackTrace();
        }return false; // 전송실패 
    	
    	
    }
    
    public MemberDto() {
      // TODO Auto-generated constructor stub
   }
    // 풀생성자
   public MemberDto(int mno, String mid, String mpwd, String memail, String mimg) {
      super();
      this.mno = mno;
      this.mid = mid;
      this.mpwd = mpwd;
      this.memail = memail;
      this.mimg = mimg;
   }
   
   //회원가입용 생성자
   public MemberDto(String mid, String mpwd, String memail, String mimg) {
      super();
      this.mid = mid;
      this.mpwd = mpwd;
      this.memail = memail;
      this.mimg = mimg;
   }
   
   @Override
   public String toString() {
      return "MemberDto [mno=" + mno + ", mid=" + mid + ", mpwd=" + mpwd + ", memail=" + memail + ", mimg=" + mimg
            + "]";
   }

   
   public int getMno() {
      return mno;
   }

   public void setMno(int mno) {
      this.mno = mno;
   }

   public String getMid() {
      return mid;
   }

   public void setMid(String mid) {
      this.mid = mid;
   }

   public String getMpwd() {
      return mpwd;
   }

   public void setMpwd(String mpwd) {
      this.mpwd = mpwd;
   }

   public String getMemail() {
      return memail;
   }

   public void setMemail(String memail) {
      this.memail = memail;
   }

   public String getMimg() {
      return mimg;
   }

   public void setMimg(String mimg) {
      this.mimg = mimg;
   }

}
