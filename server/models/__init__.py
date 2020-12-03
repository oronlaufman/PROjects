from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, login_manager

db = SQLAlchemy()
login_manager = LoginManager()

def init_db(app):
    """
    Initialize the database configuration.

    Args:
        app: The app to connect the db to
    """
    from .Junior import Junior
    from .Company import Company


    with app.app_context():
        db.create_all()
        db.session.commit()
