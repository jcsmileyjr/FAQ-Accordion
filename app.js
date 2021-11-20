let ifOpenArray = {"openInvite":false, "openMaxFileSize":false, "openResetPwd":false, "openCancel": false, "openSupport": false}
const clickInvite = (elementToOpen, ifOpenName, highlightElement, currentImage) => {
  let shouldOpen = ifOpenArray[ifOpenName];
  if(!shouldOpen){
    document.getElementById(elementToOpen).classList.remove("content__summary--hide");
    document.getElementById(elementToOpen).classList.add("content__summary--show");
    document.getElementById(highlightElement).classList.add("content__summary--highlight");
    document.getElementById(currentImage).classList.add("content__summary--rotate");
    ifOpenArray[ifOpenName] = true;
  }else{
    document.getElementById(elementToOpen).classList.remove("content__summary--show");         
    document.getElementById(elementToOpen).classList.add("content__summary--hide");
    document.getElementById(highlightElement).classList.remove("content__summary--highlight");
    document.getElementById(currentImage).classList.remove("content__summary--rotate");
    ifOpenArray[ifOpenName] = false;
  }
}