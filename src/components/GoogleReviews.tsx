import { useEffect, useState } from 'react'
import { FiveStarRow, GoogleMark, IconStarFilled } from '../assets/Icons'
import {
  GOOGLE_BUSINESS_URL,
  GOOGLE_REVIEW_URL,
  REVIEWS_ENDPOINT,
} from '../constants'

type ReviewItem = {
  author: string
  rating: number
  text: string
  relativeTime: string
}

type ReviewsPayload = {
  success: boolean
  rating?: number | null
  total?: number | null
  reviews?: ReviewItem[]
}

function StarsInline({ rating, size = 12 }: { rating: number; size?: number }) {
  const filled = Math.max(0, Math.min(5, Math.round(rating)))
  return (
    <span className="google-stars reviews-card__stars" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStarFilled
          key={i}
          size={size}
          className={i < filled ? undefined : 'reviews-card__star--empty'}
        />
      ))}
    </span>
  )
}

function ReviewCard({ review }: { review: ReviewItem }) {
  const snippet =
    review.text.length > 160 ? `${review.text.slice(0, 157).trim()}…` : review.text

  return (
    <article className="reviews-card">
      <div className="reviews-card__top">
        <strong>{review.author}</strong>
        <StarsInline rating={review.rating} />
      </div>
      {snippet ? <p>{snippet}</p> : null}
      {review.relativeTime ? <small>{review.relativeTime}</small> : null}
    </article>
  )
}

function useGoogleReviews() {
  const [payload, setPayload] = useState<ReviewsPayload | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch(REVIEWS_ENDPOINT, { headers: { Accept: 'application/json' } })
      .then(async (res) => {
        const data = (await res.json()) as ReviewsPayload
        if (!res.ok || !data.success) throw new Error('reviews_unavailable')
        if (!cancelled) setPayload(data)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return { payload, failed }
}

export function GoogleReviewsFooter() {
  const { payload, failed } = useGoogleReviews()
  const rating = payload?.rating
  const total = payload?.total
  const reviews = payload?.reviews ?? []
  const hasLive = Boolean(payload?.success && (rating != null || total != null || reviews.length > 0))
  const marqueeReviews = reviews.length > 0 ? [...reviews, ...reviews] : []

  return (
    <>
      <div className="footer__item footer__item--reviews">
        <GoogleMark size={28} />
        <div className="footer__item-copy footer__reviews">
          <small>Google Reviews</small>

          {hasLive ? (
            <div className="footer__reviews-summary">
              {rating != null ? (
                <span className="footer__reviews-score">{rating.toFixed(1)}</span>
              ) : null}
              <FiveStarRow className="footer__stars google-stars" />
              {total != null ? (
                <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noreferrer">
                  {total} Google reviews
                </a>
              ) : (
                <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer">
                  5 star reviews on Google
                </a>
              )}
            </div>
          ) : (
            <>
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer">
                5 star reviews on Google
              </a>
              <FiveStarRow className="footer__stars google-stars" />
            </>
          )}

          {failed && !hasLive ? (
            <p className="footer__reviews-note">
              Live reviews appear once Places is configured on the server.
            </p>
          ) : null}

          <a
            className="footer__profile-link"
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
          >
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

      {reviews.length > 0 ? (
        <div className="footer__reviews-band" aria-label="Recent Google reviews">
          <div className="reviews-marquee">
            <div className="reviews-marquee__track">
              {marqueeReviews.map((review, index) => (
                <ReviewCard key={`${review.author}-${index}`} review={review} />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
