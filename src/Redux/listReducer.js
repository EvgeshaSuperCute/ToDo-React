import {createSlice} from "@reduxjs/toolkit";
import FirebaseClass from "../service/dataBase";

export const slice = createSlice({
    name: 'lists',
    initialState:{
        isLoading: false,
        data:{},
        errors: null,
    },
    reducers:{
        fetchLists: state => ({
            ...state,
            isLoading: true,
        }),
        fetchListsResolve: (state, action) => ({
            ...state,
            isLoading: false,
            data: action.payload,
        }),
        fetchListsReject: (state, action) => ({
            ...state,
            isLoading: false,
            data: {},
            error: action.payload,
        }),
    }
});

export const {fetchLists, fetchListsResolve, fetchListsReject} = slice.actions;

export const selectListsLoading = state => state.lists.isLoading;
export const selectListsData = state => state.lists.data;

export const getListsAsync = () => async (dispatch) => {
    //console.log(dispatch(fetchLists()));
    const data = await FirebaseClass.getListOnce();
    //console.log('reducerData:', data);
    dispatch(fetchListsResolve(data));
}

export const getLists = () => async (dispatch) => {
    //console.log(dispatch(fetchLists()));
    await FirebaseClass.getListSocket((data) => { console.log("***:",data)
        dispatch(fetchListsResolve(data));
    });
    //console.log('reducerData:', data);
    //dispatch(fetchListsResolve(data));
}

export default slice.reducer;