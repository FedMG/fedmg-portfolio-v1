export const FragmentDelay = ({ children, isVisible }) => {
  return (
    <div
      style={{
        transition: 'opacity 1.5s',
        opacity: isVisible ? 1 : 0
      }}
    >
      {children}
    </div>
  )
}
