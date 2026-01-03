interface Props {
  active: string;
  onChange: (v: string) => void;
}

const filters = [
  { id: "all", label: "All" },
  { id: "easy", label: "Beginner" },
  { id: "medium", label: "Intermediate" },
  { id: "hard", label: "Advanced" },
];

export default function DifficultyFilter({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => onChange(f.id)}
          className={`
            px-4 py-2 rounded-full text-sm border transition-all
            ${
              active === f.id
                ? "bg-green-700 text-white border-green-700"
                : "border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            }
          `}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
