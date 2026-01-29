function Rating({ rating, size = 10 }: { rating: number; size?: number }) {
  const ratingScale = Array.from({ length: 10 }).map((_, i) => i);
  return rating ? (
    <div className="flex gap-1 items-center">
      {ratingScale.map(r => (
        <img
          key={r}
          style={{ width: size }}
          src={
            r < rating
              ? '/src/assets/svg/star.svg'
              : '/src/assets/svg/star-gray.svg'
          }
          alt="star"
        />
      ))}
    </div>
  ) : (
    <small className="text-xs">No rating for this movie</small>
  );
}

export default Rating;
