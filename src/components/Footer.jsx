
const Footer = ({ input, contact, social }) => {
  return (
    <div>
      <footer className='footer'>
        <div className="container footer__wrap">
          <div className="footer__input">
            {input.map((label, index) => (
              <input key={index} type="text" placeholder={label} className='inp' />
            ))}
            <div className="btn__footer">
              <button className='footer__btn'>Submit</button>
            </div>
          </div>
          <div className="footer__scct">
            <div className="footer__contact">
              <h3 className="footer__contact-title">CONTACT</h3>
              <ul className="footer__list">
                <a href="#" className="footer__item" >
                  {contact.map((info, index) => (
                    <li key={index} className='contact__list' >{info}</li>
                  ))}
                </a>

              </ul>
            </div>
            <div className="footer__social">
              <h3 className="social__title">SOCIAL</h3>
              <ul className="social__list">
                <a href="#" className="social__item">
                  {social.map((platform, index) => (
                    <li key={index} className='contact__list'>{platform}</li>
                  ))}
                </a>

              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer