package model.dao.reservation;

import java.sql.SQLException;
import java.util.ArrayList;

import model.dao.Dao;
import model.dto.admin.MovieDto;
import model.dto.reservation.plistDto;

public class rmovieDao extends Dao{
	private static rmovieDao rdao = new rmovieDao();
	private rmovieDao() {};
	public static rmovieDao getInstance() {return rdao;}
	 
	//현재 상영중인 영화 전체 출력
	public ArrayList<plistDto> Playing_movie(){
		
		String sql = "select * from movie m natural join playinglist p ";
		ArrayList<plistDto> plist = new ArrayList<>();
		ArrayList<MovieDto> mlist = new ArrayList<>();
		
		try {
			ps=con.prepareStatement(sql);
			rs=ps.executeQuery();
			
			while (rs.next()) {
			// 영화 리스트 (상영중인) (영화리스트를 추출한뒤 해야됨)
			mlist.add( new MovieDto(
					rs.getInt(1), rs.getString(2), rs.getString(3),
					rs.getString(4), rs.getString(5), rs.getInt(6),
					rs.getBoolean(7))
					);
			
			// 상영중인 영화 리스트
			
			plist.add( new plistDto(
						rs.getInt(8), rs.getBoolean(9), rs.getInt(10),
						rs.getInt(11), rs.getString(12), rs.getInt(1),
						rs.getInt(13)) 
						);
			}
			return plist;
		} catch (SQLException e) {System.err.println(e);}
		return null;
	}
}
