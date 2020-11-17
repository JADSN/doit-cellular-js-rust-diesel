all: build run

build:
	#rm ./db.sqlite3
	#DATABASE_URL=db.sqlite3 diesel migration run
	cargo fmt
	cargo build --release -p app

run:
	DATABASE_URL=db.sqlite3 ./target/release/app

dist:
	mkdir -p dist
	cd ./dist
	mkdir -p ./static
	cp -r static ./dist/static
	strip ./target/release/app
	cp ./target/release/app ./dist
