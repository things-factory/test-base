import { store } from '@things-factory/shell'
import testBase from './reducers/main'

export default function bootstrap() {
  store.addReducers({
    testBase
  })
}
