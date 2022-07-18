from datetime import datetime, timedelta
import json
from os import access
from time import timezone
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


@auth.after_request
def refresh_expiring_jwts(response):
    try:
        expiring_time = get_jwt()["exp"]
        current_time = datetime.now(timezone.utc)
        target_time = datetime.timestamp(current_time + timedelta(minutes=30))
        if target_time > expiring_time:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token
                response.data = json.dumps(data)
        return response, 200
    except (RuntimeError, KeyError):
        return response, 200


@auth.route('/profile')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about": "Hello! I am me"
    }
    return response_body


@auth.route('/signout', methods=['POST'])
def signout_user():
    response = jsonify({"msg": "You've been signed out successfully"})
    unset_jwt_cookies(response)
    return response, 200
