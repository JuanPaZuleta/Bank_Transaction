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
    
    _id: string
    nameReceiver:string
    rut: string
    mail: string
    bankName: string
    accountType: string
    amount: Number
    createdAt: string
    updateAt: string
    
}