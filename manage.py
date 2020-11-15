from server import create_app
from server.endpoints.auth import register

from flask_script import Manager


def landing_page():
    return 'hello world'


app = create_app('dev')
app.app_context().push()

app.add_url_rule('/', 'landing_page', landing_page)
app.add_url_rule('/auth/register', 'register', register)

manager = Manager(app)


@manager.command
def run():
    app.run()


if __name__ == '__main__':
    manager.run()
