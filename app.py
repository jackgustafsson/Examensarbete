from flask import Flask, render_template, jsonify
import requests
import time
from data import cities

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/python')
def show_python():
    start_time = time.time()  # Startar klockan
    response = requests.get("http://127.0.0.1:5000/api/cities")
    end_time = time.time()    # Stoppar klockan
    
    elapsed_time = (end_time - start_time) * 1000  # Millisekunder
    print(f"Requests tog {elapsed_time:.2f} ms")

    cities = response.json() if response.status_code == 200 else []
    return render_template('python.html', cities=cities)

@app.route('/fetch')
def show_fetch():
    return render_template('fetch.html')

@app.route('/axios')
def show_axios():
    return render_template('axios.html')

@app.route('/api/cities')
def api_stader():
    return jsonify(cities)

if __name__ == '__main__':
    app.run(debug=True)