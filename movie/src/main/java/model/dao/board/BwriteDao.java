package model.dao.board;

import java.util.ArrayList;

import model.dao.Dao;
import model.dto.board.BoardDto;

public class BwriteDao extends Dao{
	
	private static BwriteDao dao = new BwriteDao();
	private BwriteDao() {}
	public static BwriteDao getInstane() {return dao;};
	
	
	public boolean bwrite(BoardDto dto) {
		String sql = "insert into board(bmovie , bcontent , bscore , mno) values(?,?,?,?)";
		
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, dto.getBmovie());
			ps.setString(2, dto.getBcontent());
			ps.setInt(3, dto.getBscore());
			ps.setInt(4, dto.getMno());
			ps.executeUpdate();
			return true;
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		return false;
	}
	
	public ArrayList<BoardDto> bprint(String bmovie){
		ArrayList<BoardDto> list = new ArrayList<>();
		String sql = "select bno , bmovie , bcontent , bdate , bscore , mno , mid from board natural join member where bmovie=?";
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, bmovie);
			rs = ps.executeQuery();
			while(rs.next()) {
				BoardDto dto = new BoardDto(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getInt(5), rs.getInt(6), rs.getString(7));
				list.add(dto);
			}
			
		} catch (Exception e) {System.out.println("e" + e);
			// TODO: handle exception
		}
		System.out.println("Dao bprint : " + list);
		return list;
	}
	
}




































