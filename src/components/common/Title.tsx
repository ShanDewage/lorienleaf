// components/Title.tsx
interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className = "" }: TitleProps) {
  return (
    <h1
      className={`title-5xl text-center mb-4 ${className}`}
    >
      {children}
    </h1>
  );
}
