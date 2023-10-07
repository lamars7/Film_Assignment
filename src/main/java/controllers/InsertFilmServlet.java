package controllers;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import database.FilmDAO;
import models.Film;

/**
 * Servlet implementation class InsertFilmServlet
 */
@WebServlet("/InsertFilmServlet")
public class InsertFilmServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		if (request.getParameter("save_movie") != null) {
			
			String title = request.getParameter("title");
			int year = Integer.valueOf(request.getParameter("year"));
			String director = request.getParameter("director");
			String stars = request.getParameter("stars");
			String review = request.getParameter("review");

			FilmDAO dao = new FilmDAO();
			Film film = new Film(title,year,director,stars,review);
			
			
			try {
				dao.addFilm(film);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		
		response.sendRedirect("FilmController");
		}
	}

}
