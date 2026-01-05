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
            px-6 py-2 text-text-primary rounded-full text-sm border shadow-xs transition-all
            ${
              active === f.id
                ? "bg-primary text-white border-border-300 "
                : "border-border-200  hover:bg-bg-100 "
            }
          `}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
