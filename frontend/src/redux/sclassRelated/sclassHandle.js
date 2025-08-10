import axios from 'axios';
import { getRequest, getSuccess, getFailed, getError, getStudentsSuccess, getSclassDetailsSuccess, getSubjectsSuccess, getFreeSubjectListSuccess, getSubjectDetailsSuccess } from './sclassSlice';

const apiBase = '/api';

export const getAllSclasses = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${apiBase}/${address}List/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error));
    }
}

export const getSclassStudents = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${apiBase}/Sclass/Students/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getStudentsSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error));
    }
}

export const getSclassDetails = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${apiBase}/${address}/${id}`);
        if (result.data) {
            dispatch(getSclassDetailsSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error));
    }
}

export const getAllSubjects = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${apiBase}/${address}/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getSubjectsSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error));
    }
}

export const getFreeSubjectList = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${apiBase}/FreeSubjectList/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getFreeSubjectListSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error));
    }
}

export const getSubjectDetails = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${apiBase}/${address}/${id}`);
        if (result.data) {
            dispatch(getSubjectDetailsSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error));
    }
}