package model.dao.member;

import model.dao.Dao;
import model.dto.member.MemberDto;

public class MemberDao extends Dao {
	
	private static MemberDao dao = new MemberDao();
	   private MemberDao() {}
	   public static MemberDao getInstance() { return dao; }
	   
	   // 회원가입
	   public boolean signUp( MemberDto dto ) {
	      String sql = "insert member( mid , mpwd , memail , mimg ) values( ? , ? , ? , ? );";
	      try {
	         ps = con.prepareStatement(sql);
	         ps.setString(1, dto.getMid());
	         ps.setString(2, dto.getMpwd());
	         ps.setString(3, dto.getMemail());
	         ps.setString(4, dto.getMimg());
	         int count = ps.executeUpdate();
	         if (count == 1 ) { return true; }
	      } catch (Exception e) {System.out.println(e); }
	      return false;
	   }
	   
	   // 중복 아이디 검사
	   public boolean idCheck( String mid ) {
	      String sql = "select mid from member where mid = "+mid;
	      try {
	         ps = con.prepareStatement(sql);
	         rs = ps.executeQuery();
	         if ( rs.next() ) { return true; }
	      } catch (Exception e) {System.out.println(e); }
	      return false;
	      
	   }
	   
	   // 중복 이메일 검사
	   public boolean emailCheck( String memail ) {
	      String sql = "select memail from member where memail = "+memail;
	      try {
	         ps = con.prepareStatement(sql);
	         int count = ps.executeUpdate();
	         if (count == 1 ) { return true; }
	      } catch (Exception e) {System.out.println(e); }
	      return false;
	   }
	   
	   // 로그인 // mno 반환
	   public int login( String mid , String mpwd ) {
	      String sql = "select mno from member where mid = "+mid+" and mpwd ="+mpwd+";";
	      try {
	         ps = con.prepareStatement(sql);
	         rs = ps.executeQuery();
	         if ( rs.next() ) { return rs.getInt(1); }
	      } catch (Exception e) { System.out.println(e);    }
	      return 0;
	   }
	   
	   // 아이디찾기
	   public String fineid( String memail ) {
	      String sql = "select mid from member where memail = "+memail;
	      try {
	         ps = con.prepareStatement(sql);
	         rs = ps.executeQuery();
	         if (rs.next()) { return rs.getString(1); }
	      } catch (Exception e) {System.out.println(e);   }
	      return null;
	   }
	   
	   // 비밀번호찾기
	//   public boolean findpwd( String mid , String memail , String updatePwd ) {
//	      String sql = "select mno from member where mid = "+mid+" and memail = "+memail;
//	      try {
//	         ps = con.prepareStatement(sql);
//	         ps.setString(1, mid);
//	         ps.setString(2, memail);
//	         rs = ps.executeQuery();
//	         if ( rs.next() ) {
//	            
//	            sql = "update member set mpwd = "+updatePwd+" where mno = "+rs.getInt(1);
//	            ps = con.prepareStatement(sql);
//	            int result = ps.executeUpdate();
//	               if ( result == 1 ) {
//	                  new MemberDto().sendEmail( )
//	                  return true;
//	               }
//	         }
//	      } catch (Exception e) { System.out.println(e);   }
//	      return false;
	//   }

}
