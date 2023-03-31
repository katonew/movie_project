package controller.board;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import model.dao.board.BwriteDao;
import model.dto.board.BoardDto;

/**
 * Servlet implementation class Bwrite
 */
@WebServlet("/Board/Bwrite")
public class Bwrite extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Bwrite() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		
		String bmovie = request.getParameter("bmovie");
		System.out.println("bmovie : " + bmovie);
		
		ArrayList<BoardDto> list =  BwriteDao.getInstane().bprint(bmovie);
		System.out.println(list);
		
		// java 형식 ---> js형식 
		ObjectMapper mapper = new ObjectMapper();
		String jsonArray = mapper.writeValueAsString( list );
		// 응답
		System.out.println("jsonArray : " + jsonArray);
		response.setContentType("applcation/json");
		response.getWriter().print( jsonArray );
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		
		
		int mno = Integer.parseInt(request.getParameter("mno"));
		String bmovie = request.getParameter("bmovie");
		String bcontent = request.getParameter("bcontent");
		int bscore = Integer.parseInt(request.getParameter("bscore"));
		
		System.out.println(mno + bcontent + bscore + "||"+ bmovie);
		BoardDto dto = new BoardDto(bmovie, bcontent, bscore, mno);
		System.out.println(dto);
		boolean result = BwriteDao.getInstane().bwrite(dto);
		
		response.getWriter().print(result);
		
		
		
	}

}





































