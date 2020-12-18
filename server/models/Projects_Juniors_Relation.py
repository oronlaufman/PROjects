from server.models import db

from server.models.Project import Project
from server.models.Junior import Junior

class Projects_Juniors_Relation(db.Model):
    __tablename__ = 'Projects_Juniors_Relation'
    
    id = db.Column(db.Integer, primary_key=True)
    project_id = db.Column(db.Integer, db.ForeignKey('Projects.id'), nullable=False)
    junior_id = db.Column(db.Integer, db.ForeignKey('Juniors.id'), nullable=False)
  
    def __init__(self,project_id, junior_id):
        self.project_id = project_id
        self.junior_id = junior_id

    def __repr__(self):
        return f"<id {self.id}>"

    def dump(self):
        return {'project_id': self.project_id,
                'junior_id': self.junior_id}