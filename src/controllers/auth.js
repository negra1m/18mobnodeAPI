const Users = new (require('../models/users'))();
const createToken = require('../utils/createToken');

class Auth {
    static login(request, response, next) {
        const { email, password } = request.body;

        Users.auth(email, password)
            .then(users => {
                if (users.docs.length === 0){
                    return response
                        .status(401)
                        .send({
                            code: 'not_found',
                            message: 'User not found'
                        });
                }

                const [{ id }] = users.docs;
                response.json({ token: createToken({ id }) });
            })
            .catch(err => {
                response.sendStatus(500);
                console.log('Error getting document :>', err);
            });
    }
}

module.exports = Auth;