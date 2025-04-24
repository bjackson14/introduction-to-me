import './Card.css'

export default function Card({ header, children }) {
  return (
    <div className='container'>
      <h2 className='header'>{header}</h2>
      <p className='content'>{children}</p>
    </div>
  )
}