interface CareTopic {
  id: number;
  title: string;
  icon: string;
  level: string;
  description: string;
}

export default function CareTopicCard({ topic }: { topic: CareTopic }) {
  return (
    <article
      className="p-6 rounded-2xl border shadow-sm
      bg-white dark:bg-zinc-900
      border-zinc-200 dark:border-zinc-800
      hover:shadow-lg hover:-translate-y-1
      transition-all duration-300"
    >
      <div className="text-4xl">{topic.icon}</div>

      <h3 className="mt-3 text-xl font-semibold text-text-primary">
        {topic.title}
      </h3>

      <p className="text-text-secondary mt-2">{topic.description}</p>

      <span
        className="mt-3 inline-block text-xs px-3 py-1 rounded-full
        bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      >
        {topic.level.toUpperCase()}
      </span>
    </article>
  );
}
