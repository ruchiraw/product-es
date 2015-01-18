var engine = {};
(function(engine, constants,core) {
    


	function EngineContext(){

	}

	EngineContext.prototype = Object.create(core.ExtensionBase);

	function EngineInstance(){
		this.context = new EngineContext();
	}
	EngineInstance.prototype.getContext = function(){
		return this.context;
	};

	function Engine(){
		this.engineInstances = {};
	}

	Engine.prototype.getEngineInstance = function(tenantId){
		if(this.engineInstances[tenantId]){
			return this.engineInstances[tenantId];
		}
		return null;
	};

	engine.init = function(){
		var events = require('events');
		events.on('tenantLoad',function(){
			//Load extension modules
		});

		events.on('login',function(){
			//Load the
		});
	};

	engine.getInstance = function(tenantId){
		var engine = getEngine();
		return engine.getEngineInstance(tenantId);
	};


	var initEngine = function(){
		//Read all of the folders under the extension modules 
	};

	var getEngine = function(){
		var engine = application.get(constants.ENGINE);
		if(engine){
			return engine;
		}
		engine = new Engine();
		application.set(constants.ENGINE,engine);
		return engine;
	};

    /**
     * The function returns the directory which contains the extensions
     * @return String The path to the extension directory
     */
    var getExtensionDirPath = function(tenantId) {
        return constants.EXTENSION_DIR;
    };
    /**
     * The function processes the extension directory for the provided tenant
     * @param Number The tenant id 
     */
    var processExtensionDirectory = function(tenantId) {
    	var extensionDirPath = getExtensionDirPath();
    	var rootExtensionDir = new File(extensionDirPath);    	
    };

    var processExtensionModuleDir = function(tenantId){
    	//Create the path to the tenants directory
    	//Iterate through each sub directory and create the path to the engine.js file
    	//Require the engine.js file and obtain the 
    };
    var processExtensionModule = function(extensionModule){
    	
    };
}(engine, constants,core));