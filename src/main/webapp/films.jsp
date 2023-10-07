<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="models.Film"%>
<%@ page import="java.util.ArrayList"%>
<!DOCTYPE html>
<html>
<head>

<meta charset="ISO-8859-1">
<title>The Movie Matrix</title>
<link rel="stylesheet" href="css/nav.css">
<link rel="stylesheet" href="css/tbl.css">
<link rel="stylesheet" href="css/forms.css">
<link rel="stylesheet" href="css/pagination.css">
<script src="javascript/jquery-3.6.3.js"></script>

<script src="javascript/page.js"></script>
<script>

</script>

</head>
<body>


  <div id="topbar">

    <div>
     <form action='FilmController' method='GET'>
    <input name='search_input' class='input1' id="search-bar" type="text" placeholder="Search...">
      <select name='search-option' id="select-movie-type">
        <option value="title">Title</option>
        <option value="stars">Stars</option>
        <option value="year">Year</option>
      </select>
     </form>
      
    </div>

    <div id="text">The Movie Matrix</div>

    <div>
    <button id="add-movie" onclick="showOverlay()">+ Add Film</button>
    </div>
  </div>

  
  <table id="table">
  
  
    <thead>
      <tr>
      <th>Movie ID</th>
      <th>Title</th>

      <th>Review</th>

      <th>Year</th>
      <th>Director</th>

      <th>Stars</th>
      <th></th>
    </tr>
    </thead>
    
<tbody>
    
	<%
		ArrayList<Film> allFilms = (ArrayList<Film>) request.getAttribute("film");
		for (Film f : allFilms) {
			out.write("<tr><td>"+f.getId()+"</td>");
			out.write("<td>"+f.getTitle()+"</td>");
			out.write("<td>"+f.getReview()+"</td>");
			out.write("<td>"+f.getYear()+"</td>");
			out.write("<td>"+f.getDirector()+"</td>");
			out.write("<td>"+f.getStars()+"</td>");
			out.write("<td><button type='button' name='delete-movie' onclick='showEditOverlay("+f.getId()+")'><img src='images/edit.png' alt='Button 1'></button>");
			out.write("<button type='submit' onclick='showDeleteOverlay("+f.getId()+")' name='delete_movie'><img src='images/delete.png' alt='Button 2'></button></td></tr>");
		}
	%>
	</tbody>
	</table>

<div id="overlay">  
  <form id='edit-movie-form' method='POST' action='InsertFilmServlet'>  
    <label for="title">Name:</label><br>
    <input type="text" id="name" name="title"><br>
    <label for="year">Year:</label><br>
    <input type="text" id="year" name="year"><br>
    <label for="director">Director:</label><br>
    <input type="text" id="director" name="director"><br>
    <label for="stars">Stars:</label><br>
    <input type="text" id="stars" name="stars"><br>
    <label for="review">Review:</label><br>
    <textarea id="review" name="review"></textarea><br>
    <button name='save_movie' type="submit">Save Movie</button>
    <button type='button' onclick='hideOverlay()'>Cancel</button>
  </form>
  </div>
  
	<div id="edit-overlay">		
		<form method='POST' action='UpdateFilmServlet'>
			<label for="edit-id">ID:</label><br> 
			<input type="text" id="edit-id" name="edit-id" readonly><br>
			<label for="title">Name:</label><br> 
			<input type="text" id="name" name="title"><br> 
			<label for="year">Year:</label><br>
			<input type="text" id="year" name="year"><br>
			<label for="director">Director:</label><br> 
			<input type="text" id="director" name="director"><br>
			<label for="stars">Stars:</label><br>
			<input type="text" id="stars" name="stars"><br> 
			<label for="review">Review:</label><br>
			<textarea id="review" name="review"></textarea><br>
			<button name='save_movie' type="submit">Save Movie</button>
			<button type='button' onclick='hideEditOverlay()'>Cancel</button>
		</form>
	</div>
	
	<div id="delete-overlay">		
		<form method='POST' action='DeleteFilmServlet'>
			<label>Are you sure you want to delete this movie?</label>
			<input type='hidden' value='' id='delete-movie-id' name='filmID'>
			<button name='delete_movie' type="submit">Continue</button>
			<button type='button' onclick='hideDeleteOverlay()'>Cancel</button>
		</form>
	</div>

		<div id="pagination">
   
</div>

	<script src="javascript/pagination.js"></script>
</body>
</html>