export const isRequired = (val) => ({
    hasPassed: !!val,
    message: 'Пожалуйста заполните это поле',
  });
  
  export const charLimit = (limit) => (val) => ({
    hasPassed: val.length <= limit,
    message: 'Вы превысили лимит',
  });

  export const emailValidation = (val) => ({
    hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
    message: 'Invalid email',
  });
  
  export const passwordValidation = (val) => ({
    hasPassed: /^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9]{7,256}$/.test(val),
    message: 'Password must contain letters and numbers, at least 7 characters',
  });