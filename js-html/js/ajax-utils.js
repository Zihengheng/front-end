(function(global){
	// Set up a namespace for our utility
	var ajaxUtils = {};
	// Returns an HTTP request object
	function getRequestObject(){
		if(global.XMLHttpRequest){
			return (new XMLHttpRequest());
		}
		else if(global.ActiveXObject){
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else{
			global.alert("Ajax is not supported!");
    		return(null); 
		}
	}

	// Makes an Ajax GET request to 'requestUrl'
	ajaxUtils.sendGetRequest = function(requestUrl, responseHandler){
		var request = getRequestObject();
		request.onreadystagechange = 
		function(){ handleResponse(request, responseHandler);}
	};

	// Only calls user provided 'responseHandler'
	// function if response is ready
	// and not an error
	function handleResponse(request,responseHandler) {
  	if ((request.readyState == 4) &&
     (request.status == 200)) {
    	responseHandler(request);
  		}
	}

	global.$ajaxUtils = ajaxUtils;

})(window);