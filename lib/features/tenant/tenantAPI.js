import {api} from '../api/api'


export const tenantAPI = api.injectEndpoints({
    endpoints: (build) => ({
        getAllTenants: build.query({
            query: () => ({
                url:'/tenants',
                method:"GET"
            })
    }),
        addNewTenant: build.mutation({
            query(data){
             return {
                url:'/tenants', 
                method:'POST', 
                body:data
            }
        }
        })
    })
})



export const {useGetAllTenantsQuery, useAddNewTenantMutation, } = tenantAPI