/* ---------------------------------------------------------------------
     preview and code
/* ---------------------------------------------------------------------*/
function changetabpane(event, wrapperID, color, tabID) {
  let tabsWrapper = document.getElementById(wrapperID);
  let tabsAnchors = tabsWrapper.querySelectorAll("[data-tab-toggle]");
  let tabsContent = tabsWrapper.querySelectorAll("[data-tab-content]");

  for (let i = 0; i < tabsAnchors.length; i++) {
    if (tabsAnchors[i].getAttribute("data-tab-toggle") === tabID) {
      tabsAnchors[i].classList.remove("text-" + color + "-500");
      tabsAnchors[i].classList.remove("bg-white");
      tabsAnchors[i].classList.add("text-white");
      tabsAnchors[i].classList.add("bg-" + color + "-500");
      tabsContent[i].classList.remove("hidden");
      tabsContent[i].classList.add("block");
    } else {
      tabsAnchors[i].classList.add("text-" + color + "-500");
      tabsAnchors[i].classList.add("bg-white");
      tabsAnchors[i].classList.remove("text-white");
      tabsAnchors[i].classList.remove("bg-" + color + "-500");
      tabsContent[i].classList.add("hidden");
      tabsContent[i].classList.remove("block");
    }
  }
}
/* ---------------------------------------------------------------------
   tabpane Nav
---------------------------------------------------------------------*/
function changeAtiveTab(event, wrapperID, color, tabID) {
  let tabsWrapper = document.getElementById(wrapperID);
  let tabsAnchors = tabsWrapper.querySelectorAll("[data-tab-toggle1]");
  let tabsContent = tabsWrapper.querySelectorAll("[data-tab-content1]");

  for (let i = 0; i < tabsAnchors.length; i++) {
    if (tabsAnchors[i].getAttribute("data-tab-toggle1") === tabID) {
      tabsAnchors[i].classList.remove("text-" + color + "-500");
      tabsAnchors[i].classList.remove("bg-white");
      tabsAnchors[i].classList.add("text-white");
      tabsAnchors[i].classList.add("bg-" + color + "-500");
      tabsContent[i].classList.remove("hidden");
      tabsContent[i].classList.add("block");
      tabsContent[i].classList.remove("hidden");
      tabsContent[i].classList.add("block");
    } else {
      tabsAnchors[i].classList.add("text-" + color + "-500");
      tabsAnchors[i].classList.add("bg-white");
      tabsAnchors[i].classList.remove("text-white");
      tabsAnchors[i].classList.remove("bg-" + color + "-500");
      tabsContent[i].classList.add("hidden");
      tabsContent[i].classList.remove("block");
    }
  }
}

function changeAtivepillTab(event, wrapperID, color, tabID) {
  let tabsWrapper = document.getElementById(wrapperID);
  let tabsAnchors = tabsWrapper.querySelectorAll("[data-tab-toggle2]");
  let tabsContent = tabsWrapper.querySelectorAll("[data-tab-content2]");

  for (let i = 0; i < tabsAnchors.length; i++) {
    if (tabsAnchors[i].getAttribute("data-tab-toggle2") === tabID) {
      tabsAnchors[i].classList.remove("text-" + color + "-500");
      tabsAnchors[i].classList.remove("bg-white");
      tabsAnchors[i].classList.add("text-white");
      tabsAnchors[i].classList.add("bg-" + color + "-500");
      tabsContent[i].classList.remove("hidden");
      tabsContent[i].classList.add("block");
    } else {
      tabsAnchors[i].classList.add("text-" + color + "-500");
      tabsAnchors[i].classList.add("bg-white");
      tabsAnchors[i].classList.remove("text-white");
      tabsAnchors[i].classList.remove("bg-" + color + "-500");
      tabsContent[i].classList.add("hidden");
      tabsContent[i].classList.remove("block");
    }
  }
}

/* ---------------------------------------------------------------------
 Alerts cross button
  ---------------------------------------------------------------------*/
function closeAlert(event) {
  let element = event.target;
  while (element.nodeName !== "BUTTON") {
    element = element.parentNode;
  }
  element.parentNode.parentNode.removeChild(element.parentNode);
}
/* ---------------------------------------------------------------------
popovers tooltip
 ---------------------------------------------------------------------*/
function togglepopover(popoverID) {
  document.getElementById(popoverID).classList.toggle("hidden");
}

/* ---------------------------------------------------------------------
tooltip
 ---------------------------------------------------------------------*/
 function toggleTooltip(event, placement, popoverID) {
  let element = event.target;
  while (element.nodeName !== "BUTTON") {
    element = element.parentNode;
  }
  Popper.createPopper(element, document.getElementById(popoverID), {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],

    placement: placement,
  });
  document.getElementById(popoverID).classList.toggle("hidden");
}

/*------------------------
scrollspy
--------------------------*/

window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');    
      if (entry.intersectionRatio > 0) {
        if (id == 'scrollspyHeading1' || id == 'scrollspyHeading2' || id == 'scrollspyHeading3' || id == 'scrollspyHeading4' || id == 'scrollspyHeading5' || id == 'dropdown') {
          document.querySelector(`div li a[href="#${id}"]`).parentElement.classList.add('active');
        }
      } else {
        if (id == 'scrollspyHeading1' || id == 'scrollspyHeading2' || id == 'scrollspyHeading3' || id == 'scrollspyHeading4' || id == 'scrollspyHeading5' || id == 'dropdown') {
          document.querySelector(`div li a[href="#${id}"]`).parentElement.classList.remove('active');
        }
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });

});
/* ---------------------------------------------------------------------
 carousel
  ---------------------------------------------------------------------*/
var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
/*------------------------
form validation
--------------------------*/
function uiformvalidation(name, value, errorid, valid, invalid, isvalid) {
  name.addEventListener("input",uivalidation);
  if (value == "" || value == "noselect") {
    name.classList.add("border-red-400");
    name.classList.remove("border-green-400");
    name.classList.add(invalid);
    name.classList.remove(valid);
    if (isvalid) {
      document.getElementById(errorid).classList.add("hidden");
    } else {
      document.getElementById(errorid).classList.remove("hidden");
    }
  }
  else {
    name.classList.add("border-green-400");
    name.classList.remove("border-red-400");
    name.classList.add(valid);
    name.classList.remove(invalid);
    if (isvalid) {
      document.getElementById(errorid).classList.remove("hidden");
    } else {
      document.getElementById(errorid).classList.add("hidden");
    }
  }
}
function uivalidation() {
  var uifname = document.getElementById("uifirstname");
  var uilname = document.getElementById("uilastname");
  var uiuser = document.getElementById("uiusername");
  var uicity = document.getElementById("uicityname");
  var uistate = document.getElementById("uistatename");
  var uizip = document.getElementById("uizip");
  uiformvalidation(uifname, uifname.value, 'uifnamelooksgood', "is-valid", "is-invalid", true)
  uiformvalidation(uilname, uilname.value, 'uilnamelooksgood', "is-valid", "is-invalid", true)
  uiformvalidation(uiuser, uiuser.value, 'uiusererror', "is-valid", "is-invalid", false)
  uiformvalidation(uicity, uicity.value, 'uicityerror', "is-valid", "is-invalid", false)
  uiformvalidation(uistate, uistate.value, 'uistateerror', "is-valid1", "is-invalid1", false)
  uiformvalidation(uizip, uizip.value, 'uiziperror', "is-valid", "is-invalid", false)
}

  var checklabel=document.getElementById('uilabel');
  var checkbox = document.getElementById('uivalidationcheckbox');
  var tandc = document.getElementById('uitandc');
  checklabel.classList.add("text-red-400");
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      checklabel.classList.remove("text-red-400");
      checklabel.classList.add("text-green-400");
      tandc.classList.add('hidden');
    } else {
      checklabel.classList.remove("text-green-400");
      checklabel.classList.add("text-red-400");
      tandc.classList.remove('hidden');
    }
  }); 


  window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        var sidebar = document.getElementById('ui-sidebar');
        var elem = sidebar.querySelector(`a[href="#${id}"]`)
        if (entry.intersectionRatio > 0) {
          elem.classList.add('select');
          document.querySelector(`a[href="#${id}"]`).classList.add('select');
        } else {
          elem.classList.remove('select');
          document.querySelector(`a[href="#${id}"]`).classList.remove('select');
        }
      });
    });
  
    // Track all sections that have an `id` applied
    document.querySelectorAll('section1[id]').forEach((section) => {
      observer.observe(section);
    });
  });

  function scrolldisable(){
    document.getElementById('bg-body-wrapper').classList.add("pr-4");
    document.querySelector('body').classList.add("overflow-y-hidden");
  }
  function scrollenable(){
    document.querySelector('body').classList.remove("overflow-y-hidden");
    document.getElementById('bg-body-wrapper').classList.remove("pr-4");
  }
 