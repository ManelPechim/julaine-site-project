import { Leaf } from "lucide-react";

type SectionTitleProps = {
  label: string;
  title?: string;
  description?: string;
  center?: boolean;
};

export const SectionTitle = ({ label, title, description, center = false }: SectionTitleProps) => {
  return (
    <div className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border bg-[#7A9B8E] text-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]">
        <Leaf className="h-3.5 w-3.5" />
        {label}
      </p>
      <h2 className="sd-title-font text-3xl leading-tight text-[#4F6F63] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[#8A8077] md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}