import {
	AGREGAR_PRODUCTO,
	AGREGAR_PRODUCTO_EXITO,
	AGREGAR_PRODUCTO_ERROR,
	COMENZAR_DESCARGA_PRODUCTOS,
	DESCARGA_PRODUCTOS_EXITO,
	DESCARGA_PRODUCTOS_ERROR,
	OBTENER_PRODUCTO_ELIMINAR,
	PRODUCTO_ELIMINAR_EXITO,
	PRODUCTO_ELIMINAR_ERROR,
	OBTENER_PRODUCTO_EDITAR,
	PRODUCTO_EDITADO_EXITO,
	PRODUCTO_EDITADO_ERROR
} from '../types';

// Cada reducer tiene su propio state

const  initialState = {
	productos: [],
	error: null,
	loading: false,
	productoeliminar: null,
	productoditar: null
}

export default function(state = initialState, action) {
	switch(action.type) {
		// los case van a describir lo que va pasar con la aplicación  y va ir cambiando el state de acuerdo con el payload
		case COMENZAR_DESCARGA_PRODUCTOS:
		case AGREGAR_PRODUCTO: 
		return {
			...state,
			loading: action.payload
		}
		case AGREGAR_PRODUCTO_EXITO:
			return {
				...state,
				loading: false,
				productos: [...state.productos, action.payload]
			}

			case AGREGAR_PRODUCTO_ERROR:
			case DESCARGA_PRODUCTOS_ERROR:
			case PRODUCTO_ELIMINAR_ERROR:
			case PRODUCTO_EDITADO_ERROR:	
				return {
					...state,
					loading: false,
					error: action.payload
				}
		
			case DESCARGA_PRODUCTOS_EXITO: 
				return {
					...state,
					loading: false,
					error: null,
					productos: action.payload
				}	
			case OBTENER_PRODUCTO_ELIMINAR:
				return {
					...state,
					productoeliminar: action.payload
				}	
			case PRODUCTO_ELIMINAR_EXITO:
			return{
				...state,
				productos: state.productos.filter( producto => producto.id !== state.productoeliminar ),
				productoeliminar: null
			}
			case OBTENER_PRODUCTO_EDITAR:
				return {
					...state,
					productoeditar:  action.payload
				}
			case PRODUCTO_EDITADO_EXITO:
				return {
					...state,
					productoeditar: null,
					productos: state.productos.map(
						producto => producto.id === action.payload.id ? producto = action.payload : producto
					)
				}	
		default:
			return state;
	}
}