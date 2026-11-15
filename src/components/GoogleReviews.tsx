import { FiveStarRow, GoogleMark } from '../assets/Icons'
import { GOOGLE_BUSINESS_URL, GOOGLE_REVIEW_URL } from '../constants'

export function GoogleReviewsFooter() {
  return (
    <div className="footer__item footer__item--reviews">
      <GoogleMark size={28} />
      <div className="footer__item-copy footer__reviews">
        <small>Google Reviews</small>
        <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer">
          5 star reviews on Google
        </a>
        <FiveStarRow className="footer__stars google-stars" />
        <p className="footer__reviews-month">(30+) 5* reviews on Google in last month</p>
        <a className="footer__profile-link" href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer">
          Leave a 5 star review
        </a>
        <a
          className="footer__profile-link"
          href={GOOGLE_BUSINESS_URL}
          target="_blank"
          rel="noreferrer"
        >
          View Google Business Profile
        </a>
      </div>
    </div>
  )
}
