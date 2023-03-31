package controller.reservation;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import model.dao.reservation.rmovieDao;
import model.dto.reservation.plistDto;

/**
 * Servlet implementation class ticket
 */
@WebServlet("/ticket")
public class ticket extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public ticket() { super();}


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int pno = Integer.parseInt( request.getParameter("pno"));
		
		plistDto dto = rmovieDao.getInstance().plist_print(pno);
		  
		ObjectMapper objMapper = new ObjectMapper(); String jsonArray =
		objMapper.writeValueAsString(dto);
		  
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/json"); // 전달[전송]타입을 json 명시
		response.getWriter().print(jsonArray ); // 변환된 json형식의 문자열 전달
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

}
