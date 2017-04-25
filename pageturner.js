console.log("turning pages here!")

let openedWindow

let pageturner = {
	init: function(input, output) {
		pageturner.input = input;
		input.addEventListener('change', this.openFile);
	},

	openFile: async function (event) {
	    var reader = new FileReader();
	    	reader.onload = file => {
	    		pageturner.urls = file.target.result.split(";")
	    		pageturner.urls.map(url => {
	    			console.log(url)
	    			openedWindow = window.open(url)
	    			let whatoo = await pageturner.sleep(2000)		
	    			window.close(openedWindow)
	    		//	setTimeout(function(page){close(page)}, 3000)
	    		})
	    }
	    	reader.readAsText(pageturner.input.files[0], "UTF-8")
	},

	sleep: function (ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}
}
