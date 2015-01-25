import time
import webbrowser

allBreak = 5
breakCount = 0

print("This break started on >> " + time.ctime())
while(breakCount != allBreak ):
    time.sleep(10)
    webbrowser.open("https://www.youtube.com/watch?v=talrnDhYZuI")
    breakCount = breakCount+1
