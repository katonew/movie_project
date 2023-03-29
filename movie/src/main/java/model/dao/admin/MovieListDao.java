package model.dao.admin;

import java.sql.ResultSet;
import java.util.ArrayList;

import model.dao.Dao;
import model.dto.admin.MovieDto;
import model.dto.admin.MovieListDto;

public class MovieListDao extends Dao{
	
	// 싱글톤
	private static MovieListDao dao = new MovieListDao();
	private MovieListDao() {};
	public static MovieListDao getInstance() {return dao;}
	 
	// 상영중인 모든 영화 가져오기
	public ArrayList<MovieListDto> getallmovielist(){
		ArrayList<MovieListDto> list = new ArrayList<>();
		try {
			String sql = "select p.*, m.title from playinglist p natural join movie m;";
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while(rs.next()) {
				MovieListDto dto = new MovieListDto(
						rs.getInt(1), rs.getBoolean(2), rs.getInt(3), 
						rs.getInt(4), rs.getString(5), rs.getInt(6), rs.getInt(7),rs.getString(8));
				dto.setRseat(getScreenSeat(rs.getInt(7))-rs.getInt(3));
				list.add(dto);
			}
		} catch (Exception e) {
			System.out.println("getallmovielist 오류 : "+e);
		}
		return list;
	} // getallmovielist e
	
	// 선택된 시간 이후의 상영정보 가져오기
	public ArrayList<MovieListDto> gettimemovielist(String selectday){
		ArrayList<MovieListDto> list = new ArrayList<>();
		try {
			String sql = "select p.*, m.title from playinglist p natural join movie m where playtime>= ?";
			ps = con.prepareStatement(sql);
			ps.setString(1, selectday);
			rs = ps.executeQuery();
			while(rs.next()) {
				MovieListDto dto = new MovieListDto(
						rs.getInt(1), rs.getBoolean(2), rs.getInt(3), 
						rs.getInt(4), rs.getString(5), rs.getInt(6), rs.getInt(7), rs.getString(8));
				// 상영관의 좌석수를 가져온 후 예약 된 수량을 가져와 남은 좌석 수를 저장
				dto.setRseat(getScreenSeat(rs.getInt(7))-rs.getInt(3));
				list.add(dto);
			}
		} catch (Exception e) {
			System.out.println("getallmovielist 오류 : "+e);
		}
		return list;
	}
	// 영화관의 좌석 수 가져오기
	public int getScreenSeat(int sno) {
		String sql = "select seat from screen where sno = " + sno;
		try {
			ps = con.prepareStatement(sql);
			ResultSet rs2 = ps.executeQuery();
			if(rs2.next()) {return rs2.getInt(1);}
		} catch (Exception e) {
			System.out.println("getScreenSeat 오류 : "+e);
		}
		return 0;
	}
	
	// 영화 상영정보 등록하기
	public boolean newplayinglist(int pprice,String playtime,int mno,int sno) {
		String sql = "insert into playinglist(pprice,playtime,mno,sno) value(?,?,?,?)";
		try {
			ps = con.prepareStatement(sql);
			ps.setInt(1, pprice);
			ps.setString(2, playtime);
			ps.setInt(3, mno);
			ps.setInt(4, sno);
			int count = ps.executeUpdate();
			if(count==1) {return true;}
		} catch (Exception e) {
			System.out.println("newplayinglist 오류 : "+e);
		}
		return false;
	}
	

}
