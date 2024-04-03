define build_binaries
	@echo "Building binaries..."
	@GOOS=linux GOARCH=arm64 go build -o createSlots/bootstrap createSlots/main.go createSlots/handler.go
	@echo "Finished building binaries..."
endef

define zip_files
	@echo "Zipping files..."
	zip -j createSlots/bootstrap.zip createSlots/bootstrap
	@echo "Finished zipping files..."
endef

build:
	${build_binaries}
	${zip_files}
