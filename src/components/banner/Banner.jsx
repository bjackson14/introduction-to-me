import { FaCircleInfo, FaCircleXmark, FaTriangleExclamation, FaCircleCheck } from "react-icons/fa6"
import clsx from "clsx"
import './Banner.css'

export default function Banner({type, title, children}) {
  const icons = {
    'success': <FaCircleCheck className={'icon success'} />,
    'warning': <FaTriangleExclamation className={'icon warning'} />,
    'error': <FaCircleXmark className={'icon error'} />,
    'neutral': <FaCircleInfo className={'icon'} />
  }

  return (
    <div className={clsx('container', type && `${type}`)}>
      {type ? icons[type] : icons['neutral']}
      <span className={clsx('title', type && `${type}`)}>{title}</span>
      {children && <div className={clsx('message', type && `${type}`)}>{children}</div>}
    </div>
  )
}