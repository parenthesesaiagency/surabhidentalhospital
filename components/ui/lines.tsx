/**
 * Renders a heading stored as an array of lines, joined with <br/>.
 * `title` and `copy` in content files are arrays; this keeps JSX clean.
 */
export function Lines({
  lines,
  breakClassName,
}: {
  lines: readonly string[];
  breakClassName?: string;
}) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={`${line}-${i}`}>
          {line}
          {i < lines.length - 1 && <br className={breakClassName} />}
        </span>
      ))}
    </>
  );
}
