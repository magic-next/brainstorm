import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string()
    .required('Nome é obrigatório'),
  lastName: Yup.string()
    .required('Sobrenome é obrigatório'),
  email: Yup.string()
    .email('Email inválido')
    .required('Email é obrigatório'),
  password: Yup.string()
    .required('Senha é obrigatória'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Confirmar senha deve ser igual a senha')
    .required('Confirmar senha é obrigatório'),
});
