from os import access
from flask import Blueprint, request
from flask_jwt_extended import create_access_token
from ..extensions import jwt
from flask import Flask, request, jsonify
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_identity, \
    unset_jwt_cookies, jwt_required, JWTManager

auth = Blueprint('auth', __name__)


@auth.route('/token', methods=['POST'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return {"msg": "wrong email or password"}, 401

    access_token = create_access_token(identity=email)
    response = {"access_token": access_token}
    return response


@auth.route('/profile')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about": "Hello! I am me"
    }

    return response_body
