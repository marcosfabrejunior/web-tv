import Vue from 'vue'
import Vuex from 'vuex'
import Channel from '@/models/Channel';
import Program from '@/models/Program';
import jsonChannel from '@/assets/channel.ts';



Vue.use(Vuex)

let tech = new Channel(
  0,
  "",
  ""
);
tech.program = new Program(
  0,
  "",
  "",
  "",
  "",
  ""
);

export default new Vuex.Store({
  state: {
    active_channel: tech,
    channels: [

    ]
  },
  mutations: {
  },
  actions: {
    get_channel: function () {
      let json = jsonChannel;
      // this.state.active_channel = json;

      json.forEach(ch => {
        let channel = new Channel(
          ch.id,
          ch.name,
          ch.description
        );

        let program = new Program(
          ch.program.id,
          ch.program.name,
          ch.program.description,
          ch.program.videoId,
          ch.program.start,
          ch.program.end
        );
        channel.program = program;

        // next
        channel.nextChannel = new Channel(
          ch.nextChannel.id,
          ch.nextChannel.name,
          ch.nextChannel.description
        );

        let program_next = new Program(
          ch.nextChannel.program.id,
          ch.nextChannel.program.name,
          ch.nextChannel.program.description,
          ch.nextChannel.program.videoId,
          ch.nextChannel.program.start,
          ch.nextChannel.program.end
        );
        channel.nextChannel.program = program_next;

        // next
        channel.previousChannel = new Channel(
          ch.previousChannel.id,
          ch.previousChannel.name,
          ch.previousChannel.description
        );

        let program_previous = new Program(
          ch.previousChannel.program.id,
          ch.previousChannel.program.name,
          ch.previousChannel.program.description,
          ch.previousChannel.program.videoId,
          ch.previousChannel.program.start,
          ch.previousChannel.program.end
        );
        channel.previousChannel.program = program_previous;
        
        // vai para a state
        this.state.active_channel = channel;
        console.log(this.state.active_channel);
      });

    }
  },
  modules: {
  }
})
