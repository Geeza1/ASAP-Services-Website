import { Star } from "lucide-react";
import { homepageGoogleReviews } from "../../lib/content/reviews";

const displayedReviews = homepageGoogleReviews.slice(0, 3);

export function GoogleReviews() {
  return (
    <section id="reviews" className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="google-reviews-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-2xl font-black tracking-normal text-asap-cyan" aria-label="Five star rating">
            <span aria-hidden>★★★★★</span>
          </p>
          <h2 id="google-reviews-heading" className="mt-4 text-4xl font-black text-slate-950">
            Trusted Local Auto Electrical Repairs
          </h2>
          <p className="reading-text mx-auto mt-5 max-w-3xl">
            Real reviews from customers who have visited our Ringwood workshop.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {displayedReviews.map((review) => (
            <article key={`${review.customerName}-${review.reviewText}`} className="flex h-full flex-col rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center justify-between gap-4">
                <div role="img" aria-label={`${review.rating} out of 5 stars`} className="flex gap-1 text-asap-cyan">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} aria-hidden fill="currentColor" size={20} />
                  ))}
                </div>
                <span className="shrink-0 rounded-full border border-asap-cyan/35 bg-asap-cyan/10 px-3 py-1 text-xs font-black text-asap-purple">
                  {review.sourceLabel}
                </span>
              </div>

              <blockquote className="mt-5 flex-1">
                <p className="reading-text">&ldquo;{review.reviewText}&rdquo;</p>
              </blockquote>

              <footer className="mt-6 border-t border-slate-200 pt-4">
                <p className="font-black text-slate-950">{review.customerName}</p>
                {(review.service || review.date) && (
                  <p className="mt-1 text-sm font-bold text-slate-600">
                    {[review.service, review.date].filter(Boolean).join(" - ")}
                  </p>
                )}
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            // TODO: Insert Google Business Profile reviews URL when available.
            href="#reviews"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-asap-purple px-6 font-black text-white shadow-sm transition hover:bg-asap-cyan hover:text-slate-950"
          >
            Read More Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
