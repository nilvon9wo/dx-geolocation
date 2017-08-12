public with sharing class DB_AccountSelector {
	public List<Account> selectWithLocation(Integer quantity) {
		return [
			SELECT id, name, Location__Latitude__s, Location__Longitude__s
			FROM Account
			WHERE Location__Latitude__s != NULL
				AND Location__Longitude__s != NULL
			LIMIT :quantity
		];
	}
}
