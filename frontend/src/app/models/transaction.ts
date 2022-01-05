export class Transaction {

    constructor(_id = '', nameReceiver = '', rut = '', mail = '', bankName = '', accountType= '',
    amount = 0, createdAt = '', updateAt = '') {
        this._id = _id;
        this.nameReceiver = nameReceiver;
        this.rut = rut;
        this.mail = mail;
        this.bankName = bankName;
        this.accountType = accountType;
        this.amount = amount;
        this.createdAt = createdAt;
        this.updateAt = updateAt;

    }
    
    _id: String
    nameReceiver:String
    rut: String
    mail: String
    bankName: String
    accountType: String
    amount: Number
    createdAt: String
    updateAt: String
    
}