import * as ActionTypes from './actionTypes'

export const addCar = (car) => {
  return {
    type: ActionTypes.ADD_CAR,
    value: car
  }
}

export const removeCar = (index) => {
  return {
    type: ActionTypes.REMOVE_CAR,
    value: index
  }
}