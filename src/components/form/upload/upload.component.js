import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { commonService } from '../../../services';
import styles from './upload.module.scss';

function UploadComponent({ setter }) {
  const [file, setFile] = useState('');

  const handleChange = useCallback(
    (e) => {
      const uploadedFile = e.target.files[0];

      const formData = new FormData();
      formData.append('uploadedFile', uploadedFile, uploadedFile.name);

      commonService.upload(formData).then((res) => {
        if (!res.success) {
          if (res.canShowToaster) toast.error(res.message);
          return;
        }

        const { path } = res.data;

        setFile(commonService.resolveImageUrl(path));
        setter(path);
      });
    },
    [setter]
  );

  useEffect(() => {
    return () => {
      commonService.uploadController.abort();
    };
  }, []);
  return (
    <div className={styles['container']}>
      <input style={{ display: 'none' }} id='upload' type='file' onChange={handleChange} />
      <label htmlFor='upload'>
        <Avatar
          className={styles['cursor-pointer']}
          alt='Avatar'
          src={file}
          sx={{ width: 128, height: 128 }}
        />
      </label>
    </div>
  );
}

UploadComponent.propTypes = {
  setter: PropTypes.func.isRequired,
};

export default UploadComponent;
