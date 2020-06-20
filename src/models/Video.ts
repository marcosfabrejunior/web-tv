import Program from "./Program";
import Channel from "./Channel";

export default class Video {
    start: number;
    videoId: string;

    constructor(start: number, videoId: string, description: string) {
        this.start = start;
        this.videoId = videoId;
    }

}