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
             px-6 py-2 text-text-primary rounded-full text-sm border shadow-xs transition-all
            ${
              value === cat.id
                ? "bg-primary text-white border-border-300"
                : "border-border-200  hover:bg-bg-100"
            }
          `}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
