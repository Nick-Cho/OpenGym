define build_binaries
	@echo "Building binaries..."
	@GOOS=linux GOARCH=arm64 go build -o book/bootstrap book/main.go book/handler.go
	@echo "Finished building binaries..."
endef

define zip_files
	@echo "Zipping files..."
	zip -j book/bootstrap.zip book/bootstrap
	@echo "Finished zipping files..."
endef

build:
	${build_binaries}
	${zip_files}
