import {
	MOSTRAR_ALERTA,
	OCULTAR_ALERTA
} from '../types'

// CADA REDUCER TIENE SU STATE

const initialState = {
	alerta: null
}

export default function(state = initialState, action) {
	switch(action.type) {
		default: 
			return state;
	}
}