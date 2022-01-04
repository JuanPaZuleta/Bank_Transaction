export class Receiver {

    constructor(_id = '', name = '', rut = '', mail = '', phone = '', destinationBank = '', accountType= '', 
    accountNumber = 0, createdAt = '', updateAt = '') {
        this._id = _id;
        this.name = name;
        this.rut = rut;
        this.mail = mail;
        this.phone = phone;
        this.destinationBank = destinationBank;
        this.accountType = accountType;
        this.accountNumber = accountNumber;
        this.createdAt = createdAt;
        this.updateAt = updateAt;

    }
    
    _id: String
    name:String
    rut: String
    mail: String
    phone: String
    destinationBank: String
    accountType: String
    accountNumber: Number
    createdAt: String
    updateAt: String



}
