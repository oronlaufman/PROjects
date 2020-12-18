from flask import Blueprint, render_template, json
from server.models import db
from server.models.Junior import Junior
from server.models.Project import Project
from server.models.Company import Company
from server.models.Projects_Juniors_Relation import Projects_Juniors_Relation


portfolio_bp = Blueprint('portfolio', __name__)

def portfolio_dump(name , desc):
    return {'company_name': name,
            'project_description': desc}
                            
def junior_portfolio(email):
    result = db.session.query(Projects_Juniors_Relation, Junior, Project, Company)\
            .join(Junior, Projects_Juniors_Relation.junior_id == Junior.id)\
            .join(Project, Projects_Juniors_Relation.project_id == Project.id)\
            .join(Company, Project.company_id == Company.id)\
            .all()

    project_list = []
    r, j, p, c = result[0]
    final_dict = {   
                    'junior_name': j.full_name,
                    'email': j.email,
                    'phone_number': j.phone_number,
                    'website': j.website, 
                    'about_me': j.about_me
                 }

    final_dict['projects'] = ([portfolio_dump(c.company_name , p.description) for r, j, p, c in result])
    return final_dict        

portfolio_bp.add_url_rule('/<email>', 'junior_portfolio', junior_portfolio, methods=['GET'])