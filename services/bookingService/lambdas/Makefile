define build_binaries
	@echo "Building binaries..."
	@GOOS=linux GOARCH=arm64 go build -o getGymDetails/bootstrap getGymDetails/main.go getGymDetails/handler.go
	@echo "Finished building binaries..."
endef

define zip_files
	@echo "Zipping files..."
	zip -j getGymDetails/bootstrap.zip getGymDetails/bootstrap
	@echo "Finished zipping files..."
endef

build:
	${build_binaries}
	${zip_files}
