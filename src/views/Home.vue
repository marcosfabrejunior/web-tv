<template>
	<div id="home" class="home">
		<div class="presentation-screen" :class="{active:presentation}">
			<button class="button-presentation" v-on:click="startWatching()">Começe a Assistir</button>
		</div>
		<div v-on:click="toggleChannelInfo()" id="principal-player" class="tv-content">
			<you
				v-if="show_video"
				width="100%"
				height="100%"
				:player-vars="playerVars"
				:video-id="active_video_id"
				ref="youtube"
				:videoshow="video_mostrar"
			></you>
		</div>
		<div
			v-on:mouseover="activeChannelInfo()"
			class="channel-info"
			:class="{active:show_channel_info}"
		>
			<div class="info">
				<div class="info__channel">
					<div class="info__channel__id">{{$store.state.active_channel.id}}</div>
					<div class="info__channel__name">{{$store.state.active_channel.name}}</div>
					<div class="info__channel__description">{{$store.state.active_channel.description}}</div>
				</div>
				<div class="info__schedule">
					<div
						class="info__schedule__time"
					>{{$store.state.active_channel.program.start}} ― {{$store.state.active_channel.program.end}}</div>
					<div class="info__schedule__details">
						<div
							class="info__schedule__details info__schedule__details--title"
						>{{$store.state.active_channel.program.name}}</div>
						<div
							class="info__schedule__details info__schedule__details--description"
						>{{$store.state.active_channel.program.description}}</div>
					</div>
				</div>
			</div>
			<div class="controls">
				<div class="controls__item" v-on:click="previousChannel()">❮</div>
				<div class="controls__item" v-on:click="nextChannel()">❯</div>
				<div class="controls__item" v-on:click="toggleFullScreen()">⛶</div>
				<div class="controls__item">☰</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /
import Channel from "@/models/Channel";
import Program from "@/models/Program";
import You from "@/components/VideoPlayer";
import Video from "@/models/Video";

export default {
	name: "Home",
	data() {
		return {
			playerList: [],
			show_channel_info: false,
			channel_info_timeout: false,
			presentation: true,
			start_video: 0,
			show_video: true,
			video_ativo: {}
		};
	},
	components: {
		you: You
	},
	mounted() {
		this.$store.dispatch("get_channel");
		setTimeout(() => {}, 200);
	},
	beforeMount() {},
	computed: {
		player() {
			return this.$refs.youtube.player;
		},
		active_video_id() {
			return this.$store.state.active_channel.program.videoId
				? this.$store.state.active_channel.program.videoId
				: "";
		},
		playerVars() {
			return {
				controls: 0,
				start: this.start_video ? this.start_video : 0
			};
		},
		video_mostrar() {
			return this.video_ativo;
		}
	},
	methods: {
		nextChannel: function() {
			let _self = this;
			this.$store.state.active_channel = this.$store.state.active_channel.next();
			let start_video_in = this.$store.state.active_channel.program.getStartProgram();
			let videoId = this.$store.state.active_channel.program.videoId;
			let video = new Video(start_video_in, videoId);
			this.video_ativo = video;

			//lembrar de colocar opacity no video para ocultar a tela inicial
		},
		previousChannel: function() {
			let _self = this;
			this.$store.state.active_channel = this.$store.state.active_channel.previous();
			let start_video_in = this.$store.state.active_channel.program.getStartProgram();
			let videoId = this.$store.state.active_channel.program.videoId;
			let video = new Video(start_video_in, videoId);
			this.video_ativo = video;
			

			
		},
		startWatching() {
			let start_video_in = this.$store.state.active_channel.program.getStartProgram();
			this.presentation = false;
			this.toggleFullScreen();
			let videoId = this.$store.state.active_channel.program.videoId
				? this.$store.state.active_channel.program.videoId
				: "";
			let video = new Video(start_video_in, videoId);
			this.video_ativo = video;
		},
		toggleFullScreen() {
			var elem = document.getElementById("home");

			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.mozRequestFullScreen) {
				/* Firefox */
				elem.mozRequestFullScreen();
			} else if (elem.webkitRequestFullscreen) {
				/* Chrome, Safari and Opera */
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) {
				/* IE/Edge */
				elem.msRequestFullscreen();
			}
		},
		toggleChannelInfo() {
			if (this.show_channel_info) {
				this.show_channel_info = false;
			} else {
				this.show_channel_info = true;
				clearTimeout(this.show_channel_info);

				this.channel_info_timeout = setTimeout(() => {
					this.show_channel_info = false;
				}, 2000);
			}
		},
		activeChannelInfo() {
			this.show_channel_info = true;
			clearTimeout(this.channel_info_timeout);

			this.channel_info_timeout = setTimeout(() => {
				this.show_channel_info = false;
			}, 2000);
		}
	}
};
</script>
<style lang="scss" scoped>
.tv-content {
	background-color: #020202;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 0;
	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 1;
	}
}
iframe {
	width: 100%;
	height: 100%;
}

.channel-info {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 2%;
	background-color: #1f1f1f;
	z-index: 1;
	opacity: 0;
	transition: 0.3s ease-in-out all;
	box-shadow: -42px 23px 64px 85px #1f1f20;
	opacity: 0;
	display: flex;
	align-items: center;

	.controls {
		pointer-events: none;
	}

	&.active {
		opacity: 0.8;

		.controls {
			pointer-events: all;
		}
	}
}

.info {
	width: 70%;

	&__channel {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		border-bottom: solid 0.02em #909092;
		padding-bottom: 0.5em;

		&__id {
			font-size: 3em;
			color: white;
			margin-right: 0.7em;
		}
		&__name {
			font-size: 1.8em;
			color: white;
		}
		&__description {
			width: 100%;
			flex-grow: 1;
			text-align: left;
			color: #eee;
			font-size: 1em;
			font-weight: 300;
			letter-spacing: 0.05em;
		}
	}

	&__schedule {
		display: flex;
		align-items: center;
		padding-top: 0.5em;

		&__time {
			color: white;
			font-size: 1.4em;
			padding-right: 1.5em;
		}
		&__details {
			&--title {
				font-size: 1.2em;
				color: #a0a0a2;
				text-align: left;
			}
			&--description {
				font-size: 0.9em;
				color: #909092;
				text-align: left;
			}
		}
	}
}

.controls {
	width: 30%;
	display: flex;
	justify-content: space-evenly;

	&__item {
		color: white;
		font-size: 2em;
		line-height: 3em;
		width: 2em;
		height: 1.6em;
		padding-bottom: 0.2em;
		cursor: pointer;
		padding-top: 0.1em;
		border-radius: 0.4em;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.1s ease-in-out all;
		outline: none;

		&:hover,
		&.active {
			background-color: none;
			color: red;
			outline: none;
		}

		&:focus,
		&:active,
		&:visited {
			color: white;
			outline: 0;
		}
	}
}
@media (max-width: 486px) {
	.controls {
		width: 20%;
		flex-wrap: wrap;
		align-content: space-between;

		&__item {
			width: 45%;
		}
	}
	.info {
		width: 80%;
	}
}

.presentation-screen {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #020202;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0;
	pointer-events: none;
	z-index: -2;
	transition: 0.3s ease-in-out all;
	&.active {
		opacity: 1;
		pointer-events: all;
		z-index: 10;
	}

	button {
		font-size: 1.6em;
		font-weight: bold;
		padding: 0.7em 1.5em;
		border-color: rgb(243, 29, 29);
		background-color: rgb(243, 29, 29);
		border: 0;
		color: rgb(255, 255, 255);
		cursor: pointer;
	}
}
#home {
	font-size: 15px;
}

@media (max-width: 786px) {
	#home {
		font-size: 10px;
	}
}
</style>
