package controller.admin;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import model.dao.admin.MovieListDao;
import model.dto.admin.MovieListDto;


@WebServlet("/admin/movieList")
public class MovieList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public MovieList() {
        super();       
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String type = request.getParameter("type");
		System.out.println("type : " + type);
		ArrayList<MovieListDto> result = null;
		if(type.equals("1")) {
			result = MovieListDao.getInstance().getallmovielist();
		}else if(type.equals("2")) {
			String selectday = request.getParameter("selectday");
			result = MovieListDao.getInstance().gettimemovielist(selectday);
		}else if(type.equals("3")) {
			
		}
		ObjectMapper mapper = new ObjectMapper();
		String json= mapper.writeValueAsString(result);
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json");
		response.getWriter().print(json);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
