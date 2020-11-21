from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def init_db(app):
    """
    Initialize the database configuration.

    Args:
        app: The app to connect the db to
    """
    from .Junior import Junior

    with app.app_context():
        db.create_all()
        db.session.commit()
