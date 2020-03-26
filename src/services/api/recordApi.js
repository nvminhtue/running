import V1 from './v1';

class Record extends V1 {
  createRecord = ({ recordParams }) => {
    console.log('params', recordParams);
    return this.client.post('/record/add', recordParams)
  }
  getAllRecords = () => {
    return this.client.get('/record')
  }
}

export const RecordApi = new Record();
