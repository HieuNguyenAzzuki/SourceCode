    /* ---------------------------------------------------------------------
    mode
-----------------------------------------------------------------------*/
function Mode(click_id) {
  const html = document.querySelector("html");
  if (click_id == "dark") {
    html.classList.add('dark');
    sessionStorage.setItem('preferredMode', 'dark');
  } else if (click_id == "auto") {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      html.classList.add('dark');
      sessionStorage.setItem('preferredMode', 'dark');
    } else {
      html.classList.remove('dark');
      sessionStorage.setItem('preferredMode', 'light');
    }
  } else {
    html.classList.remove('dark');
    sessionStorage.setItem('preferredMode', 'light');
  }
}

  /* ---------------------------------------------------------------------
RTL and LTR direction
-----------------------------------------------------------------------*/

// Retrieve the direction preference from session storage
    const direction = sessionStorage.getItem('direction');

// Set the initial selected direction based on the value stored in session
    if (direction === 'rtl') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.getElementById('rtl').click(); // simulate click on RTL button
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.getElementById('ltr').click(); // simulate click on LTR button
    }

// Function to handle direction change
function Direction(id) {
  // Update the HTML attribute for the document direction
  const dir = id === 'rtl' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', dir);

  // Store the direction preference in session storage
  sessionStorage.setItem('direction', dir);
}

 
  function ltractive(){
    document.getElementById("ltr-light").classList.add("border-2");
    document.getElementById("ltr-dark").classList.add("border-2");
    document.getElementById("rtl-light").classList.remove("border-2");
    document.getElementById("rtl-dark").classList.remove("border-2");
  }
   function rtlactive(){
    document.getElementById("ltr-light").classList.remove("border-2");
    document.getElementById("ltr-dark").classList.remove("border-2");
    document.getElementById("rtl-light").classList.add("border-2");
    document.getElementById("rtl-dark").classList.add("border-2");
   }


  // Apply the user's preferred mode on page load
const preferredMode = sessionStorage.getItem('preferredMode');
if (preferredMode === 'dark') {
  document.querySelector('html').classList.add('dark');
} else {
  document.querySelector('html').classList.remove('dark');
}


