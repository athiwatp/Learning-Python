import urllib

def read_text():
    my_file = open("C:\Users\Administrator\Desktop\My GitHub\Python-Project\Project-4-Detect-word\mytext.txt")
    file_content = my_file.read()
    print(file_content)
    my_file.close()
    check_rude_word(file_content)

def check_rude_word(text):
    request = urllib.urlopen("http://www.wdyl.com/profanity?q="+text)
    response = request.read()
    request.close()
    if "true" in response :
        print("This text have rude word")
    elif "false" in response :
        print("this text is OK !")
    
read_text()    
              
