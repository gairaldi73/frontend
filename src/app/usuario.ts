export class Usuario {
    //constructor(private username: string, private password: string ){}
    /*public constructor(init?: Partial<Usuario>){
        Object.assign(this, init);
    }*/
    private username: string | null = '';
    private password: string | null = '';
    constructor(username: string, password: string ){
        this.username = username;
        this.password = password;
    }

}

