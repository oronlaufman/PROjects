from flask import Blueprint, json, render_template, jsonify, request
from server.models.Junior import Junior
from server.models.Project import Project

home_bp = Blueprint('home', __name__)

def home_page():
    all_juniors = Junior.query.limit(10).all()
    all_projects = Project.query.limit(10).all()
    json_string_juniors = [junior.dump() for junior in all_juniors]
    json_string_projects = [project.dump() for project in all_projects]
    joint_json_string = {"juniors_json": json_string_juniors,
                         "projects_json": json_string_projects}
    return joint_json_string


def get_all_juniors():
    all_juniors = Junior.query.all()
    json_string = json.dumps([junior.dump() for junior in all_juniors])
    return json_string
    

def get_all_projects():
    all_projects = Project.query.all()
    json_string = json.dumps([project.dump() for project in all_projects])
    return json_string


home_bp.add_url_rule('/', 'home_page', home_page, methods=['GET'])
home_bp.add_url_rule('/juniors', 'get_all_juniors', get_all_juniors, methods=['GET', 'POST'])
home_bp.add_url_rule('/projects', 'get_all_projects', get_all_projects, methods=['GET', 'POST'])
