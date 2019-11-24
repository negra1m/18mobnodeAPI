const BaseModel = require('./conn');

class Users extends BaseModel {
    constructor(){
        super();

        this.dbUsers = this.db.collection('users');
    }

    getUserById(id){
        return this.dbUsers
            .doc(id)
            .get();
    }

    auth(login, password){
        return this.dbUsers
            .where('email','==',login)
            .where('password','==',password)
            .get();
    }

}

module.exports = Users;