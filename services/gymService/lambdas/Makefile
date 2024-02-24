define build_binaries
	@echo "Building binaries..."
	@GOOS=linux GOARCH=amd64 go build -o getGymDetails/main getGymDetails/main.go getGymDetails/handler.go
	@echo "Finished building binaries..."
endef

define zip_files
	@echo "Zipping files..."
	zip -j getGymDetails/main.zip getGymDetails/main
	
	@echo "Finished zipping files..."
endef

build:
	${build_binaries}
	${zip_files}
