({
	findAllLocatedAccounts : function(component) {
    	var action = component.get('c.findAllLocatedAccounts');
    	action.setCallback(this, function(accountListResponse) {
    		component.set('v.accountList', accountListResponse.getReturnValue());
    	});
    	$A.enqueueAction(action);
    }
})
