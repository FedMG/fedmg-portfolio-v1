export const Mail = ({ email, subject = '', body = '', children }) => {
  if (subject && body) {
    let params = '?'

    params += `subject=${encodeURIComponent(subject)}`
    params += `&body=${encodeURIComponent(body)}`

    return <a href={`mailto:${email}${params}`}>{children}</a>
  }

  return children
}
