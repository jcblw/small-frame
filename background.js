
chrome.devtools.panels.create(
	"Small Frame",
    "",
    "Frame.html",
    function(panel) { 

    	panel.onShown.addListener(function(panelWindow) {
    		chrome.devtools.inspectedWindow.eval("window.location.toString()", function(res){
    			var frame = document.createElement('iframe');
	    		var body = panelWindow.document.body;
	    		body.innerHTML = "";
	    		frame.src = res;
	    		frame.frameborder = "0";
	    		body.appendChild(frame);
    		})

    	});

    });

