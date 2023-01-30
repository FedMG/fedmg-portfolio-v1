import { useTypewriterEffect } from '@/hooks/useTypewriterEffect'

export const Typewriter = ({ msg, delay, timeout, style }) => {
  const [text] = useTypewriterEffect(msg, delay, timeout)
  return <span translate='no' className={style}>{text}</span>
}
