import webapp2
import jinja2
import os
import services
import my_data

template_dir = os.path.join(os.path.dirname(__file__), '../templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir), autoescape = True)
utils = services.UtilityService()

class BaseHandler(webapp2.RequestHandler):
	def write(self, *a, **kw):
		self.response.out.write(*a,**kw)
		
	def render_str(self, template, **params):
		t = jinja_env.get_template(template)
		return t.render(params)
		
	def render(self, template, **kw):
		self.write(self.render_str(template,**kw))
	
	def write_sign_form(self,name="",p1="",p2="",email="", error_name="",error_p1="",error_p2="",error_email=""):
		self.response.write(my_data.get_signup_form() % { "name":name,
														  "password1":p1,
														  "password2":p2,
														  "email":email,
														  "e_name":error_name,
														  "e_password1":error_p1,
														  "e_password2":error_p2,
														  "e_email":error_email})
	
	def write_encryption_form(self,text1 = "",text2 = ""):
		self.response.write(my_data.get_encryption_form() % { "text2" : utils.escape_html(text2),
										  "text1" : utils.escape_html(text1)})
		
