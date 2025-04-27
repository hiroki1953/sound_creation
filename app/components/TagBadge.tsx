export function TagBadge({ label }: { label: string }) {
  return (
    <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
      {label}
    </span>
  );
}
