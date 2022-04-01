import Client from './AxiosClient';

const resource = '/s3';

export default {
  upLoadFile(filePost) {
    const formData = new FormData();
    formData.append('file', filePost);
    return Client.post(`${resource}/upload-file`, formData);
  },
};
