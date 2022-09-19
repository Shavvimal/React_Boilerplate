import React from 'react';

function trackDownloadEvent({event}) {
  gtag('event', 'download_poll_image', {
    poll_title: 'some title',
  })
}

export default trackDownloadEvent;