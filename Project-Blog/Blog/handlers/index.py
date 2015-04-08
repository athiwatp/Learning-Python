from base import BaseHandler
import fresh_tomatoes
import my_data

class IndexHandler(BaseHandler):
	def get(self):
		self.render("index.html")
		
class BlogHandler(BaseHandler):
	def get(self):
		self.render("blog.html")
	
class AssignmentHandler(BaseHandler):
	def get(self):
		self.render("assignment.html")
		
class UnitTestHandler(BaseHandler):
	def get(self):
		self.render("SpecRunner.html")
	
class MoviesHandler(BaseHandler):
	def get(self):
		self.response.write(fresh_tomatoes.rendering_movies_page(my_data.get_movies_data()))
		
class EncryptionHandler(BaseHandler):
	def get(self):
		self.write_encryption_form()
		
	def post(self):
		text = self.request.get('text')
		self.write_encryption_form(text,text.encode('rot13'))
		
class SignupHandler(BaseHandler):
	def get(self):
		self.write_sign_form()
		
	def post(self):
		name = self.request.get('name')
		password1 = self.request.get('password1')
		password2 = self.request.get('password2')
		email = self.request.get('email')
		
		error_name = ""
		error_password1 = ""
		error_password2 = ""
		error_email = ""
		
		if " " in name :
			error_name = "Please do not enter a space in your name"
		
		if not name:
			error_name = "Please enter your name"
		
		if not password1:
			error_password1 = "Please define your password"
		
		if not password2:
			if password1:
				error_password2 = "Please confirm your password"
		
		if (password1 and password2) and (password1 != password2):
			error_password1 = ""
			error_password2 = "Your password is doesn't match"
		
		if error_name is "" and error_password1 is "" and error_password2 is "" :
			if not email :
				self.redirect("/welcome?username="+name)
			else:
				if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
					error_email = "Please Enter valid email address"
					self.write_sign_form(error_name,error_password1,error_password2,error_email)
				else:
					self.redirect("/welcome?username="+name)
		else :
			self.write_sign_form(name,password1,password2,email,error_name,error_password1,error_password2,error_email)
	
class WelcomeHandler(BaseHandler):
	def get(self):
		name = self.request.get("username")
		self.response.write(my_data.get_welcome_form() % {"name":name})
		