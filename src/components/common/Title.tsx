import { IconCloverFilled } from "@tabler/icons-react";

interface TitleProps {
  title: string;
  subtitle?: string;

  align?: "left" | "center";

  showUnderline?: boolean;

  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  underlineClassName?: string;
}

export default function Title({
  title,
  subtitle,
  align = "center",
  showUnderline = true,

  containerClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  underlineClassName = "",
}: TitleProps) {
  return (
    <div
      className={`mb-16 ${
        align === "center" ? "text-center mx-auto" : ""
      } ${containerClassName}`}
    >
      <h2
        className={`title-5xl  capitalize mb-4 ${titleClassName}`}
      >
        {title}
      </h2>

      {showUnderline && (
        <span
          className={`mx-6 flex gap-2 items-center justify-center ${underlineClassName}`}
        >
          <span className="block w-24 h-px bg-gray-300"></span>
          <IconCloverFilled
            size={20}
            className="text-secondary pointer-events-none"
          />
          {/* <svg
            className="mx-3 text-green-600"
            fill="none"
            height="20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            width="20"
          >
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
          </svg> */}
          <span className="block w-24 h-px bg-gray-300"></span>
        </span>
      )}

      {subtitle && (
        <p
          className={`mt-2 text-text-muted  tracking-wide text-sm md:text-base max-w-xl mx-auto ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
