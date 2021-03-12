import FileChecksum from './file-checksum';

const url = '/rails/active_storage/direct_uploads';

export const uploadFile = (file, events) => {
  FileChecksum.create(file, (err, checksum) => {
    if (err !== null) {
      return;
    }

    const data = {
      blob: {
        filename: file.name,
        content_type: file.type,
        byte_size: file.size,
        checksum,
      },
    };

    const options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((r) => r.json())
      .then((r) => upload(file, r, events));
  });
};

const upload = (file, response, events) => {
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', response.direct_upload.url, true);
  xhr.responseType = 'text';

  for (const key in response.direct_upload.headers) {
    xhr.setRequestHeader(key, response.direct_upload.headers[key]);
  }

  if (events.onProgress) {
    xhr.upload.addEventListener('progress', events.onProgress, false);
  }

  xhr.upload.addEventListener('load', () => {
    setTimeout(() => events.onSuccess(file, response), 1000);
  });

  xhr.send(file.slice());
};
