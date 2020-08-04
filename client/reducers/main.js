import { UPDATE_TEST_BASE } from '../actions/main'

const INITIAL_STATE = {
  testBase: 'ABC'
}

const testBase = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_TEST_BASE:
      return { ...state }

    default:
      return state
  }
}

export default testBase
