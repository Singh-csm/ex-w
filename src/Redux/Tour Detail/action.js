import axios from "axios"

//tourdetail
export const GET_SINGLE_TOUR_REQUEST = "GET_SINGLE_TOUR_REQUEST";

export const singleTour = (id) => async (dispatch) => {
    try {
        console.log(id)
        const response = await axios.get(`https://longhaired-talented-broccoli.glitch.me/travelious_tour/${id}`)
        console.log(response)
        dispatch({type:GET_SINGLE_TOUR_REQUEST,payload:response.data})
    } catch (error) {
        
    }
}
