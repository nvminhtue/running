import V1 from './v1';
import { addAuthorizationHeader } from '../common';

class Record extends V1 {
  createRecord = ({ recordParams }) => {
    this.client.defaults.headers = addAuthorizationHeader(this.client.defaults.headers);
    return this.client.post('/record/add', recordParams)
  }
  getAllRecords = () => {
    this.client.defaults.headers = addAuthorizationHeader(this.client.defaults.headers);
    return this.client.get('/record')
  }
}

export const RecordApi = new Record();
