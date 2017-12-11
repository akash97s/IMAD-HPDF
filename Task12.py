from flask import Flask 
app = Flask(__name__)

@app.route('/')
def hello_world():
    return '1.Leanne Graham \n 2.Ervin Howell 3.Clementine Bauch 4.Patricia Lebsack 5.Chelsey Dietrich 6.Mrs. Dennis Schulist 7.Kurtis Weissnat 8.Nicholas Runolfsdottir V 9.Glenna Reichert 10.Clementina DuBuque'

if __name__== "__main__":
    app.run()
