import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCheck, faPhone } from '@fortawesome/free-solid-svg-icons'

export function registerFa() {
  library.add(faBars, faCheck, faPhone)
}
