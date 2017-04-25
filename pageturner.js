function sleep (ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

async function openThese(urls, delay){
	console.log()
	open(urls.shift(), "PageTurner")	
	await sleep(delay)
	if (urls.length > 0) openThese(urls, delay)
}

let pageturner = {
	init: function(input, separator, delay) {
		pageturner.input = input;
		pageturner.output = output || window.getElementById('output')
		pageturner.delay = delay || 5000;

		input.addEventListener('change', this.openFile)
	},

	openFile: async function (event, delay = 5000) {
	    let reader = new FileReader();
	    reader.onload = file => {
    		urls = file.target.result.split(';')
    		pageturner.makeListOf(urls)
    		openThese(urls, pageturner.delay)
    	}
    	reader.readAsText(pageturner.input.files[0], "UTF-8")    	
	},

	makeListOf(urls){
		let list = document.createElement('UL')
		urls.map(url => {
			console.log(url)
			let item = document.createElement('LI');
			let text = document.createTextNode(url);
			item.appendChild(text)
			list.appendChild(item)
		})
		window.output.appendChild(list)
	}
}
