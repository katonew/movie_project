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
	 
	//현재 상영중인 영화 리스트
	public ArrayList<plistDto> Playing_movie(){
		
		/* -------------------- 상영중인 영화 리스트 -------------------*/
		String sql = "select * from  playinglist";
		ArrayList<plistDto> plist = new ArrayList<>();
		
		try {
			ps=con.prepareStatement(sql);
			rs=ps.executeQuery();
			
			while (rs.next()) {
		
			// 상영중인 영화 리스트 
			plist.add( new plistDto(
						rs.getInt(1), rs.getBoolean(2), rs.getInt(3),
						rs.getInt(4), rs.getString(5), rs.getInt(6),
						rs.getInt(7)) 
						);
			}
			
			/* --------------- 상영중인 영화의 정보 리스트 ---------- */
			
			sql = "select * from movie m natural join playinglist  ";
			ArrayList<MovieDto> mlist = new ArrayList<>();
			
			ps=con.prepareStatement(sql);
			rs=ps.executeQuery();
			
			while (rs.next()) {
			// 영화 리스트 (상영중인) 
			MovieDto dto = new MovieDto(
					rs.getInt(1), rs.getString(2), rs.getString(3),
					rs.getString(4), rs.getString(5), rs.getInt(6),
					rs.getBoolean(7));
			 
			 mlist.add(dto);
			}
			
			System.out.println("mlist : "+ mlist);
			plistDto plistdto = new plistDto(mlist);
			System.out.println("plistdto  : "+plistdto);
			//리스트 맨마지막에는 영화정보가 들어있음
			plist.add( plistdto );
			
			return plist;
		} catch (SQLException e) {System.err.println(e);}
		return null;
	}
	
	
	public ArrayList<plistDto> screen_print(int mno, String s_date){
		ArrayList<plistDto> plist = new ArrayList<>();
		
		System.out.println("mno : "+mno); System.out.println("s_date : "+s_date);
		String sql ="select p.playtime ,  s.seat - p.pseat , s.sno ,s.seat"
				+ " from movie m natural join playinglist "
				+ " p natural join screen s "
				+ " where mno = "+mno +" and playtime like '%"+s_date+"%'";
		
		try {
			ps=con.prepareStatement(sql);
			rs = ps.executeQuery();
			while(rs.next()) {
				plist.add( new plistDto(
				rs.getString(1), rs.getInt(2), rs.getInt(3)
				,rs.getInt(4)));
			}
			
			return plist;
			
		}catch(Exception e) {System.err.println(e);}
		
		return null;
	}
	
	
}
