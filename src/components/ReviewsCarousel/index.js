import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {initialIndex: 0}

  onRightClick = () => {
    const {initialIndex} = this.state
    const {reviewsList} = this.props

    if (initialIndex < reviewsList.length - 1) {
      this.setState(prevState => ({initialIndex: prevState.initialIndex + 1}))
    }
  }

  renderActiveReview = currentReview => {
    const {imgUrl, username, companyName, description} = currentReview

    return (
      <div className="person-details-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onLeftClick = () => {
    const {initialIndex} = this.state

    if (initialIndex > 0) {
      this.setState(prevState => ({initialIndex: prevState.initialIndex - 1}))
    }
  }

  render() {
    const {initialIndex} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[initialIndex]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-container">
          <button type="button" className="button" data-testId="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
              onClick={this.onLeftClick}
            />
          </button>

          {this.renderActiveReview(currentReviewDetails)}

          <button type="button" className="button" data-testId="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
              onClick={this.onRightClick}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
