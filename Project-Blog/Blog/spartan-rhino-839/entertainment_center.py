import media
import fresh_tomatoes

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

#print(toy_story.storyline)
#print(avatar.storyline)
#print(worldwarz.storyline)

movies = [matrix,avatar,world_war_z,expendables,jurassic_world,star_war]

fresh_tomatoes.open_movies_page(movies)
