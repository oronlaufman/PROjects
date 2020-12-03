from werkzeug.security import generate_password_hash, check_password_hash

from server.models import db


class Company(db.Model):
    __tablename__ = 'Companies'

    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(120), nullable=False)
    junior_name = db.Column(db.ARRAY(db.String(50)), nullable=False)
    description = db.Column(db.Text)
    field = db.Column(db.ARRAY(db.String(50))) 
    status = db.Column(db.String(120))
    password_hash = db.Column(db.String(120), nullable=False)

    def __init__(self,company_name ,junior_name , description, field, status):
        self.company_name = company_name
        self.junior_name = junior_name
        self.field = field
        self.status = status

    def __repr__(self):
        return f"<User {self.username}>"

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
