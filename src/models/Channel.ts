import Program from "./Program";

export default class Channel {
    id: number;
    name: string;
    description: string;
    program: any;
    nextChannel: Channel;
    previousChannel: Channel;

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name
        this.description = description
        this.program = "";


        this.nextChannel = this;
        this.previousChannel = this;
    }

    next(){
        let atual = this;

        let proximo = this.nextChannel;
        proximo.previousChannel = atual;

        return proximo;
    }

    previous(){
        let atual = this;

        let anterior = this.previousChannel;
        anterior.nextChannel = atual;

        return anterior;
    }
}