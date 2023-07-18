import r2wc from '@r2wc/react-to-web-component'
import * as ReactComponents from 'components/index'

customElements.define(
  'rwc-button',
  r2wc(ReactComponents.Button, {
    props: { label: 'string', onClick: 'function' }
  })
)

customElements.define(
  'rwc-input',
  r2wc(ReactComponents.Input, {
    props: { idTest: 'string' }
  })
)

export { ReactComponents }
