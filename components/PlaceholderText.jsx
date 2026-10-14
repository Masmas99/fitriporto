import { isPlaceholder } from "@/data/profile";

/**
 * Menampilkan nilai teks. Bila nilai masih placeholder "[...]", teks diberi
 * gaya putus-putus + label tersembunyi untuk pembaca layar.
 */
export default function PlaceholderText({ value, as: Tag = "span", className = "" }) {
  if (!isPlaceholder(value)) {
    return <Tag className={className}>{value}</Tag>;
  }
  return (
    <Tag className={`placeholder ${className}`} title="Placeholder — perlu diisi">
      {value}
      <span className="sr-only"> (placeholder, belum diisi)</span>
    </Tag>
  );
}
