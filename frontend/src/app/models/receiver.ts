export class Receiver {

    constructor(_id = '', name = '', rut = '', mail = '', phone = '', destinationBank = '', accountType= '', 
    accountNumber = '', createdAt = '', updateAt = '') {
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
    
    _id: string
    name:string
    rut: string
    mail: string
    phone: string
    destinationBank: string
    accountType: string
    accountNumber: string
    createdAt: string
    updateAt: string



}
