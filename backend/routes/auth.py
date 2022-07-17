from crypt import methods
from os import access
from urllib import response
from flask import Blueprint, request
from flask_jwt_extended import create_access_token
from ..extensions import jwt
from flask import Flask, request, jsonify


auth = Blueprint('auth', __name__)


@auth.route('/token', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return {"msg": "Wrong email or password"}, 401

    access_token = create_access_token(identity=email)
    response = {"access_token": access_token}
    return response


@auth.route('/signout', methods=['POST'])
def signout():
    response = jsonify({"msg": "You've been signed out successfully."})
    unset_jwt_cookies(response)
    return response


@auth.route('/profile')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about": "Hello! I am me"
    }

    return response_body
