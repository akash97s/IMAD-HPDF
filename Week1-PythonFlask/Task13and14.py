from flask import Flask, render_template, request, make_response
app = Flask(__name__)

@app.route('/')
def index():
   return render_template('index1.html')

@app.route('/setcookie', methods = ['POST', 'GET'])
def setcookie():
   if request.method == 'POST':
    name = request.form['nm1']
    age=request.form['nm2']
    
   resp = make_response(render_template('readcookie.html'))
   resp.set_cookie('name', name)
   resp.set_cookie('age', age)
   
   return resp

@app.route('/getcookie')
def getcookie():
   name = request.cookies.get('name')
   age = request.cookies.get('age')
   return '<h1>Name: '+name+'</h1><br><h1>Age:'+age+'</h1>'

if __name__ == '__main__':
   app.run(debug = True)
