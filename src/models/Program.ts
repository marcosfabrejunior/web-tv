export default class Program {
    id: number;
    name: string;
    description: string;
    videoId: string;
    start_time: Date;
    end_time: Date;

    constructor(
        id: number,
        name: string,
        description: string,
        videoId: string,
        start: string,
        end: string
    ) {
        this.id = id;
        this.name = name
        this.description = description
        this.videoId = videoId
        this.start_time = new Date(start);
        this.end_time = new Date(end);


        // this.id = 10;
        // this.name = "Evan You - State of Vue"
        // this.description = "Palestra do criador de um dos maiores frameworks Javascript na VueConf 2017"
        // this.videoId = "lG0Ys-2d4MA"
        // this.start = "";
        // this.end = "";

    }

    get start() {

        let hours = "";
        hours = ("0" + this.start_time.getHours()).slice(-2);

        let minutes = "";
        minutes = ("0" + this.start_time.getMinutes()).slice(-2);
        return `${hours}:${minutes}`;
    }
    get end() {
        let hours = "";
        hours = ("0" + this.end_time.getHours()).slice(-2);

        let minutes = "";
        minutes = ("0" + this.end_time.getMinutes()).slice(-2);
        return `${hours}:${minutes}`;
    }

    getStartProgram(){
        let now = new Date();
        let start = this.start_time;
        let inicio = Math.floor((now.getTime() - start.getTime()) / 1000);
        return inicio;
        // return parseInt();
    }
}