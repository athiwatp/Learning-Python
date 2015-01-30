import media

def get_months():
	return ['January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December']

def get_movies_data():
	matrix = media.Movie("The Matrix",
                        "computer theory",
                        "http://fc01.deviantart.net/fs38/i/2008/350/2/e/The_Matrix_Movie_Poster_by_willeyh.jpg",
                        "https://www.youtube.com/watch?v=Es2uYtSJh-Y")

	avatar = media.Movie("Avatar",
						 "A marine on an alien planet",
						 "http://img.csfd.cz/files/images/user/profile/158/793/158793312_ccecbe.jpg",
						 "https://www.youtube.com/watch?v=EDqME8RzVSk")

	world_war_z = media.Movie("World War Z",
						 "A zombies world",
						 "http://www.aceshowbiz.com/images/still/world-war-z-poster03.jpg",
						 "https://www.youtube.com/watch?v=rAt7VP0B1OI")

	expendables = media.Movie("The Expendables 3",
								"shoot em up",
								"http://www.theexpendablesmovie.net/images/expendables3-poster1.jpg",
								"https://www.youtube.com/watch?v=VqBysPjVMJM")

	jurassic_world = media.Movie("Jurassic World",
								 "Dinosuars !!!!!!!",
								 "http://cdn.screenrant.com/wp-content/uploads/Jurassic-World-Poster-Official.jpg",
								 "https://www.youtube.com/watch?v=bvu-zlR5A8Q")

	star_war = media.Movie("Star War : Episode VII",
						   "about the space knight that use the force to be a power",
						   "http://s3-ec.buzzfed.com/static/2013-11/enhanced/webdr05/27/10/enhanced-buzz-12375-1385567634-17.jpg",
						   "https://www.youtube.com/watch?v=OMOVFvcNfvE")
						   
	return [matrix,avatar,world_war_z,expendables,jurassic_world,star_war]
	
def get_main_form():
	return """<form method="post" action="/">
				<h2>Enter your birthday to see the miracle !!!</h2>
				Day(digit) : <input type="text" name="day" value="%(day)s">
				Month : <select name="month">
							<option>January</option>
							<option>Febuary</option>
							<option>March</option>
							<option>April</option>
							<option>May</option>
							<option>June</option>
							<option>July</option>
							<option>August</option>
							<option>September</option>
							<option>October</option>
							<option>November</option>
							<option>December</option>
						</select>
				Year : <input type="text" name="year" value="%(year)s">
				<div style="color:red">%(error)s</div>
				<br><br>
				<input type="submit">
		  </form>
		  <br>
		  <br>
		  <h2>Main menu</h2>
		  <ul>
			<li><a href="/movies">Movies</a></li>
		  	<li><a href="/signup">Sign Up</a></li>
		  	<li><a href="/encrypt">Rot13 Encrypt Text</a></li>
		  </ul>
		  """

def get_encryption_form():
	return """<form method="post" action="/encrypt">
					<h2>Enter text to see encryption result of rot 13</h2>
					<input type="text" name="text" value="%(text1)s"> : <span style="color:green;font-weight:bold;">%(text2)s</span>
					<br><br>
					<input type="submit">
				</form>"""

def get_signup_form():
	return """<form method="post" action="/signup">
				<h2>Complete the form to sign up</h2>
				<table>
					<tr>
						<td style="text-align:right;">Name : </td>
						<td><input type="text" name="name" value="%(name)s"></td>
						<td><span style="color:red;">%(e_name)s</span></td>
					</tr>
					<tr>
						<td style="text-align:right;">Pasworrd :</td>
						<td><input type="password" name="password1" value="%(password1)s"></td>
						<td><span style="color:red;">%(e_password1)s</span></td>
					</tr>
					<tr>
						<td style="text-align:right;">Confirm Password : </td>
						<td><input type="password" name="password2" value="%(password2)s"></td>
						<td><span style="color:red;">%(e_password2)s</span></td>
					</tr>
					<tr>
						<td style="text-align:right;">Email(optional) : </td>
						<td><input type="email" name="email" value="%(email)s"></td>
						<td><span style="color:red;">%(e_email)s</span></td>
					</tr>
					<tr>
						<td></td>
						<td style="text-align:right;"><input type="submit" value="Signup"></td>
						<td></td>
					</tr>
				</table
			  </form>
			"""
			
def get_welcome_form():
	return """ <h1>Welcome, %(name)s !<h1>"""