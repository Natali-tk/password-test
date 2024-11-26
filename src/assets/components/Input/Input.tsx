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
 
  const handleClick = () => {
    setShow(!show)
  }

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