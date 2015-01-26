import turtle
import math

def draw_god(some_turtle):
    some_turtle.pensize(3)
    for j in range(25):
        window.colormode()
        some_turtle.pencolor(1, 0.83 - j*0.01, j*0.01)
        for i in range(20*j):
            some_turtle.forward(10)
            some_turtle.pensize(50.0/(i+1))
            some_turtle.left(-math.cos(math.pi)*i*2/j)
        some_turtle.penup()
        some_turtle.home()
        some_turtle.pendown()
        some_turtle.left(-30*j)
    some_turtle.penup()
    some_turtle.shapesize(0)
    some_turtle.home()

def draw_square(some_turtle):
    for i in range(4):
        some_turtle.forward(100)
        some_turtle.right(90)

def draw_circle(some_turtle):
    some_turtle.circle(100)

def draw_triangle(some_turtle):
    for i in range(3):
        some_turtle.forward(100)
        some_turtle.right(-120)

def draw_art():
    window = turtle.Screen()
    window.bgcolor("black")
    jack = turtle.Turtle()
    jack.shape("turtle")
    jack.color("green")
    jack.speed(0)
    draw_triangle(jack)

    for i in range(36):
        draw_triangle(jack)
        jack.right(10)

    jack.pencolor("red")
    
    for i in range(36):
        draw_square(jack)
        jack.right(10)

    jack.pencolor("yellow")
    
    for i in range(36):
        draw_circle(jack)
        jack.right(10)

    jack.pencolor("blue")
    jack.speed(2)
    jack.pensize(3)
    jack.right(90)
    jack.forward(300)
    
    window.exitonclick()


draw_art()
