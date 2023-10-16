.PHONY: install
install:
	npm install

.PHONY: test
test:
	npx jest

.PHONY: run_local
run_local:
	node src/app.js

.PHONY: build_image
build_image:
	docker build -t task-robot .

.PHONY: run
run:
	docker run -it -p 8082:8082 --name task-robot-container task-robot

.PHONY: stop
stop:
	docker stop task-robot-container
