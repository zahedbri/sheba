export const handleNumbersOnly = ( e ) => {
  let flag;

  if((e.keyCode === 8) ||
      (e.keyCode === 9) || 
      (e.keyCode === 16 && e.keyCode >= 9) ||
      (e.keyCode === 37) ||
      (e.keyCode === 39) ||
      (e.keyCode === 46) || 
      (e.keyCode >= 48 && e.keyCode <= 57) || 
      (e.keyCode >= 96 && e.keyCode <= 105)) {
    flag = false;
  } else {
    flag = true;
  }

  if(flag) {
    e.preventDefault();
  }
}

export const getYouTubeId = ( url ) => {
  let ID = '';
  url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if(url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  }
  else {
    ID = '';
  }
    return ID;
}

export const isMobileAgent = ( userAgent ) => {
  let isMobile = Boolean(userAgent.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ));

  return isMobile;
}