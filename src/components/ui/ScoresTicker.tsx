const PLACEHOLDER_SCORES = [
  "WSH COMMANDERS 27 - DAL COWBOYS 21",
  "WSH NATIONALS 5 - ATL BRAVES 3",
  "WSH WIZARDS 108 - BOS CELTICS 112",
  "WSH CAPITALS 4 - PIT PENGUINS 2",
  "DC UNITED 1 - NYC FC 1",
  "WSH MYSTICS 85 - NY LIBERTY 79",
];

export default function ScoresTicker() {
  const scores = [...PLACEHOLDER_SCORES, ...PLACEHOLDER_SCORES];

  return (
    <div className="bg-navy border-y-2 border-silver overflow-hidden">
      <div className="ticker-animate flex whitespace-nowrap py-2">
        {scores.map((score, i) => (
          <span key={i} className="inline-flex items-center mx-8">
            <span className="headline-stamp text-white text-xs tracking-wider">{score}</span>
            <span className="ml-8 text-red text-xs">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
