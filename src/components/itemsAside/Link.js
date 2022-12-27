export default function Link({link, textLink}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
    >{textLink}</a>
  )
}
