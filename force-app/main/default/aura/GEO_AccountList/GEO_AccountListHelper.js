({
	findAllLocatedAccounts : function(component) {
    	var action = component.get('c.findAllLocatedAccounts');
    	action.setCallback(this, function(accountListResponse) {
    		var accountList = accountListResponse.getReturnValue();
    		component.set('v.accountList', accountList);

    		var accountsLoadedEvent = $A.get('e.c:GEO_AccountsLoaded');
    		 console.log('######## findAllLocatedAccounts accountList: ' + accountList);
    		accountsLoadedEvent.setParam('accountList', accountList);
    		accountsLoadedEvent.fire();
    	});
    	$A.enqueueAction(action);
    }
})
