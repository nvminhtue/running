import * as Yup from 'yup';

export default Yup.object().shape({
  inlateTime: Yup.number()
  .required('Nhập đi bạn êi!')
  .typeError('Nhập số bạn êi!')
  .test('greaterThan', 'Nhập số dương bạn êi!', function (value) {
    return this.parent.isOffToday === true ? true : value >= 0;
  })
});