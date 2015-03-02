docker:
	docker build -t docker-js-sdk .
run-docker:
	docker run -itv `pwd`:/opt/sdk docker-js-sdk webpack -wc --config /opt/sdk/webpack.config.js /opt/sdk/index.js
