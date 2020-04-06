import { toast } from 'react-toastify';

import V1 from './v1';
import { addAuthorizationHeader } from '../common';

class User extends V1 {
  userLogin = ({ loginParams }) => {
    return this.client.post(`/user/login`, loginParams)
  }
  registerLogin = async ({ registrationParams }) => {
    try {
      await this.client.post(`/user/register`, registrationParams)
    }
    catch (e) {
      toast.error(e.response.data.message);
    }
  }
  userInfo = () => {
    this.client.defaults.headers = addAuthorizationHeader(this.client.defaults.headers);
    return this.client.get(`/user/my-profile`)
  }
}

export const UserApi = new User();
