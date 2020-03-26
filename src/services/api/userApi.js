import { toast } from 'react-toastify';
import V1 from './v1';

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
}

export const UserApi = new User();
