interface Props {
  value: string;
  onChange: (v: string) => void;
}

const categories = [
  { id: "all", label: "All" },
  { id: "Indoor Plants", label: "Indoor Plants" },
  { id: "Outdoor Plants", label: "Outdoor Plants" },
  { id: "Plant Care", label: "Plant Care" },
  { id: "Gardening Tips", label: "Gardening Tips" },
  { id: "DIY Projects", label: "DIY Projects" },
];

export default function CategoryFilter({ value, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`
            px-4 py-2 rounded-full text-sm border transition-all
            ${
              value === cat.id
                ? "bg-green-700 text-white border-green-700"
                : "border-zinc-300 text-text-primary dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            }
          `}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
