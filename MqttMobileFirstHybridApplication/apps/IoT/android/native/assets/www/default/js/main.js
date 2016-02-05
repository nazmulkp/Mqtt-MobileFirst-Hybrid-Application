
/* JavaScript content from js/main.js in folder common */
function wlCommonInit(){
	MQTTconnect();
	
}

/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}