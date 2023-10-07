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
 * Servlet implementation class FilmController
 */
@WebServlet("/DeleteFilmServlet")
public class DeleteFilmServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
		if(request.getParameter("delete_movie") != null) { // If the "edit film" button has been pressed
			int id = Integer.valueOf(request.getParameter("filmID")); // Grab the ID of the film so the row can be deleted via SQL query execution
			
			FilmDAO dao = new FilmDAO();
			
			try {
				dao.deleteFilm(id); // Executes the query to delete a row with the movie id IF it exists
			} catch (SQLException e) {
				e.printStackTrace();
			}
			
			response.sendRedirect("FilmController");
			
		} 
		
	}
	

	
	

	
	
}
