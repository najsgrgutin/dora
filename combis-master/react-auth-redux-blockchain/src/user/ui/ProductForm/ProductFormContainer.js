import { connect } from 'react-redux'
import ProductForm from './ProductForm'
import { updateUser } from './ProductFormAction'

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onProfileFormSubmit: (name) => {
      event.preventDefault();

      dispatch(updateUser(name))
    }
  }
}

const ProductFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm)

export default ProductFormContainer
