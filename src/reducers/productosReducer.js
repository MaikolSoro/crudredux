// Cada reducer tiene su propio state

const  initialState = {
	productos: [],
	error: null,
	loading: false
}

export default function(state = initialState, action) {
	switch(action.type) {
		// los case van a describir lo que va pasar con la aplicación  y va ir cambiando el state de acuerdo con el pyload
		default:
			return state;
	}
}