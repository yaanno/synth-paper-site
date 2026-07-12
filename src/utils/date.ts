// Single shared long-form date formatter so the byline dates and Correction notes
// render identically everywhere (index, article route, corrections).
const dateFmt = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export function formatDate(date: Date): string {
  return dateFmt.format(date);
}
