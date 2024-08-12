export TAG=latest

# TODO update this command
container.run:
	docker run --name player-app_node-backend -v "$$PWD:/app" -p 3000:3000 --platform linux/amd64 -it player-app_node-backend npm run dev
container.start:
	docker container start player-app_node-backend; docker container logs -f player-app_node-backend;
container.stop:
	docker container stop player-app_node-backend;
container.rm:
	docker container rm -f player-app_node-backend;
image.build.local:
	docker build --platform linux/amd64 -t player-app_node-backend:$(TAG) .
image.tag.dockerhub:
	docker tag player-app_node-backend:$(TAG) souphian/player-app_node-backend:$(TAG)
image.tag.ecr:
	docker tag player-app_node-backend:$(TAG) 381491975528.dkr.ecr.us-east-1.amazonaws.com/player-app_node-backend:$(TAG); docker tag 381491975528.dkr.ecr.us-east-1.amazonaws.com/player-app_node-backend:$(TAG) 381491975528.dkr.ecr.us-east-1.amazonaws.com/player-app_node-backend:latest;
image.push.dockerhub:
	docker push souphian/player-app_node-backend:$(TAG)
image.push.ecr:
	docker push 381491975528.dkr.ecr.us-east-1.amazonaws.com/player-app_node-backend:$(TAG); docker push 381491975528.dkr.ecr.us-east-1.amazonaws.com/player-app_node-backend:latest;
ecr.login:
	aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 381491975528.dkr.ecr.us-east-1.amazonaws.com
image.build-tag-push.ecr:
	make ecr.login;
	make TAG=$(TAG) image.build.local;
	make TAG=$(TAG) image.tag.ecr;
	make TAG=$(TAG) image.push.ecr;
