export const gg = "gg";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AuthAction } from "../State/Types";

// interface AuthState {
//     token: string | null
//     isAuthenticated: boolean
// }

// export const initialState: AuthState = {
//     token: null,
//     isAuthenticated: false
// }

// type payloadT = {
//     payload : string | boolean
// }

// const auth = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         saveToken(state, { payload }:PayloadAction<payloadT) {
//             if (payload) {
//                 state = payload;
//             }
//         },
//         clearToken(state) {
//             state.token = null;
//         },
//         setAuthState(state, { payload }) {
//             state.isAuthenticated = payload;
//         },
//     }
// });

// // export { saveToken, clearToken, setAuthState } = auth.actions