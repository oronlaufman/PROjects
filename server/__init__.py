
from flask import Flask, config, Blueprint

from .config import config_by_mode
from server.models import db, init_db , login_manager
from server.views.auth.auth_junior import junior_register, junior_login, junior_logout
from server.views.auth.auth_company import company_register, company_login, company_logout
from server.models.Junior import Junior
from server.views.auth.view import auth_bp

def create_app(config_mode):

    app = Flask(__name__)
    app.config.from_object(config_by_mode[config_mode])

    db.init_app(app)
    init_db(app)

    login_manager.init_app(app)

    app.register_blueprint(auth_bp, url_prefix='/auth')
  
    return app