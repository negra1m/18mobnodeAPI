const FirebaseModel = require('./firebase');

class Users extends FirebaseModel {
    constructor(){
        super();
        this.database = this.db.collection('users');
    }

    getAll() {
        return this.database.get();
    }

    add(user) {
        return this.database.add(user);
    }

    update(id, user) {
        return this.database.doc(id).update(user);
    }

    delete(id) {
        return this.database.doc(id).delete();
    }

    getUserById(id){
        return this.database
            .doc(id)
            .get();
    }

    auth(login, password){
        return this.database
            .where('email','==',login)
            .where('password','==',password)
            .get();
    }
}

module.exports = Users;