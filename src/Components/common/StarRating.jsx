
export default function StarRating({ rating = 0, max = 5, className = "" }) {

  const filledCount = Math.max(0, Math.min(max, Math.floor(Number(rating))));

    return (
        <div className={`flex gap-1 ${className}`} aria-label={`امتیاز: ${rating}`}>
            {Array.from({ length: max }).map((_, i) => {
                const filled = i < filledCount;
                return (
                    <span key={i} className={filled ? "text-yellow-400" : "text-gray-300"}>
                        ★
                    </span>
                );
            })}
        </div>
    );
}
