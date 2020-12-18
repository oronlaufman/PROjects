from server.models import db
from server.models.Company import Company


class Project(db.Model):
    __tablename__ = 'Projects'

    id = db.Column(db.Integer, primary_key=True)
    company_id = db.Column(db.Integer, db.ForeignKey('Companies.id') ,nullable=False)
    description = db.Column(db.Text)
    field = db.Column(db.ARRAY(db.String(50))) 
    status = db.Column(db.String(120))

    def __init__(self,company_id, description, field, status):
        self.company_id = company_id
        self.description = description
        self.field = field
        self.status = status

    def __repr__(self):
        return f"<id {self.id}>"

    def dump(self):
        return {'id': self.id,
                'company_id': self.company_id,
                'description': self.description,
                'field': self.field,
                'status': self.status}