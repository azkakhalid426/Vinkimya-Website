'use client';

import { Star } from 'lucide-react';

export default function Reviews() {

  const reviews = [
    {
      name: 'Ahmed Hassan',
      rating: 5,
      review:
        'Excellent quality products and outstanding customer service. Vinkimya has been our trusted partner for 5 years.',
    },
    {
      name: 'Fatma Yilmaz',
      rating: 5,
      review:
        'Professional team, high-quality chemicals, and reliable delivery. Highly recommended!',
    },
    {
      name: 'Muhammad Ali',
      rating: 5,
      review:
        'Best chemical supplier in the region. Their products meet international standards consistently.',
    },
    {
      name: 'Usman',
      rating: 5,
      review:
        'Reliable supplier with great product consistency and excellent support team.',
    },
    {
      name: 'Zafar',
      rating: 5,
      review:
        'We have worked with Vinkimya for years. Always professional and dependable.',
    },
  ];

  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Client Reviews
          </h1>

          <p className="text-xl text-gray-600">
            Trusted by businesses worldwide
          </p>

          {/* Rating Summary */}

          <div className="flex justify-center items-center gap-2 mt-6">

            <div className="flex">

              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={`${
                    i < Math.round(avgRating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}

            </div>

            <span className="text-lg font-semibold text-gray-700">
              {avgRating.toFixed(1)} / 5
            </span>

            <span className="text-gray-500">
              ({reviews.length} reviews)
            </span>

          </div>

        </div>

        {/* Review Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              {/* Stars */}

              <div className="flex gap-1 mb-4">

                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              {/* Review Text */}

              <p className="text-gray-600 italic mb-6">
                "{review.review}"
              </p>

              {/* Author */}

              <div className="border-t pt-4">

                <p className="font-bold text-gray-900">
                  {review.name}
                </p>

                <p className="text-sm text-gray-500">
                  {review.company}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}