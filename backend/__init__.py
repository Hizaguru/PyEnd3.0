from datetime import timedelta
from flask import Flask

from dotenv import load_dotenv

from .extensions import db, migrate, jwt
from .routes.auth import auth
from .routes.api import api
import os


def create_app():
    load_dotenv()
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Wh1t3Ubuntu1940!@localhost/test'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=0.5)
    app.config['WTF_CSRF_ENABLED'] = True  # Sensitive
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)

    app.register_blueprint(auth)
    app.register_blueprint(api)

    return app
