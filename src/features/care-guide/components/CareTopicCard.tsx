interface CareTopic {
  id: number;
  title: string;
  icon: string;
  level: string;
  description: string;
}

export default function CareTopicCard({ topic }: { topic: CareTopic }) {
  return (
    // <article
    //   className="p-6 rounded-2xl border shadow-sm
    //   bg-white dark:bg-zinc-900
    //   border-zinc-200 dark:border-zinc-800
    //   hover:shadow-lg hover:-translate-y-1
    //   transition-all duration-300"
    // >
    //   <div className="text-4xl">{topic.icon}</div>

    //   <h3 className="mt-3 text-xl font-semibold text-text-primary">
    //     {topic.title}
    //   </h3>

    //   <p className="text-text-secondary mt-2">{topic.description}</p>

    //   <span
    //     className="mt-3 inline-block text-xs px-3 py-1 rounded-full
    //     bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    //   >
    //     {topic.level.toUpperCase()}
    //   </span>
    // </article>

    <div className="bg-300 flex gap-4 p-6 rounded-xs shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border-100 cursor-pointer">
      <div className="flex items-center justify-center max-w-16 w-full  rounded-md bg-200 text-3xl shadow-sm ">
        {topic.icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold tracking-wide font-oswald text-text-muted mb-2">
          {topic.title}
        </h3>

        <p className="text-base tracking-wide text-text-secondary mb-4">
          {topic.description}
        </p>

        <span
          className="text-xs inline-block px-3 py-1 rounded-full shadow-xs
          bg-200 text-primary border border-border-300"
          //   className="mt-0 inline-block text-xs px-3 py-1 rounded-full
          // bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
        >
          {topic.level.toUpperCase()}
        </span>
        {/* <span className="text-sm font-semibold text-primary hover:underline">
          Learn More →
        </span> */}
      </div>
    </div>
  );
}
