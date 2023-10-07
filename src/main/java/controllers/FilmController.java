package controllers;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import database.FilmDAO;

import models.Film;

/**
 * Servlet implementation class FilmController
 */
@WebServlet("/FilmController")
public class FilmController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		FilmDAO dao = new FilmDAO();
		String option = request.getParameter("search-option");

		if (request.getParameter("search_input") != null) { // Button function that responds when the "cancel" button
															// has been pressed

			String input = request.getParameter("search_input");


			if (option.equals("title")) {
				System.out.println("Title");
				ArrayList<Film> titleFilm = dao.getFilmByTitle(input);
				request.setAttribute("film", titleFilm);

				RequestDispatcher rd = request.getRequestDispatcher("films.jsp");
				rd.include(request, response);
				response.setContentType("text/html");
			} else if (option.equals("stars")) {
				ArrayList<Film> titleFilm = dao.getFilmByStar(input);
				request.setAttribute("film", titleFilm);

				RequestDispatcher rd = request.getRequestDispatcher("films.jsp");
				rd.include(request, response);
				response.setContentType("text/html");
			} else if (option.equals("year")) {
				int year = Integer.parseInt(input);
				ArrayList<Film> titleFilm = dao.getFilmByYear(year);
				request.setAttribute("film", titleFilm);

				RequestDispatcher rd = request.getRequestDispatcher("films.jsp");
				rd.include(request, response);
				response.setContentType("text/html");
			}

		} else {

			ArrayList<Film> allFilms = dao.getAllFilms();
			request.setAttribute("film", allFilms);
			RequestDispatcher rd = request.getRequestDispatcher("films.jsp");
			rd.include(request, response);
			response.setContentType("text/html");

		}

	}

}
