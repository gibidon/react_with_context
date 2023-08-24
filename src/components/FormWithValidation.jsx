import { useState, useRef } from "react"

export default function FormWithValidation() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  })
  //   const [errors, setErrors] = useState(null)

  const { email, password, passwordConfirmation } = formData

  const submitBtnRef = useRef()

  function checkFields(formData) {
    const regexMap = {
      email:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      password: /^[\w_]*$/,
      passwordConfirmation: /^[\w_]*$/,
    }
    let error = null

    if (!regexMap.email.test(formData.email)) {
      error = "Проверьте правильность ввода email"
    } else if (!regexMap.password.test(formData.password)) {
      error = "В пароле допустимы только буквы, цифры и нижнее подчеркивание"
    } else if (formData.password !== formData.passwordConfirmation) {
      error = "Пароли не совпадают"
    }
    return error
  }
  let errors = checkFields(formData)

  // if (!errors) {
  //   console.log(submitBtnRef.current)
  //   submitBtnRef.current.focus()
  // }
  console.log(submitBtnRef.current)

  function onChange(fieldName, value) {
    setFormData({ ...formData, [fieldName]: value })
  }

  return (
    <form
      onSubmit={(e) => {
        console.log("form submitted", formData)
      }}
    >
      <div>Заполните поля формы:</div>
      {errors && <div>{errors}</div>}
      <label htmlFor="email">Введите адрес почты:</label>
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={({ target }) => onChange("email", target.value)}
      />

      <br />
      <label htmlFor="password">Введите пароль:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={({ target }) => onChange("password", target.value)}
      />
      <br />
      <label htmlFor="passwordConfirmation">Подтвердите пароль:</label>
      <input
        type="password"
        name="passwordConfirmation"
        id="passwordConfirmation"
        value={passwordConfirmation}
        onChange={({ target }) => onChange("passwordConfirmation", target.value)}
      />
      <br />
      <button type="submit" disabled={errors} ref={submitBtnRef}>
        submit form
      </button>
    </form>
  )
}
