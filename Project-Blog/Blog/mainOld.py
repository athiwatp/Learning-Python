#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import cgi
import fresh_tomatoes
import my_data
import re
import logging
# import jinja2

# def render_str(template, **params):
	# web = jinja_env.get_tmplate(template)
	# retrun web.render(params)

# class BaseHandler(webapp2.RequestHandler):
	# def render(self, html_template, **kw):
		# self.response.out.write(render_str(html_template,**kw))
		
	# def write(self, *a, **kw):
		# self.response.out.write(*a, *kw)
		

class MainHandler(webapp2.RequestHandler):
	def get(self):
		self.write_form()
	
	def post(self):
		user_day = self.request.get('day')
		user_month = self.request.get('month')
		user_year = self.request.get('year')
		
		day = self.valid_day(user_day)
		month = self.valid_month(user_month)
		year = self.valid_year(user_year)
		
		if (day and month and year):
			self.redirect("/movies")
		else :
			self.write_form("You enter invalid information",user_day,user_month,user_year)
	
	def write_form(self,error="",day="",month="",year=""):
		self.response.write(my_data.get_main_form() % { 'error': error,
									 'day' : self.escape_html(day),
									 'month' : self.escape_html(month),
									 'year' : self.escape_html(year)})
	
	def escape_html(self,html):
		return cgi.escape(html,quote = True)
	
	def valid_month(self,month):
		mm = month.lower()
		if mm in [ m.lower() for m in my_data.get_months() ]:
			return mm.title()
			
	def valid_day(self,day):
		if day and day.isdigit():
			day = int(day)
			if day > 0 and day < 30 :
				return day
				
	def valid_year(self,year):
		if year and year.isdigit():
			year = int(year)
			if year > 1900 and year < 2020:
				return year

class ResultHandler(webapp2.RequestHandler):
	def get(self):
		self.response.write(fresh_tomatoes.rendering_movies_page(my_data.get_movies_data()))
		
class EncryptionHandler(webapp2.RequestHandler):
	def write_form(self,text1 = "",text2 = ""):
		self.response.write(my_data.get_encryption_form() % { "text2" : self.escape_html(text2),
										  "text1" : self.escape_html(text1)})
	
	def escape_html(self,html):
		return cgi.escape(html,quote = True)
	
	def get(self):
		self.write_form()
		
	def post(self):
		text = self.request.get('text')
		self.write_form(text,text.encode('rot13'))
		
class SignupHandler(webapp2.RequestHandler):
	def write_form(self,name="",p1="",p2="",email="", error_name="",error_p1="",error_p2="",error_email=""):
		self.response.write(my_data.get_signup_form() % { "name":name,
														  "password1":p1,
														  "password2":p2,
														  "email":email,
														  "e_name":error_name,
														  "e_password1":error_p1,
														  "e_password2":error_p2,
														  "e_email":error_email})
	
	def get(self):
		self.write_form()
		
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
					self.write_form(error_name,error_password1,error_password2,error_email)
				else:
					self.redirect("/welcome?username="+name)
		else :
			self.write_form(name,password1,password2,email,error_name,error_password1,error_password2,error_email)
		

class WelcomeHandler(webapp2.RequestHandler):
	def get(self):
		name = self.request.get("username")
		self.response.write(my_data.get_welcome_form() % {"name":name})
		
app = webapp2.WSGIApplication([
    ('/', MainHandler),
	('/movies', ResultHandler),
	('/encrypt', EncryptionHandler),
	('/signup', SignupHandler),
	('/welcome', WelcomeHandler)
], debug=True)
