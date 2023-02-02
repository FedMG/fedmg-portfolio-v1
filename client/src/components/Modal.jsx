import { Buttons } from './Buttons'

const ModalHeader = ({ title, closeBtn }) => (
  <div className='modal-header flex-btw-cy'>
    <h3 className='modal-title'>{title}</h3>
    <div className='project-modal-button-box'>
      <button
        className='project-modal-button modal-close button'
        onClick={closeBtn}
      >
        <img
          src='/arrow-collapse.svg'
          className='project-modal-icon-button modal-close-icon container'
          alt='collapse modal icon'
          draggable={false}
        />
      </button>
    </div>
  </div>
)

const ModalImage = ({ source, title, srcSet }) => (
  <div className='modal-image'>
    <div className='figure-aspect-ratio-box'>
      <img
        src={source}
        alt={title + ' image'}
        className='figure-aspect-ratio'
        srcSet={srcSet}
        sizes='(max-width: 767px) 450px, (min-width: 768px) and (max-width: 1023px) 1000px, 1500px'
      />
    </div>
  </div>
)

const Badges = ({ items }) => (
  <div className='modal-badges'>
    {items.map(([name, color]) => (
      <span
        key={name}
        className='badge translateY'
        style={{ backgroundColor: `${color}` }}
      >
        {name}
      </span>
    ))}
  </div>
)

const ModalFooter = ({ controls }) => (
  <div className='modal-footer'>
    <div className='project-btn-container grid anchor-svg-container'>
      <Buttons
        data={controls}
        style={[
          'button-visibility anchors',
          'button project-btn-dimensions project-button'
        ]}
      />
    </div>
  </div>
)

export const Modal = ({ children, setClose, isOpen = false, data }) => {
  const { caption, badges, source, srcSet, buttons } = data

  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        setClose()
        break
      default:
    }
  }

  return !isOpen
    ? null
    : (
      <div
        className='modal flex-center'
        onClick={setClose}
        onKeyDown={keydownHandler}
      >
        <div className='modal-dialog' onClick={(e) => e.stopPropagation()}>
          <ModalHeader title={caption} closeBtn={setClose} />
          <div className='modal-content flex'>
            <ModalImage title={caption} src={source} srcSet={srcSet} />

            <div className='modal-details'>
              <Badges items={badges} />
              <div className='modal-body'>
                <p className='modal-description'>{children}</p>
              </div>
              <ModalFooter controls={buttons} />
            </div>
          </div>
        </div>
      </div>
      )
}
