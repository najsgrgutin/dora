import React, { Component } from 'react'
import ProductFormContainer from '../../ui/ProductForm/ProductFormContainer'
import { Link } from 'react-router'

class Product extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Products</h1>
            <div>
              <ul>
                <li>
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </li>
                <li className="pure-link">
                  <Link to="/dashboard" className="pure-link">Dashboard</Link>
                </li>
                <li>BANANA</li>
                <li>STIROPOR</li>
              </ul>
            </div>

            <ProductFormContainer/>
     
          </div>
        </div>
      </main>
    )
  }
}

export default Product
