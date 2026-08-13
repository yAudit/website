/**
 * Renders a JSON-LD structured data script tag.
 * Used for SEO and AIO (AI Optimization) — helps search engines
 * and AI assistants understand page content.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
