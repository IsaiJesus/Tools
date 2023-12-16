export default function ExtractCodeInfo(value) {
  const match = /language-(\w+)/.exec(value);
  return match
    ? { language: match[1], code: value.slice(match[0].length).trim() }
    : { code: value.trim() };
}
