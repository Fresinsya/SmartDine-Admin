const initialState = {
    menus: [
        { id: 1, nama: 'Soto', harga: 10000 },
        { id: 2, nama: 'Bakso', harga: 15000 },
        { id: 3, nama: 'Mie Ayam', harga: 12000 }
    ]
}

export default function ListBahanMakanan(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                menus: state.menus.concat(action.payload)
            }
        case 'DELETE':
            return {
                ...state,
                menus: state.menus.filter((menu) => menu.id !== action.payload)
            }
        default:
            return state
    }
}

export const addTodo = (value) => {
    return {
        type: 'add',
        payload: value
    }
}
