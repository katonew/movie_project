package model.dao.admin;

import java.util.ArrayList;

import model.dao.Dao;
import model.dto.admin.MovieDto;
import model.dto.admin.MovieListDto;

public class MovieListDao extends Dao{
	
	// 싱글톤
	private static MovieListDao dao = new MovieListDao();
	private MovieListDao() {};
	public static MovieListDao getInstance() {return dao;}
	 
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
				list.add(dto);
			}
		} catch (Exception e) {
			System.out.println("getallmovielist 오류 : "+e);
		}
		return list;
	} // getallmovielist e
	
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
				list.add(dto);
			}
		} catch (Exception e) {
			System.out.println("getallmovielist 오류 : "+e);
		}
		return list;
	}

}
