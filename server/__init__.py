
from flask import Flask, config

from .config import config_by_mode
from server.models import db, init_db , login_manager
from server.views.auth_junior import junior_register, junior_login, junior_logout
from server.views.auth_company import company_register, company_login, company_logout
from server.models.Junior import Junior


def create_app(config_mode):

    app = Flask(__name__)
    app.config.from_object(config_by_mode[config_mode])

    db.init_app(app)
    init_db(app)

    login_manager.init_app(app)
    
    app.add_url_rule('/auth/junior_register', 'junior_register', junior_register, methods=['POST'])
    app.add_url_rule('/auth/junior_login', 'junior_login', junior_login, methods=['POST'])
    app.add_url_rule('/auth/junior_logout', 'junior_logout', junior_logout, methods=['POST'])

    app.add_url_rule('/auth/company_register', 'company_register', company_register, methods=['POST'])
    app.add_url_rule('/auth/company_login', 'company_login', company_login, methods=['POST'])
    app.add_url_rule('/auth/company_logout', 'company_logout', company_logout, methods=['POST'])

    return app