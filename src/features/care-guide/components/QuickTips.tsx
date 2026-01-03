export default function QuickTips() {
  const tips = [
    "Check soil moisture before watering",
    "Avoid harsh direct sunlight for long periods",
    "Rotate plants weekly for balanced growth",
    "Ensure pots have drainage holes",
    "Reduce watering in winter months",
    "Inspect leaves regularly for pests",
  ];

  return (
    <div
      className="rounded-2xl p-8 border
      bg-green-50 dark:bg-zinc-900
      border-green-200 dark:border-zinc-800"
    >
      <h2 className="text-2xl font-bold text-text-primary">Quick Care Tips</h2>

      <ul className="grid md:grid-cols-2 gap-3 mt-4">
        {tips.map((tip) => (
          <li key={tip} className="flex gap-2">
            <span>✔️</span>
            <p className="text-text-secondary">{tip}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
