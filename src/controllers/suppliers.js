//TODO: implement Models and cache stuff
import { SuppliersModel } from '../models/suppliers';

class Suppliers {

    static get(request, response) {
        const id = request.params.id;
        const key = `supplier_${id}`;
        //        response.send()
    }
}

module.exports = Suppliers;