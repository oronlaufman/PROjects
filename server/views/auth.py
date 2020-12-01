from flask import jsonify, request

from server.models.Junior import Junior
from server.models import db


def register():
    data = request.form
    email = data.get('email')
    password = data.get('password')

    junior = Junior.query.filter_by(email=email).first()
    if junior is None:
        new_junior = Junior(
            email,
            data['full_name'],
            data.get('phone_number'),
            data.get('website'),
            data.get('about_me')
        )
        new_junior.set_password(password)

        db.session.add(new_junior)
        db.session.commit()

        return jsonify({'message': 'user created successfully'}), 200
    else:
        return jsonify({'error': 'User already exists with that email address'}), 403


def login():
    email = request.form.get('email')
    password = request.form.get('password')

    junior = Junior.query.filter_by(email=email).first()
    if junior and junior.check_password(password):
        # understand how to login the user
        return jsonify({'message': 'User logged in successfully'})
    elif not junior:
        return jsonify({'error': f'user {email} does not exist'}), 403
    else:
        return jsonify({'error': 'Incorrect password'}), 403
