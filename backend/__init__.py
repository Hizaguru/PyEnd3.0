from flask import Flask

from .extensions import db, migrate
from .routes.auth import auth
from .routes.api import api

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Wh1t3Ubuntu1940!@localhost/test'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    migrate.init_app(app, db)

    app.register_blueprint(auth)
    app.register_blueprint(api)

    return app