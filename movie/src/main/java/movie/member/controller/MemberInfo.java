package movie.member.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import movie.member.model.dao.MemberDao;
import movie.member.model.dto.MemberDto;

/**
 * Servlet implementation class MemberInfo
 */
@WebServlet("/member/info")
public class MemberInfo extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberInfo() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String mid = request.getParameter("mid"); System.out.println("mid : "+mid);
		String mpwd = request.getParameter("mpwd"); System.out.println("mpwd : "+mpwd);
		String memail = request.getParameter("memail"); System.out.println("memail : "+memail);
		String mimg = request.getParameter("mimg"); System.out.println("mimg : "+mimg);
		
		MemberDto dto = new MemberDto(mid, mpwd, memail, mimg);
		boolean result =  MemberDao.getInstance().signUp(dto);
		response.getWriter().print(result);
	}

	
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
