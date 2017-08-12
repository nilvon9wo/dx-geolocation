public with sharing class GEO_AccountAuraCtrl {
	DB_AccountSelector accountSeletor;
	
    public GEO_AccountAuraCtrl(DB_AccountSelector accountSeletor) {
		this.accountSeletor = accountSeletor;
    }

    public GEO_AccountAuraCtrl() {
		this(new DB_AccountSelector());
    }
    
    public static List<Account> findAll() {
    	return (new GEO_AccountAuraCtrl()).selectWithLocation();
    }
    
    @testVisible 
    private List<Account> selectWithLocation() {
    	Integer quantity = 50;
    	return this.accountSeletor.selectWithLocation(quantity);
    }
}
