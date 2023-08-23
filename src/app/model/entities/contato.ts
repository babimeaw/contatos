export class Contato{
    private _nome: string;
    private _telefone: number;
    private _email : string;
    private _sexo : string;
    
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get telefone(): number {
        return this._telefone;
    }
    public set telefone(value: number) {
        this._telefone = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get sexo(): string {
        return this._sexo;
    }
    public set sexo(value: string) {
        this._sexo = value;
    }

    constructor(nome:string, telefone: number, email: string, sexo: string){
        this._nome = nome;
        this._telefone = telefone;
        this._email = email;
        this._sexo = sexo;
    }
}