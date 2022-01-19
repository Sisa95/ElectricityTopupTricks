// this is our
module.exports = function (pool) {

	// list all the streets the we have on records
	async function streets() {
		const streets = await pool.query(`select * from street`);
		return streets.rows;
	}

	// for a given street show all the meters and their balances
	async function streetMeters(streetId) {
		const streetMeters = await pool.query(`select meter_number, balance from electricity_meter where street_id = ${streetId}`);
		return streetMeters.rows;
	}

	// return all the appliances
	async function appliances() {
		const appliances = await pool.query(`select name from appliance`);
		return appliances.rows;

	}
	// updates the balance of the selected meter number with the given value.
	async function topupElectricity(meterId, units) {

		await pool.query(`UPDATE electricity_meter SET balance = (balance + ${units}) WHERE meter_number = ${meter_Id}`)
		let new_balance = await pool.query(`select meter_number, balance from electricity_meter where meter_number = ${meter_Id}`)
		return new_balance.rows
	}

	// return the data for a given balance
	async function meterData(meterId) {
		const meter_balance = await pool.query(`select balance from electricity_meter where meter_number = ${meterId}`);
		return meter_balance.rows;
	}

	// decrease the meter balance for the meterId supplied
	async function useElectricity(meterId, units) {

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