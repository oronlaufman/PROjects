from flask import Blueprint, render_template
from flask_login import current_user, login_required

from server.models.Projects_Juniors_Relation import Projects_Juniors_Relation
from server.models import db , login_manager

join_project_bp = Blueprint('join_project', __name__)


@login_required 
def join_project(project_id):
    junior_id = current_user.get_id()
    new_project_junior_relation = Projects_Juniors_Relation(
        project_id,
        junior_id
    )

    db.session.add(new_project_junior_relation)
    db.session.commit()
    return jsonify({'message': 'user joined project successfully'}), 200


join_project_bp.add_url_rule('/<project_id>' , 'join_project', join_project, methods=['POST'])