package model.dao.admin;

import java.util.ArrayList;

import model.dao.Dao;
import model.dto.admin.MovieDto;

public class MovieDao extends Dao{
	
	// 싱글톤
	private static MovieDao dao = new MovieDao();
	private MovieDao() {};
	public static MovieDao getInstance() {return dao;}
	
	public ArrayList<MovieDto> getplayingmovie(){
		ArrayList<MovieDto> list = new ArrayList<>();
		String sql = "select *from movie where mstate = true ";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while(rs.next()) {
				MovieDto dto = new MovieDto(
						rs.getInt(1), rs.getString(2), rs.getString(3), 
						rs.getString(4), rs.getString(5), rs.getInt(6), 
						rs.getBoolean(7));
				list.add(dto);
			}
		} catch (Exception e) {
			System.out.println("getplayingmovie 오류 : " + e);
		}
		return list;
	} // getplayingmovie e
	
	// 영화번호로 영화 정보 가져오기
	public MovieDto getMovie(int mno) {
		String sql = "select *from movie where mno = ? ";
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			if(rs.next()) {
				MovieDto dto = new MovieDto(
						rs.getInt(1), rs.getString(2), rs.getString(3), 
						rs.getString(4), rs.getString(5), rs.getInt(6), 
						rs.getBoolean(7));
				return dto;
			}
		} catch (Exception e) {
			System.out.println("getMovie 오류 : " + e);
		}
		return null;
	} // getMovie e
	
} // class e