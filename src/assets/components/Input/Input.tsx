import { Png } from 'assets/Png'
import { useContext, useEffect, useState } from 'react'
import { StadartProps } from './types'

import s from './Input.module.css'
export const Input=({
  name,
  label,
  id,
  placeholder='',
  handleChange,
  ...props
}: StadartProps) => {
  const [show, setShow] = useState(false)
  // const { status, setStatus } = useContext(PasswordContext)
  // const strongRegex = /^([a-z]+\d+\W+)$/i 
  
  // const enoughRegex = /^([a-z]+|\d+|\W+)$/i
  // const letDig = /^([a-z]+\d+)$/i   
  // const letSym = /^([a-z]+\W+)$/i
  // const digSym = /^(\d+\W+)$/i
  
 
  const handleClick = () => {
    setShow(!show)
  }

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newValue = e.target.value;
  //   console.log(newValue);
  //   if (newValue.trim() === "") {
  //     setStatus(EPasswordStatus.empty)
  //   } else if (newValue.length < 8) {
  //     setStatus(EPasswordStatus.small)
  //   }
  //     else if (newValue.match(enoughRegex)) {
  //     setStatus(EPasswordStatus.easy)
  //   }
  //   else if (newValue.match(letSym) || newValue.match(letDig) || newValue.match(digSym)) {
  //     setStatus(EPasswordStatus.medium)
  //   }
  //   else if (newValue.match(strongRegex)) {
  //     setStatus(EPasswordStatus.strong)
  //   } else {
  //     setStatus(EPasswordStatus.empty)
  //   }
  // }
  // console.log(status);
  return(
    <div className={s.form__input}>
      <label htmlFor={id} className={s.label}>{label}<span> *</span></label>
      <div className={s.input__box}>
      <input id={id} type={show ? "text" : "password"} name={name} placeholder={placeholder} className={s.input} autoComplete="on" onChange={e=>handleChange(e)} />
      <button type="button" className={s.button__show} onClick={handleClick}>
        <img src={show?`${Png.Eye}`:`${Png.HideEye}`} alt="icon"/>
      </button>
      </div>
    </div>
  )
}