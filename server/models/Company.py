from flask.globals import session
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.orm import load_only

from server.models import db


class Company(UserMixin, db.Model):
    __tablename__ = 'Companies'

    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), nullable=False, unique=True)
    phone_number = db.Column(db.Text)
    password_hash = db.Column(db.String(120), nullable=False)
    location = db.Column(db.String(120)) 
    # image = db.Column()
    website = db.Column(db.String(120))
    about_me = db.Column(db.Text)

    def __init__(self,company_name, email, phone_number, location, website, about_me):
        self.company_name = company_name
        self.email = email
        self.phone_number = phone_number
        self.location = location
        self.website = website
        self.about_me = about_me

    def __repr__(self):
        return f"<Company Name {self.company_name}>"

    def add_new_company(new_company):
        db.session.add(new_company)
        db.session.commit()

    def get_company_name_by_id(id):
        result = db.session.query(Company.company_name).filter(Company.id==id).first()
        return result[0]

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
