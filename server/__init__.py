from flask import Flask

from .config import config_by_mode
from server.models import db, init_db
from server.views.auth import register, login


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

    app.add_url_rule('/auth/register', 'register', register, methods=['POST'])
    app.add_url_rule('/auth/login', 'login', login, methods=['POST'])

    return app
