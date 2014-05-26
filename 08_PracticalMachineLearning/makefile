DELAY = 1000
RMD_FILES  = $(wildcard */index.Rmd)
HTML_FILES = $(patsubst %.Rmd, %.html, $(RMD_FILES))
PDF_FILES  = $(patsubst %.html, %.pdf, $(HTML_FILES))
PDF_FILES2 = $(patsubst %/index.pdf, lectures/%.pdf, $(PDF_FILES))

lectures: $(PDF_FILES2)
lectures/%.pdf: %/index.pdf
	cp $< $@

files:
	@echo $(RMD_FILES)
	@echo $(HTML_FILES)
	@echo $(PDF_FILES)
	
html: $(HTML_FILES)
pdf: $(PDF_FILES)
all: html pdf

zip: $(PDF_FILES)
	zip all_pdf_files.zip $^
	
%/index.pdf: %/index.html
	casperjs makepdf.js $< $@ $(DELAY)

%/index.html: %/index.Rmd
	cd $(dir $<) && Rscript -e "slidify::slidify('index.Rmd')" && cd ..

