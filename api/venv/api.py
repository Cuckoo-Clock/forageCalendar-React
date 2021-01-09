import time
from flask import Flask

app = Flask(__name__)
# A simple single point api from tutorial at https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project


@app.route('/time')
def get_current_time():
    return {'time':time.time()}

@app.route('/logbook/loggedin')
def get_fakeusr():
    return {'greeting':'jello whirl'}
