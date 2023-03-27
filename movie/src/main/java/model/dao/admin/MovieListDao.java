package model.dao.admin;

import model.dao.Dao;

public class MovieListDao extends Dao{
	
	// 싱글톤
	private static MovieListDao dao = new MovieListDao();
	private MovieListDao() {};
	public static MovieListDao getInstance() {return dao;}
	 
	

}
