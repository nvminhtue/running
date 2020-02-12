import V1 from './v1';

class User extends V1 {
  userLogin = (values) => this.client.post(`/user/login`, values);
}

export const UserApi = new User();
