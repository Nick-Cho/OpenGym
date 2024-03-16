define build_binaries
	@echo "Building binaries..."
	@GOOS=linux GOARCH=arm64 go build -o uploadGym/bootstrap uploadGym/main.go uploadGym/handler.go
	@echo "Finished building binaries..."
endef

define zip_files
	@echo "Zipping files..."
	zip -j uploadGym/bootstrap.zip uploadGym/bootstrap
	@echo "Finished zipping files..."
endef

build:
	${build_binaries}
	${zip_files}
