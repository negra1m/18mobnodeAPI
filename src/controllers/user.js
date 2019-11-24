const user = require('../models/users');

const UsersModel = new user();

class User {

    /**
     * CREATES
     */
    static add(req, res) {
        const User = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            lastName: req.body.name
        };

        UsersModel
            .add(User)
            .then(() => res.sendStatus(201))
            .catch(err => res.sendStatus(500).json(err));
    }

    /**
     * READ ALL
     */
    static getAll(_req, res) {
        UsersModel
            .getAll()
            .then(snapshot => {
                const suppliers = snapshot.docs.map(supplier => ({
                    id: supplier.id,
                    data: supplier.data()
                }));
                console.log('snapshot', suppliers);
                return res.json(suppliers);
            })
            .catch(err => {
                res.sendStatus(500).json(err)
            });
    }

    /**
     * READ ALL BY ID
     */
    static getById(req, res) {
        const id = req.params.id;

        UsersModel.get(id)
            .then(user => {
                if (!user.empty) {
                    const User = {
                        id: User.id,
                        data: User.data()
                    };

                    return res.json(User);

                } else {
                    return res.sendStatus(404)
                        .send({ message: 'This supplier doesn`t exist on our database.' });
                }
            })
            .catch(err => {
                return res.sendStatus(500).json(err);
            });
    }


    /**
     * UPDATE
     */
    static update(req, res) {
        const id = req.params.id;
        const user = {
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        };

        UsersModel
            .update(id, user)
            .then(() => res.sendStatus(200))
            .catch(err => res.sendStatus(500).json(err));
    }

    /**
     * DELETE
     */
    static delete(req, res) {
        const id = req.params.id;

        UsersModel
            .delete(id)
            .then(() => res.sendStatus(200))
            .catch(err => res.sendStatus(500).json(err));
    }
}

module.exports = User