<template>
	<div class="channel-info">
		<div class="info">
			<div class="info__channel">
				<div class="info__channel__id">{{active_channel.id}}</div>
				<div class="info__channel__name">{{active_channel.name}}</div>
				<div class="info__channel__description">{{active_channel.description}}</div>
			</div>
			<div class="info__schedule">
				<div class="info__schedule__time">13:40 ― 14:50</div>
				<div class="info__schedule__details">
					<div class="info__schedule__details info__schedule__details--title">Evan You - State of Vue | VueConf 2017</div>
					<div class="info__schedule__details info__schedule__details--description">
                        Neste Programa, o criador de um dos mais conhecidos frameworks Javascript apresenta sua trajetória.
                    </div>
				</div>
			</div>
		</div>
		<div class="controls">
			<div class="controls__item">❮</div>
			<div class="controls__item">❯</div>
			<div class="controls__item">⛶</div>
			<div class="controls__item">☰</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Channel from "@/models/Channel";

export default {
	name: "ChannelInfo",
	data() {
		return {
			active_channel: new Channel()
		};
	},
	components: {},
	mounted() {
		console.log(this.active_channel);
	},
	computed: {},
	methods: {}
};
</script>
<style lang="scss" scoped>
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

	&:hover {
		opacity: 0.8;
	}
}

.info {
	width: 70%;

	&__channel {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		border-bottom: solid 0.02rem #909092;
		padding-bottom: 0.5rem;

		&__id {
			font-size: 3rem;
			color: white;
			margin-right: 2rem;
		}
		&__name {
			font-size: 1.8rem;
			color: white;
		}
		&__description {
			width: 100%;
			flex-grow: 1;
			text-align: left;
			color: #eee;
			font-size: 1rem;
			font-weight: 300;
			letter-spacing: 0.05rem;
		}
	}

	&__schedule {
		display: flex;
		align-items: center;
		padding-top: 0.5rem;

		&__time {
			color: white;
			font-size: 1.4rem;
            padding-right: 1.5rem;
		}
		&__details {
            &--title{
                font-size: 1.2rem;
                color:#A0A0A2;
                text-align: left;
            }
            &--description{
                font-size: 0.9rem;
                color:#909092;
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
		font-size: 2rem;
		line-height: 3rem;
		width: 3.5rem;
		height: 3rem;
		padding-bottom: 0.4rem;
		cursor: pointer;
		padding-top: 0.1rem;
		border-radius: 0.4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.1s ease-in-out all;
		&:hover,
		&.active {
			background-color: red;
		}
	}
}
</style>
