from server.models import db

from server.models.Project import Project
from server.models.Junior import Junior
from server.models.Company import Company


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

    def add_new_relation(new_project_junior_relation):
        db.session.add(new_project_junior_relation)
        db.session.commit()

    def get_junior_portfolio(email):
        return db.session.query(Projects_Juniors_Relation, Junior, Project, Company)\
            .join(Junior, Projects_Juniors_Relation.junior_id == Junior.id)\
            .join(Project, Projects_Juniors_Relation.project_id == Project.id)\
            .join(Company, Project.company_id == Company.id)\
            .filter(email==email).all() 

    def dump(self):
        return {'project_id': self.project_id,
                'junior_id': self.junior_id}