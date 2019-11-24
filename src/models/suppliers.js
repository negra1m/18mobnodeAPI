const FirebaseModel = require('./firebase');

class Suppliers extends FirebaseModel {
    constructor() {
        super();
        this.database = this.db.collection('suppliers');
    }

    getAll() {
        return this.database.get();
    }

    get(supplierId) {
        return this.database.doc(supplierId).get();
    }

    add(supplier) {
        return this.database.add(supplier);
    }

    update(id, supplier) {
        return this.database.doc(id).update(supplier);
    }

    delete(id) {
        return this.database.doc(id).delete();
    }

}

module.exports = Suppliers