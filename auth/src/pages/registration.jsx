import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './registration.module.css'

export default function Register() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [agree, setAgree] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [touched, setTouched] = useState({ email: false, password: false, confirm: false })

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const passwordValid = password.length >= 8
  const passwordsMatch = password === confirm && confirm.length > 0
  const formValid = emailValid && passwordValid && passwordsMatch && agree

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched({ email: true, password: true, confirm: true })
    if (!formValid) return
    // TODO: вызвать API регистрации
    console.log('register', { email, password })
    // после успешной регистрации перенаправим на страницу логина
    navigate('/auth/')
  }


    const EyeOff = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
        <path d="M10.7329 5.07599C13.0623 4.7984 15.4185 5.29081 17.4418 6.47804C19.465 7.66527 21.0441 9.48207 21.9379 11.651C22.0213 11.8755 22.0213 12.1225 21.9379 12.347C21.5704 13.238 21.0847 14.0755 20.4939 14.837" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.0841 14.158C13.5183 14.7045 12.7605 15.0069 11.9739 15C11.1873 14.9932 10.4349 14.6777 9.87868 14.1215C9.32245 13.5652 9.00695 12.8128 9.00011 12.0262C8.99328 11.2396 9.29566 10.4818 9.84214 9.91602" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.479 17.499C16.1525 18.2848 14.6725 18.776 13.1394 18.9394C11.6063 19.1028 10.056 18.9345 8.59365 18.4459C7.13133 17.9573 5.79121 17.1599 4.66423 16.1078C3.53725 15.0556 2.64977 13.7734 2.06202 12.348C1.97868 12.1235 1.97868 11.8765 2.06202 11.652C2.94865 9.50186 4.50869 7.69725 6.50802 6.509" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 2L22 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  )

  const EyeOn = (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M2.06202 12.348C1.97868 12.1235 1.97868 11.8765 2.06202 11.652C2.87372 9.68385 4.25153 8.00103 6.02079 6.81689C7.79004 5.63275 9.87106 5.00061 12 5.00061C14.129 5.00061 16.21 5.63275 17.9792 6.81689C19.7485 8.00103 21.1263 9.68385 21.938 11.652C22.0214 11.8765 22.0214 12.1235 21.938 12.348C21.1263 14.3161 19.7485 15.999 17.9792 17.1831C16.21 18.3672 14.129 18.9994 12 18.9994C9.87106 18.9994 7.79004 18.3672 6.02079 17.1831C4.25153 15.999 2.87372 14.3161 2.06202 12.348Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

  )

  return (
    <div className={styles.container}>
      <div className={styles.logInner}>
        <div className={styles.logTop}>Welcome to Fynloren</div>

        <form className={styles.logForm} onSubmit={handleSubmit} noValidate>
          <div className={styles.logTxt}>
            <h2>Registration</h2>
            <h3>Fill in fields below to start trading on our platform</h3>
          </div>

          <label className={styles.field}>
            <span className={styles.label}>E-mail</span>
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((s) => ({ ...s, email: true }))}
              placeholder="example@mail.com"
              required
            />
            {touched.email && !emailValid && <div className={styles.error}>Enter a correct e-mail</div>}
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Password</span>
            <div className={styles.inputWrap}>
              <input
                className={styles.input}
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setTouched((s) => ({ ...s, password: true }))}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className={styles.eye}
                onClick={() => setShowPass((s) => !s)}
                aria-label={showPass ? 'Hide password' : 'Show password'}
              >
                {showPass ? EyeOn: EyeOff}
              </button>
            </div>
            {touched.password && !passwordValid && <div className={styles.error}>Password minimum 8 characters</div>}
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Confirm password</span>
            <div className={styles.inputWrap}>
              <input
                className={styles.input}
                type={showConfirm ? 'text' : 'password'}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                onBlur={() => setTouched((s) => ({ ...s, confirm: true }))}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className={styles.eye}
                onClick={() => setShowConfirm((s) => !s)}
                aria-label={showConfirm ? 'Hide confirm' : 'Show confirm'}
              >
                {showConfirm ? EyeOn : EyeOff}
              </button>
            </div>
            {touched.confirm && !passwordsMatch && <div className={styles.error}>Passwords don't match</div>}
          </label>

          <label className={styles.checkbox}>
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <span>I agree with <a href="/terms.html" className={styles.link}>Terms & </a> <a href="/privacy.html" className={styles.link}>Privacy </a> </span>
          </label>

          <button className={styles.primary} type="submit" disabled={!formValid}>
            Register
          </button>

          <div className={styles.or}>or</div>

          <Link to="/auth/" className={styles.outline}>Login</Link>

          <div className={styles.help}>
            Have any problems? <a className={styles.link} href="#">Contact us</a>
          </div>
        </form>
      </div>
    </div>
  )
}