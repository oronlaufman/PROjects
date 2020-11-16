from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

from server import create_app
from server.models import db

app = Flask(__name__)
app.config['SECRET_KEY'] = 'bigsecret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://postgres:postgres@localhost:5432/folio_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

migrate = Migrate(app, db)
manager = Manager(app)

manager.add_command('db', MigrateCommand)


if __name__ == '__main__':
    manager.run()

#
# if __name__ == '__main__':
#     app = create_app('dev')
#
#     migrate = Migrate(app, db)
#
#     manager = Manager(app)
#     manager.add_command('db', MigrateCommand)
#
#     manager.run()
