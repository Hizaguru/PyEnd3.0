from flask import Blueprint
from ..extensions import db
from ..models.user import User
api = Blueprint('api', __name__)

@api.route('/<name>')
def show_user(name):
    user = User.query.filter_by(name='Antos').first()
    return {'user', user.name}