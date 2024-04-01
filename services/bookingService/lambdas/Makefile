define build_binaries
	@echo "Building binaries..."
	@GOOS=linux GOARCH=arm64 go build -o get_bookings/bootstrap get_bookings/main.go get_bookings/handler.go
	@echo "Finished building binaries..."
endef

define zip_files
	@echo "Zipping files..."
	zip -j get_bookings/bootstrap.zip get_bookings/bootstrap
	@echo "Finished zipping files..."
endef

build:
	${build_binaries}
	${zip_files}
