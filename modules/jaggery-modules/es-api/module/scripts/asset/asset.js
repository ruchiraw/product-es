var asset = {};
(function(asset,core){
	asset.createAnonAssetManager = function(tenantId){
		var engine = core.getEngine(tenantId);
		return engine.service('asset').createAnonAssetManager(tenantId);
	};
}(asset,core));