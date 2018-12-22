/** @jsx jsx */
import { jsx } from '@emotion/core'

const Centered = props => {
  return <div css={{ maxWidth: '720px', margin: 'auto' }}>{props.children}</div>
}

export default Centered
