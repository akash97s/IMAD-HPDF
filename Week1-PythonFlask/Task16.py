from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hey():
    return 'Home Page'

@app.route('/image')
def image():
   return render_template('image.html')

@app.route('/html')
def html():
   return render_template('html.html')

if __name__ == '__main__':
   app.run(debug = True)
