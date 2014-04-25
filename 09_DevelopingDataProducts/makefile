DELAY = 1000
RMD_FILES  = $(wildcard */index.Rmd)
HTML_FILES = $(patsubst %.Rmd, %.html, $(RMD_FILES))
PDF_FILES  = $(patsubst %/index.html, lectures/%.pdf, $(HTML_FILES))

listfiles:
	@echo $(RMD_FILES)
	@echo $(HTML_FILES)
	@echo $(PDF_FILES)

	
html: $(HTML_FILES)
pdf: $(PDF_FILES)
all: html pdf

zip: $(PDF_FILES)
	zip all_pdf_files.zip $^
	
lectures/%.pdf: %/index.html
	casperjs makepdf.js $< $@ $(DELAY)

%/index.html: %/index.Rmd
	cd $(dir $<) && Rscript -e "slidify::slidify('index.Rmd')" && cd ..

