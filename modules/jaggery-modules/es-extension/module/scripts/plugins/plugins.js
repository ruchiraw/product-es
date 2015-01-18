var plugins = {};
(function(plugins){

	function EnginePlugin(){
		this.context = null;
	}
	EnginePlugin.prototype.init = function(context){
		this.context = context;
	};

	function ApplicationCache(){

	}

	ApplicationCache.prototype = Object.create(EnginePlugin.prototype);

	ApplicationCache.prototype.get = function(key){
		return application.get(key);
	};

	ApplicationCache.prototype.set = function(key,obj){
		application.put(key,obj);
	};

	



	plugins.ApplicationCache = ApplicationCache;

}(plugins));