define build_binaries
	@echo "Building binaries..."
	@GOOS=linux GOARCH=arm64 go build -o getNearbyGyms/bootstrap getNearbyGyms/main.go getNearbyGyms/handler.go
	@echo "Finished building binaries..."
endef

define zip_files
	@echo "Zipping files..."
	zip -j getNearbyGyms/bootstrap.zip getNearbyGyms/bootstrap
	@echo "Finished zipping files..."
endef

build:
	${build_binaries}
	${zip_files}
