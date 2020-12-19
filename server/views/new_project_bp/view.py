from flask import Blueprint, render_template, jsonify, request
from server.models.Project import Project
from server.models import db

new_project_bp = Blueprint('new_project', __name__)


def create_new_project():
    data = request.form
    new_project = Project(
            data.get('company_id'), 
            data.get('description'), 
            data.get('field'), 
            data.get('status'))

    add_new_project(new_project)
    return jsonify({'message': 'project created successfully'}), 200

new_project_bp.add_url_rule('', 'create_new_project', create_new_project, methods=['POST'])