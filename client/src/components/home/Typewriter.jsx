import { useTypewriterEffect } from "@/hooks/useTypewriterEffect";
import { useTypeWriterSplitEffect } from "@/hooks/useTypewriterSplitEffect";

export const Typewriter = ({ msg, delay, timeout, style }) => {
  const [ text ] = useTypewriterEffect(msg, delay, timeout)

  return (
    <>
      <span className={style}>{text}</span>
    </>
  );
}


export const TypewriterSplit = ({ msg, delay, split, styles}) => {
  const [text] = useTypeWriterSplitEffect(msg, delay)
  
  return (
    <>
      <span className={styles[0]}>{text.slice(0, split)}
      <span  className={styles[1]}>{text.slice(split,)}</span>
      </span>
   </>
  )
}
