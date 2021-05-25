var name_text = document.getElementById('name');
var website_link = document.getElementById('website_link');
// website_link.href='javascript:void(0);';
var deptsite_link = document.getElementById('deptsite_link');
// deptsite_link.href='javascript:void(0);';
var MyCamu_link = document.getElementById('MyCamu_link');
// MyCamu_link.href='javascript:void(0);';
var epay_link = document.getElementById('epay_link');
// epay_link.href='javascript:void(0);';
var hostel_link = document.getElementById('hostel_link');
var sophos_link = document.getElementById('sophos_link');
// sophos_link.href='javascript:void(0);';
var proctor_link = document.getElementById('proctor_link');
// proctor_link.href='javascript:void(0);';

//LMS

var IT_link = document.getElementById('IT_link');
// IT_link.href='javascript:void(0);
var CSE_link = document.getElementById('CSE_link');
// CSE_link.href='javascript:void(0);
var AIDS_link = document.getElementById('AIDS_link');
// AIDS_link.href='javascript:void(0);
var ECE_link = document.getElementById('ECE_link');
// ECE_link.href='javascript:void(0);
var EEE_link = document.getElementById('EEE_link');
// EEE_link.href='javascript:void(0);
var MECH_link = document.getElementById('MECH_link');
// MECH_link.href='javascript:void(0);
var BIO_link = document.getElementById('BIO_link');
// BIO_link.href='javascript:void(0);
var MED_link = document.getElementById('MED_link');
// MED_link.href='javascript:void(0);
var CIVIL_link = document.getElementById('CIVIL_link');
// CIVIL_link.href='javascript:void(0);
var AGRI_link = document.getElementById('AGRI_link');
// AGRI_link.href='javascript:void(0);
var EIE_link = document.getElementById('EIE_link');
// EIE_link.href='javascript:void(0);
var CHEM_link = document.getElementById('CHEM_link');
// CHEM_link.href='javascript:void(0);
var MBA_link = document.getElementById('MBA_link');
// MBA_link.href='javascript:void(0);
var SH_link = document.getElementById('SH_link');
// SH_link.href='javascript:void(0);
var APT_link = document.getElementById('APT_link');
// APT_link.href='javascript:void(0);



let array = ["name","website","deptsite","MyCamu","epay","hostel","sophos","proctor","IT","CSE","AIDS","ECE","EEE","MECH","BIO","MED","CIVIL","AGRI","EIE","CHEM","MBA","SH","APT"];
// let array2 = {
//     "name":"Rajiv",
//     "website":"https://www.google.com",
//     "medium":"https://www.medium.com"
// };
// chrome.storage.sync.set(array2);
function void_click(){
    void(0);
}
chrome.storage.sync.get(array,function(links){
    if(!chrome.runtime.error){
        console.log(links);
        if(links.name)
            name_text.innerHTML=links.name+"'s ";
        
        if(links.website)
            website_link.href=links.website;
        else
            website_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        if(links.deptsite)
            deptsite_link.href=links.deptsite;
        else
            deptsite_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        
        if(links.MyCamu)
            MyCamu_link.href=links.MyCamu;
        else
            MyCamu_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.epay)
            epay_link.href=links.epay;
        else
            epay_link.addEventListener('click',function(event){
                event.preventDefault();
            });

        if(links.hostel)
        hostel_link.href=links.hostel;
        else
        hostel_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        
        if(links.sophos)
        sophos_link.href=links.sophos;
        else
        sophos_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        if(links.proctor)
            proctor_link.href=links.proctor;
            else
            proctor_link.addEventListener('click',function(event){
                    event.preventDefault();
                });
        if(links.IT)
        IT_link.href=links.IT;
        else
        IT_link.addEventListener('click',function(event){
                event.preventDefault();
            });
        if(links.CSE)
        CSE_link.href=links.CSE;
        else
        CSE_link.addEventListener('click',function(event){
        event.preventDefault();
            });
        if(links.AIDS)
        AIDS_link.href=links.AIDS;
        else
        AIDS_link.addEventListener('click',function(event){
        event.preventDefault();
           }); 
           if(links.ECE)
           ECE_link.href=links.ECE;
           else
           ECE_link.addEventListener('click',function(event){
           event.preventDefault();
              });  
              if(links.EEE)
              EEE_link.href=links.EEE;
              else
              EEE_link.addEventListener('click',function(event){
              event.preventDefault();
                 });
        if(links.MECH)
        MECH_link.href=links.MECH;
        else
        MECH_link.addEventListener('click',function(event){
        event.preventDefault();
        });    
        if(links.BIO)
        BIO_link.href=links.BIO;
        else
        BIO_link.addEventListener('click',function(event){
        event.preventDefault();
        });
        if(links.MED)
        MED_link.href=links.MED;
        else
        MED_link.addEventListener('click',function(event){
        event.preventDefault();
        });
        if(links.CIVIL)
        CIVIL_link.href=links.CIVIL;
        else
        CIVIL_link.addEventListener('click',function(event){
        event.preventDefault();
        });  
        if(links.AGRI)
        AGRI_link.href=links.AGRI;
        else
        AGRI_link.addEventListener('click',function(event){
        event.preventDefault();
        }); 
        if(links.EIE)
        EIE_link.href=links.EIE;
        else
        EIE_link.addEventListener('click',function(event){
        event.preventDefault();
        });  
        if(links.CHEM)
        CHEM_link.href=links.CHEM;
        else
        CHEM_link.addEventListener('click',function(event){
        event.preventDefault();
        }); 
        if(links.MBA)
        MBA_link.href=links.MBA;
        else
        MBA_link.addEventListener('click',function(event){
        event.preventDefault();
        });  
        if(links.SH)
        SH_link.href=links.SH;
        else
        SH_link.addEventListener('click',function(event){
        event.preventDefault();
        }); 
        if(links.APT)
        APT_link.href=links.APT;
        else
        APT_link.addEventListener('click',function(event){
        event.preventDefault();
        });              
    }
});