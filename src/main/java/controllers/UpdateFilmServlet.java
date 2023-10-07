package controllers;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import database.FilmDAO;

/**
 * Servlet implementation class UpdateFilmServlet
 */
@WebServlet("/UpdateFilmServlet")
public class UpdateFilmServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		FilmDAO dao = new FilmDAO();

		// Information below is passed through the edit_film.jsp website via form (grabs
		// all movie information e.g. id, title, year etc..)
		int id = Integer.valueOf(request.getParameter("edit-id"));
		String title = request.getParameter("title");
		int year = Integer.valueOf(request.getParameter("year"));
		String director = request.getParameter("director");
		String stars = request.getParameter("stars");
		String review = request.getParameter("review");

		try {
			dao.editFilm(id, title, year, director, stars, review);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		//RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("FilmController");
		//dispatcher.forward(request, response);

		response.sendRedirect("FilmController");
	}

}
