import { apiSlice } from './apiSlice';
import { getBaseURL } from '../utils/url';

const url = getBaseURL();
const USERS_URL = `${url}/api/v1`

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data,
                credentials: "include"
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'GET',
                credentials: "include"
            })
        }),
        sendOTP: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/sendOTP`,
                method: 'POST',
                body: data,
                credentials: "include"
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/signup`,
                method: 'POST',
                body: data,
                credentials: "include"
            })
        })
    })
})

export const { useLoginMutation, useLogoutMutation, useSendOTPMutation, useRegisterMutation } = usersApiSlice;