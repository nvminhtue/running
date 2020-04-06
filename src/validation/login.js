import * as Yup from 'yup';

export default Yup.object().shape({
  username: Yup.string().required('Nhập username'),
  password: Yup.string().required('Nhập password')
});
