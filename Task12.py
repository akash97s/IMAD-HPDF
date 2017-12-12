from flask import Flask
import requests
app = Flask(__name__)

@app.route('/')
def home():
    return '<h1>Hey!!!I am Akash!</h1>'

@app.route('/authors', methods=['GET'])
def authors():
    data = requests.get('https://jsonplaceholder.typicode.com/users').json()
    posts = requests.get('https://jsonplaceholder.typicode.com/posts').json()
    users = {d['id']:{'name':d['name'],'count':0} for d in data}
    for post in posts:
        users[post['userId']]['count']+=1
    return render_template('authors.html',users=users)


if __name__ == "__main__":
   app.run(debug=True)
