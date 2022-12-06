const Top = ({ title, span }) => (
  <div className='top flex-btw'>
    <div className='top__side-items inline-block' />
    <h1 className='inline-block'>
      <a href='#Home' className='top__anchor'>
        {title}
        <span className='title__span-logo'>{span}</span>
      </a>
    </h1>
    <div className='top__side-items inline-block' />
  </div>
)

export default Top
