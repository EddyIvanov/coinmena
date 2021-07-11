import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const StyledButton = withStyles({
  root: {
    height: 28,
    borderRadius: 6,
    padding: '4px 12px',
  },
  label: {
    textTransform: 'none',
  },
})(Button)

export default StyledButton
