function sleep (ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

async function openThese(urls){
	open(urls.shift(), "PageTurner")
//	await sleep(5000)
	await sleep(5000)
	if (urls.length > 0) openThese(urls)
}

let pageturner = {
	init: function(input, output) {
		pageturner.input = input;
		input.addEventListener('change', this.openFile)
	},

	openFile: async function (event) {
	    let reader = new FileReader();
	    reader.onload = file => {
    		pageturner.urls = file.target.result.split(";")
    		openThese(pageturner.urls);
    	}
    	reader.readAsText(pageturner.input.files[0], "UTF-8")
	}
}
