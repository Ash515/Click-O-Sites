var name_text = document.getElementById('name');
var website_link = document.getElementById('website');
var deptsite_link = document.getElementById('deptsite');
var MyCamu_link = document.getElementById('MyCamu');
var epay_link = document.getElementById('epay');
var hostel_link = document.getElementById('hostel');
var sophos_link = document.getElementById('sophos');
var proctor_link = document.getElementById('proctor');
var IT_link = document.getElementById('IT');
var CSE_link = document.getElementById('CSE');
var AIDS_link = document.getElementById('AIDS');
var ECE_link = document.getElementById('ECE');
var EEE_link = document.getElementById('EEE');
var MECH_link = document.getElementById('MECH');
var BIO_link = document.getElementById('BIO');
var MED_link = document.getElementById('MED');
var CIVIL_link = document.getElementById('CIVIL');
var AGRI_link = document.getElementById('AGRI');
var EIE_link = document.getElementById('EIE');
var CHEM_link = document.getElementById('CHEM');
var MBA_link = document.getElementById('MBA');
var SH_link = document.getElementById('SH');
var APT_link = document.getElementById('APT');

var save_button = document.getElementById('save');

let array = ["name","website","deptsite","MyCamu","epay","hostel","sophos","proctor","IT","CSE","AIDS","ECE","EEE","MECH","BIO","MED","CIVIL","AGRI","EIE","CHEM","MBA","SH","APT"];
chrome.storage.sync.get(array,function(links){
    if(!chrome.runtime.error){
        console.log(links);
        if(links.name)
            name_text.value=links.name+" ";
        if(links.website)
            website_link.value=links.website;
        if(links.deptsite)
            deptsite_link.value=links.deptsite;
        if(links.MyCamu)
            MyCamu_link.value=links.MyCamu;
        if(links.epay)
            epay_link.value=links.epay;
        if(links.hostel)
            hostel_link.value=links.hostel;
        if(links.sophos)
            sophos_link.value=links.sophos;
        if(links.proctor)
            proctor_link.value=links.proctor;
        if(links.IT)
        IT_link.value=links.IT;
        if(links.CSE)
            CSE_link.value=links.CSE;
        if(links.AIDS)
           AIDS_link.value=links.AIDS;
        if(links.ECE)
           ECE_link.value=links.ECE;
        if(links.EEE)
           EEE_link.value=links.EEE;
        if(links.MECH)
           MECH_link.value=links.MECH;
        if(links.BIO)
           BIO_link.value=links.BIO;
        if(links.MED)
           MED_link.value=links.MED;
        if(links.CIVIL)
           CIVIL_link.value=links.CIVIL;
        if(links.AGRI)
           AGRI_link.value=links.AGRI;
        if(links.EIE)
           EIE_link.value=links.EIE;
        if(links.CHEM)
           CHEM_link.value=links.CHEM;
        if(links.MBA)
           MBA_link.value=links.MBA;
        if(links.SH)
           SH_link.value=links.SH;
           if(links.APT)
           APT_link.value=links.APT;
        
    }
});


save_button.addEventListener('click',function(){
    UpdateLinks();
});
function UpdateLinks(){
    let dict = {
        "name":name_text.value,
        "website":website_link.value,
        "deptsite":deptsite_link.value,
        "MyCamu":MyCamu_link.value,
        "epay":epay_link.value,
        "hostel":hostel_link.value,
        "sophos":sophos_link.value,
        "proctor":proctor_link.value,
        "IT":IT_link.value,
        "CSE":CSE_link.value,
        "AIDS":AIDS_link.value,
        "ECE":ECE_link.value,
        "EEE":EEE_link.value,
        "MECH":MECH_link.value,
        "BIO":BIO_link.value,
        "MED":MED_link.value,
        "CIVIL":CIVIL_link.value,
        "AGRI":AGRI_link.value,
        "EIE":EIE_link.value,
        "CHEM":CHEM_link.value,
        "MBA":MBA_link.value,
        "SH":SH_link.value,
        "APT":APT_link.value
    }
    chrome.storage.sync.set(dict,function(){
        if(!chrome.runtime.error){
            console.log("Links Updated");
            window.location.pathname='popup.html'
        }
    })
}