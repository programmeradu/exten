function clickCompleteButton() {
    const completeButton = document.querySelector('.button-complete-item.button-complete-lesson.lp-btn-complete-item');
    if (completeButton) {
      completeButton.click();
      waitForModalAndClickYes();
    }
  }
  
  function waitForModalAndClickYes() {
    // Wait a bit for the modal to appear. Adjust the timeout as necessary.
    setTimeout(() => {
      const yesButton = document.querySelector('.lp-modal-footer .btn-yes');
      if (yesButton) {
        yesButton.click();
      }
    }, 1000); // Wait for 1 second before trying to click the "Yes" button
  }
  
  clickCompleteButton();