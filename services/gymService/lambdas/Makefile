define build_binaries
	@echo "Building binaries..."
	@GOOS=linux GOARCH=arm64 go build -o addGym/bootstrap addGym/main.go addGym/handler.go
	@echo "Finished building binaries..."
endef

define zip_files
	@echo "Zipping files..."
	zip -j addGym/bootstrap.zip addGym/bootstrap
	@echo "Finished zipping files..."
endef

build:
	${build_binaries}
	${zip_files}
