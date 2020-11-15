from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from .config import config_by_mode

db = SQLAlchemy()


def create_app(config_mode):
    app = Flask(__name__)
    app.config.from_object(config_by_mode[config_mode])
    db.init_app(app)

    return app
