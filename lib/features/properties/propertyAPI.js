import {api} from '../api/api';

export const propertyAPI = api.injectEndpoints({
    endpoints: (build) => ({
      addNewProperty: build.mutation({
        query(data){
            return{
                url: 'properties', 
                method:"POST", 
                body:data
            }
        }
      })

    })
})


export const {useAddNewPropertyMutation, } = propertyAPI