const { argv } = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async (direccion) => {
	try {
		const { lat, lng } = await lugar.getLugarLatLng(direccion);
		const getClima = await clima.getClima(lat, lng);

		return `El clima de ${direccion} es de ${getClima}`;
	} catch(e) {
		return `No se pudo determinar el clima de ${direccion}`;
	}
}

getInfo(argv.direccion)
	.then(console.log)
	.catch(console.log);