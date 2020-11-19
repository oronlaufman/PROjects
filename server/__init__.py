from flask import Flask

from .config import config_by_mode
from server.models import db, init_db


def create_app(config_mode):
    """
    Factory to create the Flask instance
    Args:
        config_mode: The configuration in which we want to run the current app

    Returns:
        A Flask instance
    """
    app = Flask(__name__)
    app.config.from_object(config_by_mode[config_mode])

    db.init_app(app)
    init_db(app)

    return app
