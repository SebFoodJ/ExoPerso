const date1 = "10/02/2020";
const date2 = "30/02/2020";
const date3 = "10/05/2020";
const date4 = "31/04/2020";

function isADate (){
    //jour compris entre 01 et jourMax
    //mois compris entre 01 et 12
    //année comprise entre 1000 et 9999


};
//let annee = date.substring(6,10);


function nbreMaxJourParMois (date){
    let jour = parseInt(date.substring(0,2));
    let mois = date.substring(3,5);
    let result = false;
    let moisEn30 = ["04", "06", "09", "11"]
    let moisen31 = ["01", "03", "05", "07", "08", "10", "12"]
    if (mois == "02") {
        if (jour>0 && jour<29) {
            result =  true;
        }  
    }else if (moisEn30.includes(mois)) {
        if (jour>0 && jour<31) {
            result = true;
        }  
    }else if (moisen31.includes(mois)){
        if (jour>0 && jour<=31) {
            result = true;
        }  
    } else {
        return result;
    }
    return result;
}



//const formatValide = (^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$);

//const valid = formatValide.test("10/05/9789");

//console.log(valid);

if(date1.match(regexDate){
    alert('Date Valide');
}

const regexDate = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/