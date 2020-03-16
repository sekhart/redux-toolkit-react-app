import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    products: [],
    loading: false,
    hasErrors: false,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProducts: state => {
            state.loading = true
        },
        getProductsSuccess: (state, { payload }) => {
            state.products = payload;
            state.loading = false;
            state.hasErrors = false;
        },
        getProductsFailure: state => {
            state.loading = false;
            state.hasErrors = true;
        },
    }
})

export const { getProducts, getProductsSuccess, getProductsFailure } = productsSlice.actions;

export const productsSelector = state => state.products;

// export default productsSlice.reducer;

// The reducer
export default productsSlice.reducer

export function fetchProducts() {
    return async dispatch => {
        dispatch(getProducts());

        try {
            // const response = await fetch(`http://localhost:8090/productInfo/getProducts`);
            const response = await fetch("https://api.github.com/users");
            
            const data = await response.json();
            console.log("data:---" + data)
            dispatch(getProductsSuccess(data))
        } catch (error) {
            dispatch(getProductsFailure())
        }
    };
}