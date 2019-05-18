const axios = require('axios');

const getLugarLatLng = async (dir) => {
	const encodedUrl = encodeURI(dir);

	const instance = axios.create({
		baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
		headers: { 'X-RapidAPI-Key': '5831044cc2mshfed5b66376c0116p15a45bjsn31629bf92177' }
	});

	const respuesta = await instance.get();

	if (respuesta.data.Results.length === 0) {
		throw new Error(`No hay resultados para ${dir}`);
	}

	const data = respuesta.data.Results[0];
	const direccion = data.name;
	const lat = data.lat;
	const lng = data.lon;

	return {
		direccion,
		lat,
		lng
	}
}

module.exports = {
	getLugarLatLng
}