import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ProgressBar from 'react-bootstrap/ProgressBar';

import { uploadFile } from '../../upload-file';

const Photo = ({ onChange, photo }) => {
  const [progress, setProgress] = useState(0);

  const onProgress = ({ loaded, total }) => {
    setProgress(Math.round((loaded / total) * 100));
  };

  useEffect(() => {
    const onSuccess = (file, response) => {
      setProgress(100);
      onChange({ signedId: response.signed_id });
    };
    uploadFile(photo.file, { onProgress, onSuccess });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {photo.file?.name}
      <ProgressBar now={progress} label={`${progress}%`} />
    </>
  );
};

Photo.propTypes = {
  onChange: PropTypes.func.isRequired,
  photo: PropTypes.shape({
    file: PropTypes.object,
  }).isRequired,
};

export default Photo;
