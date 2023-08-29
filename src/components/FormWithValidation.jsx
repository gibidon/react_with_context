import { useState, useRef } from "react"
import styles from "./FormWithValidation.module.css"

export default function FormWithValidation() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  })
  const [error, setError] = useState(null)
  const { email, password, passwordConfirmation } = formData
  const submitBtnRef = useRef()

  function checkFields(formData) {
    const regexMap = {
      email:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      password: /^[\w_]*$/,
    }

    let newError = null
    if (formData.email === "" || formData.password === "") {
      newError = "Поля не могут быть пустыми"
    } else if (!regexMap.email.test(formData.email)) {
      newError = "Проверьте правильность ввода email"
    } else if (
      !regexMap.password.test(formData.password) ||
      !regexMap.password.test(formData.passwordConfirmation)
    ) {
      newError = "В паролях допустимы только буквы, цифры и нижнее подчеркивание"
    } else if (formData.password !== formData.passwordConfirmation) {
      newError = "Пароли не совпадают"
    } else if (newError === null) {
      submitBtnRef.current.disabled = false
      submitBtnRef.current.focus()
    }

    setError(newError)
  }

  function onChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value })
    checkFields({ ...formData, [target.name]: target.value })
  }

  let hasError = error !== null || Object.values(formData).some((value) => value === "")

  return (
    <form
      onSubmit={() => {
        console.log("form submitted", formData)
      }}
    >
      <div>
        <strong>Заполните поля формы:</strong>
      </div>
      {error && <div className={styles.errors}>{error}</div>}
      <div>
        <label htmlFor="email">Введите адрес почты:</label>
        <input type="text" name="email" id="email" value={email} onChange={onChange} />
        <br />
      </div>
      <div>
        <label htmlFor="password">Введите пароль:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="passwordConfirmation">Подтвердите пароль:</label>
        <input
          type="password"
          name="passwordConfirmation"
          id="passwordConfirmation"
          value={passwordConfirmation}
          onChange={onChange}
        />
      </div>
      <button type="submit" disabled={hasError} ref={submitBtnRef}>
        submit form
      </button>
    </form>
  )
}
