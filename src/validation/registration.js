import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().required('Nhập tên kìa cạo!'),
  username: Yup.string().required('Nhập username đi!'),
  password: Yup.string().required('Nhập password nà @@'),
  confirmPassword: Yup.string()
    .test('match', 'Nhập cho trùng bạn êi', function (value) {
        return this.parent.password === value;
    })
    .required('Nhập nhưng phải giống password á nghe!')
});
