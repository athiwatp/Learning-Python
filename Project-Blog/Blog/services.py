import cgi
import my_data

class UtilityService():					  
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