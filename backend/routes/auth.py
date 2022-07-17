from flask import Blueprint
from ..extensions import db
from ..models.user import User
from ..models.video import Video

auth = Blueprint('auth', __name__)


@auth.route('/user/<name>')
def create_user(name):
    user = User(name=name)
    db.session.add(user)
    db.session.commit()

    return 'User created.!'