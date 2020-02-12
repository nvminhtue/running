import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('Nhập tên'),
  username: Yup.string().required('Nhập username'),
  password: Yup.string().required('Nhập password'),
  confirmPassword: Yup.string()
    .test('match', 'Nhập cho trùng bạn êi', function (value) {
        return this.parent.password === value;
    })
    .required('Nhập password lần nữa')
});
