package controller.reservation;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import model.dao.reservation.rmovieDao;
import model.dto.reservation.plistDto;



/**
 * Servlet implementation class playingmoive
 */
@WebServlet("/playing/moive")
public class pmovie extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public pmovie() {super();}


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ArrayList<plistDto> result = rmovieDao.getInstance().Playing_movie();
		
		System.out.println("result : "+result);
		ObjectMapper objMapper = new ObjectMapper(); 
		 
		String jsonArray = objMapper.writeValueAsString(result); 
	
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json"); 
		response.getWriter().print(jsonArray ); 
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		}


	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		}

	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

}
