define build_binaries
	@echo "Building binaries..."
	@GOOS=linux GOARCH=amd64 go build -o deleteGym/main deleteGym/main.go deleteGym/handler.go
	@echo "Finished building binaries..."
endef

define zip_files
	@echo "Zipping files..."
	zip -j deleteGym/main.zip deleteGym/main
	@echo "Finished zipping files..."
endef

build:
	${build_binaries}
	${zip_files}
