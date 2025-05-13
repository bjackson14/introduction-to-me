import clsx from 'clsx'
import './Testimonial.css'

export default function Testimonial({src, alt, quotee, position, children}) {
  return (
    <section className={clsx(!src && 'simple', src && 'complex')}>
      {src &&
        <div className='img-container'>
          <img src={src} alt={alt}/>
        </div>
      }
      <div className="quote-container">
        <p className='quote'>{children}</p>
        <p className='quotee'>{quotee}</p>
        <p className="position">{position}</p>
      </div>
    </section>
  )
}