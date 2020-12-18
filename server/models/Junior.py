from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy import inspect

from server.models import db

class Junior(UserMixin, db.Model):
    __tablename__ = 'Juniors'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(120), nullable=False)
    full_name = db.Column(db.String(120), nullable=False)
    phone_number = db.Column(db.Text)
    # image = db.Column()
    # skills = db.Column(db)
    website = db.Column(db.String(120))
    about_me = db.Column(db.Text)

    def __init__(self, email, full_name, phone_number, website, about_me):
        self.email = email
        self.full_name = full_name
        self.phone_number = phone_number
        self.website = website
        self.about_me = about_me

    def __repr__(self):
        return f"<User {self.email}>"

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def dump(self):
        return {'id': self.id,
                'email': self.email,
                'full_name': self.full_name,
                'phone_number': self.phone_number,
                'website': self.website,
                'about_me': self.about_me}
