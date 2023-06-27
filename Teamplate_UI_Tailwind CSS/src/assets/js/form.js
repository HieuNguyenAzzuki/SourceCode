/* ---------------------------------------------------------------------
  form validation border color and icon change
  -----------------------------------------------------------------------*/
  document.addEventListener('DOMContentLoaded', function () {
    const supportedtextarea = document.getElementById('supportedtextarea');
    supportedtextarea.addEventListener('input', function (e) {
      const target = e.target;
      const currentLength = target.value.length;
      if (currentLength > 0) {
        supportedtextarea.classList.remove('border-red-400');
        supportedtextarea.classList.add('border-green-400');
        supportedtextarea.classList.remove('is-invalid');
        supportedtextarea.classList.add('is-valid');
        document.getElementById('supportedtextareahide').classList.add('hidden');
      }
      else {
        supportedtextarea.classList.remove('border-green-400');
        supportedtextarea.classList.add('border-red-400');
        supportedtextarea.classList.remove('is-valid');
        supportedtextarea.classList.add('is-invalid');
        document.getElementById('supportedtextareahide').classList.remove('hidden');
      }
    })
  });
  /* ---------------------------------------------------------------------
    form validation chechbox color checked
    -----------------------------------------------------------------------*/
  
  function isChecked() {
    var checkbox = document.getElementById("supportedCheckbox");
    var checkboxlabel = document.getElementById('supportedcheckboxlabel')
    if (checkbox.checked) {
      checkboxlabel.classList.remove('text-red-400');
      checkboxlabel.classList.add('text-green-400');
      document.getElementById('supportedcheckboxhide').classList.add('hidden');
    }
    else {
      checkboxlabel.classList.remove('text-green-400');
      checkboxlabel.classList.add('text-red-400');
      document.getElementById('supportedcheckboxhide').classList.remove('hidden');
    }
  }
  /* ---------------------------------------------------------------------
    toggle button color change
    -----------------------------------------------------------------------*/
  function isCheck() {
    var radiobtn = document.getElementById("supportedtogglebtn");
    var radiobtnone = document.getElementById("supportedradiobtnone");
    var radiobtntwo = document.getElementById("supportedradiobtntwo");
    if (radiobtn.checked) {
      radiobtnone.classList.remove('text-red-400');
      radiobtnone.classList.add('text-green-400');
      radiobtntwo.classList.remove('text-green-400');
      radiobtntwo.classList.add('text-red-400');
      document.getElementById('supportedradiobtnhide').classList.add('hidden');
    }
    else {
      radiobtnone.classList.remove('text-green-400');
      radiobtnone.classList.add('text-red-400');
      radiobtntwo.classList.remove('text-red-400');
      radiobtntwo.classList.add('text-green-400');
      document.getElementById('supportedradiobtnhide').classList.add('hidden');
    }
  }
  
  /* ---------------------------------------------------------------------
    input type-select -bordercolor and icon change
    -----------------------------------------------------------------------*/
  function myselection() {
    var myselection = document.getElementById("supportedmySelect");
    if (myselection.value == "noselect") {
      myselection.classList.remove('border-green-400');
      myselection.classList.add('border-red-400');
      myselection.classList.remove('is-valid1');
      myselection.classList.add('is-invalid1');
      document.getElementById('supportedmyselecthide').classList.remove('hidden');
  
    }
    else {
      myselection.classList.remove('border-red-400');
      myselection.classList.add('border-green-400');
      myselection.classList.remove('is-invalid1');
      myselection.classList.add('is-valid1');
      document.getElementById('supportedmyselecthide').classList.add('hidden');
  
    }
  }
  /* ---------------------------------------------------------------------
  input type-file/choosefile -border color and icon change
  -----------------------------------------------------------------------*/
  var choosefile = document.getElementById('choose2');
  choosefile.addEventListener('change', function () {
    if (choosefile.value == "") {
      choosefile.classList.remove('border-green-400');
      choosefile.classList.add('border-red-400');
      choosefile.classList.remove('is-valid');
      choosefile.classList.add('is-invalid');
      document.getElementById('supportedchoosehide').classList.remove('hidden');
    }
    else {
      choosefile.classList.remove('border-red-400');
      choosefile.classList.add('border-green-400');
      choosefile.classList.remove('is-invalid');
      choosefile.classList.add('is-valid');
      document.getElementById('supportedchoosehide').classList.add('hidden');
    }
  });

  /* ---------------------------------------------------------------------
  tooltip form validation
-----------------------------------------------------------------------*/
function formvalidation(name, value, errorid, valid, invalid, isvalid) {
  if (value == "" || value == "noselect") {
    name.addEventListener("input",validation);
    name.classList.add("border-red-400");
    name.classList.remove("border-green-400");
    name.classList.add(invalid);
    name.classList.remove(valid);
    name.classList.remove("focus:border-blue-500");
    name.classList.remove("hover:border-blue-500");
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
    name.classList.remove("focus:border-blue-500");
    name.classList.remove("hover:border-blue-500");
    if (isvalid) {
      document.getElementById(errorid).classList.remove("hidden");
    } else {
      document.getElementById(errorid).classList.add("hidden");
    }
  }
}
function validation() {
  var fname = document.getElementById("tooltipfname");
  var lname = document.getElementById("tooltiplname");
  var user = document.getElementById("tooltipuser");
  var city = document.getElementById("tooltipcity");
  var state = document.getElementById("tooltipstate");
  var zip = document.getElementById("tooltipzip");
  formvalidation(fname, fname.value, 'tooltipfnamemsg', "is-valid", "is-invalid", true)
  formvalidation(lname, lname.value, 'tooltiplnamemsg', "is-valid", "is-invalid", true)
  formvalidation(user, user.value, 'tooltipusernamemsg', "is-valid", "is-invalid", false)
  formvalidation(city, city.value, 'tooltipcitymsg', "is-valid", "is-invalid", false)
  formvalidation(state, state.value, 'tooltipstatemsg', "is-valid1", "is-invalid1", false)
  formvalidation(zip, zip.value, 'tooltipzipmsg', "is-valid", "is-invalid", false)
}

/* ---------------------------------------------------------------------
  Custom form validation
-----------------------------------------------------------------------*/

function formvalidation1(name, value, errorid,valid,invalid,isvalid) {
  if (value == "" || value == "noselect") {
    name.classList.add("border-red-400");
    name.classList.remove("border-green-400");
    name.classList.add(invalid);
    name.classList.remove(valid);
    name.classList.remove("focus:border-blue-500");
    name.classList.remove("hover:border-blue-500");
    if(isvalid){
      document.getElementById(errorid).classList.add("hidden");
    }else{
      document.getElementById(errorid).classList.remove("hidden");
    }
  }
  else {
    name.classList.add("border-green-400");
    name.classList.remove("border-red-400");
    name.classList.add(valid);
    name.classList.remove(invalid);
    name.classList.remove("focus:border-blue-500");
    name.classList.remove("hover:border-blue-500");
    if(isvalid){
      document.getElementById(errorid).classList.remove("hidden");
    }else{
      document.getElementById(errorid).classList.add("hidden");
    }
  }
}
function validate() {
  var firstname = document.getElementById("customfirstname");
  var lastname = document.getElementById("customlastname");
  var customusername = document.getElementById("customusername");
  var customcity = document.getElementById("customcity");
  var customstate = document.getElementById("customstate");
  var customzip = document.getElementById("customzip");
  formvalidation1(firstname, firstname.value, 'customfnamemsg',"is-valid","is-invalid",true)
  formvalidation1(lastname, lastname.value, 'customlnamemsg',"is-valid","is-invalid",true)
  formvalidation1(customusername, customusername.value, 'customusermsg',"is-valid","is-invalid",false)
  formvalidation1(customcity, customcity.value, 'customcitymsg',"is-valid","is-invalid",false)
  formvalidation1(customstate, customstate.value, 'customstatemsg',"is-valid1","is-invalid1",false)
  formvalidation1(customzip, customzip.value, 'customzipmsg',"is-valid","is-invalid",false)
}

function validate1() {
  var checklabel=document.getElementById('customcheckboxlabel');
  var checkbox = document.getElementById('customvalidationcheckbox');
  var tandc = document.getElementById('customterms&condn');
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
}
