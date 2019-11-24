const supplier = require('../models/suppliers');
const SuppliersModel = new supplier();

class Supplier {

    /**
     * CREATE
     */
    static add(req, res) {
      //  console.log('--------------------------')
      // console.log(req.body)
      //  console.log('--------------------------')
        const Supplier = {
            name: req.body.name,
            products: [],
            address: {
                city: req.body.address.city,
                number: req.body.address.number,
                postCode: req.body.address.postCode,
                stateCode: req.body.address.stateCode,
                street: req.body.address.street,
            }
        };

        SuppliersModel
            .add(Supplier)
            .then(() => res.sendStatus(201))
            .catch(err => res.sendStatus(500).json(err));
    }

    /**
     * READ
    */
    static getAll(_req, res) {
        SuppliersModel
            .getAll()
            .then(snapshot => {

                const suppliers = snapshot.docs.map(supplier => ({
                    id: supplier.id,
                    data: supplier.data()
                }));
                //console.log('snapshot', suppliers);
                return res.json(suppliers);
            })
            .catch(err => {
                res.sendStatus(500).json(err)
            });
    }

    static getById(req, res) {
        const id = req.params.id;

        SuppliersModel.get(id)
            .then(supplier => {
                if (!supplier.empty) {
                    const Supplier = {
                        id: supplier.id,
                        data: supplier.data()
                    };
                    return res.json(Supplier);

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
        const supplier = {
            city: req.body.city,
            number: req.body.number,
            postCode: req.body.postCode,
            stateCode: req.body.stateCode,
            street: req.body.street,
        };

        SuppliersModel
            .update(id, supplier)
            .then(() => res.sendStatus(200))
            .catch(err => res.sendStatus(500).json(err));
    }

    /**
     * ADD PRODUCTS
     */
    static addProducts(req, res) {
        const id = req.params.id;
        const supplier = {
            products: req.body.products
        };

        SuppliersModel
            .update(id, supplier)
            .then(() => res.sendStatus(200))
            .catch(err => res.sendStatus(500).json(err));
    }

    /**
     * DELETE
     */
    static delete(req, res) {
        const id = req.params.id;

        SuppliersModel
            .delete(id)
            .then(() => res.sendStatus(200))
            .catch(err => res.sendStatus(500).json(err));
    }
}

module.exports = Supplier