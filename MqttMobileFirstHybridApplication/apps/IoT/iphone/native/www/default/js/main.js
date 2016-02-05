
/* JavaScript content from js/main.js in folder common */
function wlCommonInit(){
	 MQTTconnect();	//connect broker with subscribe 
}

/* JavaScript content from js/main.js in folder iphone */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}