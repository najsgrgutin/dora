import { connect } from 'react-redux'
import Showname from './Showname'
import { loginUser } from './ShownameActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUserClick: (event) => {
      event.preventDefault();

      dispatch(loginUser())
    }
  }
}

const ShownameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Showname)

export default ShownameContainer
