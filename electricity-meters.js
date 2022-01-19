// this is our
module.exports = function(pool) {

	// list all the streets the we have on records
	async function streets() {
		const streets = await pool.query(`select * from street`);
		return streets.rows;
	}

	// for a given street show all the meters and their balances
	function streetMeters(streetId) {
		const streetMeters = await pool.query(`select meter_number, balance from electricity_meter where street_id = ${streetId}`);
		return streetMeters.rows;
	}

	// return all the appliances
	function appliances() {
		const appliances = await pool.query(`select name from appliances`);
		return appliances.rows;

	}

	// increase the meter balance for the meterId supplied
	function topupElectricity(meterId, units) {

	}
	
	// return the data for a given balance
	function meterData(meterId) {
		const meter_balance = await pool.query(`select balance from electricity_meter where meter_number = ${meterId}`);
		return meter_balance.rows;
	
	}

	// decrease the meter balance for the meterId supplied
	function useElectricity(meterId, units) {
	
	}

	return {
		streets,
		streetMeters,
		appliances,
		topupElectricity,
		meterData,
		useElectricity
	}


}