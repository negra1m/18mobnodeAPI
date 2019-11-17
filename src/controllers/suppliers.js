//TODO: implement Models and cache stuff
class Suppliers {

    static get(request, response) {
        const id = request.params.id;
        const key = `supplier_${id}`;
        response.send()
    }
}

module.exports = Suppliers;