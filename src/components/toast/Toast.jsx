import { useState, useEffect } from "react"
import { LuCircleCheck } from "react-icons/lu"
import { BsExclamationCircle } from "react-icons/bs"
import { HiOutlineInformationCircle } from "react-icons/hi"
import { VscError } from "react-icons/vsc"
import clsx from "clsx"
import './Toast.css'

export default function Toast({ title, type, children }) {
  const [visible, setVisible] = useState(true)
  const icon = chooseIcon()

  useEffect(() => {
    console.log('useEffect')
    setTimeout(() => setVisible(false), 3000)
  }, [])

  function chooseIcon() {
    if (type === 'success') {
      return <LuCircleCheck className="icon success" />
    }
    if (type === 'warning') {
      return <BsExclamationCircle className="icon warning" />
    }
    if (type === 'error') {
      return <VscError className="icon error" />
    }
    return <HiOutlineInformationCircle className="icon information" />
  }

  return (
    <>
      {visible &&
        <div className={clsx('toast', type ? `${type}` : 'information')}>
          {icon}
          <h2 className={clsx('title', type ? `${type}` : 'information')}>{title}</h2>
          <p className={clsx('content', type ? `${type}` : 'information')}>{children}</p>
        </div>
      }
    </>
  )
}