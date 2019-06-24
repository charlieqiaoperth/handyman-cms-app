import {UPDATE} from '../actions/updateAction';

const defaultState = {
    city:{},
    currentWeather:{},
    forecastWeather:[]
   
}

const data = (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE :
        return Object.assign({}, state, {
            city:action.payload.city.city,
            currentWeather:action.payload.currentWeather.currentWeather,
            forecastWeather:action.payload.forecastWeather.forecastWeather,
        });        
        default:
            return state;
    }        
}

export default data;