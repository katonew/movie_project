package model.dao.member;

import java.sql.ResultSet;
import java.util.ArrayList;

import model.dao.Dao;
import model.dto.member.MovieDto;
import model.dto.member.PlayinglistDto;
import model.dto.member.ReservationDto;
import model.dto.member.ScreenDto;

public class MypageDao extends Dao {
	
	private static MypageDao dao = new MypageDao();
	private MypageDao() { 	}
	public static MypageDao getInstance() {
		return dao;
	}
	
	// 주문번호 불러오기
	public ArrayList<ReservationDto> getRnoPnoMno(int mno ) {
		ArrayList<ReservationDto> rlist = new ArrayList<>();
		String sql = "select * from reservation where mno = "+mno;
		try {
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			while ( rs.next() ) {
				// rdto의 rno / seatnum / mno / pno 필드 값 넣기
				ReservationDto rdto = new ReservationDto(rs.getInt(1), rs.getString(2), rs.getInt(3), null);
				
				// rdto의 마지막필드 상영정보dto plistdto의 필드값 넣기
				sql = "select * from playinglist where pno = "+rs.getInt(4);
				ps = con.prepareStatement(sql);
				ResultSet rs2 = ps.executeQuery();
				if ( rs2.next() ) {
					rdto.setPlistdto(new PlayinglistDto(rs2.getInt(1), rs2.getBoolean(2), rs2.getInt(3), rs2.getInt(4), rs2.getString(5), null, null));
					// plistdto의 6번째필드 MovieDto의 필드값 넣기
					sql = "select * from movie where mno = "+rs2.getInt(6);
					ps = con.prepareStatement(sql);
					ResultSet rs3 = ps.executeQuery();
					if ( rs3.next() ) {
						rdto.getPlistdto().setMoviedto( new MovieDto(rs3.getInt(1), rs3.getString(2), rs3.getString(3), rs3.getString(4), rs3.getString(5), rs3.getInt(6), rs3.getBoolean(7)) );
					}
					// plistdto 7번째필드 ScreenDto의 필드값 넣기
					sql = "select * from screen where sno = "+rs3.getInt(7);
					ps = con.prepareStatement(sql);
					rs3 = ps.executeQuery();
					if ( rs3.next() ) {
						rdto.getPlistdto().setScreendto(new ScreenDto(rs3.getInt(1), rs3.getInt(2)));
					}
				}// plistdto 필드값 넣기 끝
				// rdto(ReservationDto) 다 만들어졌으니 rlist에 add
				rlist.add(rdto);
			}
		} catch (Exception e) { System.out.println(e); 	}
		return rlist;
	}
}
