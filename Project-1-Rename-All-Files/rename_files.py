import os

def rename_file():
    # get all file name
    file_list = os.listdir(r"C:\Users\Administrator\Desktop\My GitHub\Python-Project\Project-1-Rename-All-Files\prank")
    current_path = os.getcwd()
    print("Current path is "+current_path)
    os.chdir(r"C:\Users\Administrator\Desktop\My GitHub\Python-Project\Project-1-Rename-All-Files\prank")
    current_path = os.getcwd()
    print("Current path is "+current_path)
    #rename each file
    for file_name in file_list:
        print("Old name = "+file_name)
        print("New name = ")+file_name.translate(None,"0123456789")
        os.rename(file_name,file_name.translate(None,"0123456789"))

rename_file()
        
