from flask import Flask, abort, redirect, url_for
app = Flask(__name__)

@app.route('/')
def index():
    return redirect(url_for('robots'))

@app.route('/robots')
def robots():
    abort(401)
    this_is_never_executed()

if __name__ == '__main__':
   app.run(debug = True)
