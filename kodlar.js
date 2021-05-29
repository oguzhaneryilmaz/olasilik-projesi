// MOD
var modHesapla = function(params){
    let frekans = 0, tempFrekans = 0, mod = "";
    for (var i = 0; i < params.length; i++) {
  
      let tempModArray = mod.split(',');
      let controlVal = false;
      tempModArray.forEach(function(element, j){
        if(parseFloat(element) == params[i])
          controlVal = true;
      });
      if(controlVal)
        continue;
  
      params.forEach(function(element, j){
        if(params[i] == element)
          frekans++;
      });
      if (frekans == tempFrekans) {
        mod += params[i] + ',';
      }
      else if(frekans > tempFrekans){
        mod = params[i] + ',';
        tempFrekans = frekans;
      }
      frekans=0;
  
    }
  
  
    mod = mod.substring(0, mod.length - 1);
  
    if (tempFrekans <= 1)
      return ' Tüm sayılar 1 kere tekrar ettiğinden mod yoktur.';
  
    // frekans tempde tutuluyor
    return ' mod: ' + mod + ', frekans: ' + tempFrekans + '';
}
  
// ARİTMEK ORTALAMA
  
var aritmetikOrtHesapla = function(params){
  
    var aritmetikOrt = 0;
    var toplam =0;
  
    params.forEach(function(item){
      toplam += parseFloat(item);
    });
    aritmetikOrt = toplam / params.length;
  
    return aritmetikOrt;
  
}
  
// STANDART SAPMA
/*
Sayıların aritmetik ortalaması hesaplanır.
Her bir sayının aritmetik ortalamadan farkı bulunur.-hesapla-
Bulunan farkların her birinin karesi hesaplanır.
Farkların kareleri toplanır.
Elde edilen toplam, serinin eleman sayısının bir eksiğine bölünür.
Bulunan sayının karekökü alınır.
*/
var standartSapmaHesapla = function(params){
  
    let aritmetikOrt = aritmetikOrtHesapla(params);
    
    stdSapma = Math.sqrt(params.reduce(hesapla , 0) / (params.length - 1));
    function hesapla(total, num){
        return total + Math.pow(num - aritmetikOrt, 2);
    }

    return stdSapma;
}
  
// MEDYAN
  
var medyanHesapla = function(params){
  var medyan =0;
  var numberofParametres=params.length;
  params.sort(fark);
  function fark(a,b){
    return a-b;
  }

  if(numberofParametres % 2==0 ){
    medyan=(parseFloat(params[numberofParametres/2 - 1]) +
    parseFloat(params[numberofParametres / 2 ])) / 2 ;
  }
  else{
    medyan=params[(numberofParametres - 1) / 2];
  }
  return medyan;
}

// VARYANS
  
var varyansHesapla = function(params){
    var varyans = Math.pow(standartSapmaHesapla(params), 2); 
    return varyans;
}
  
// ORTALAMA MUTLAK SAPMA
  
var ortalamaMutlakSapmaHesapla = function(params){
  
    let aritmetikOrt = aritmetikOrtHesapla(params);
    var parametreSayi = parseFloat(params.length);
    var toplam = 0;

    params.forEach(hesapla);
    function hesapla(item,index){
        toplam += Math.abs(parseFloat(item) - parseFloat(aritmetikOrt));
    }
    var ortMutlakSapma = toplam / parametreSayi;
  
    return ortMutlakSapma;
  
}
  
// DEĞİŞKEN KATSAYISI
  
var degiskenKatsayisiHesapla = function(params){
  
    let aritmetikOrt = parseFloat(aritmetikOrtHesapla(params));
    let standartSapma = parseFloat(standartSapmaHesapla(params));

    var degiskenKatsayısı = aritmetikOrt / standartSapma * 100.0;
  
    return degiskenKatsayısı;
  
}
  
// HARMONİK ORTALAMA
  
var harmonikOrtHesapla = function(params){
  
    var payda = 0.0;
    var parametreSayi = parseFloat(params.length);
  
    params.forEach(hesapla);
    function hesapla(item, index){
      payda += 1.0 / parseFloat(item);
    }

    var harmonikOrtalama = parametreSayi / payda;
  
    return harmonikOrtalama;
  
}
  
// GEOMETRİK ORTALAMA
  
var geometrikOrtHesapla = function(params){
  
    var carpim = 1.0;
    var parametreSayi = parseFloat(params.length);
  
    params.forEach(hesapla);
    function hesapla(item,index){
      carpim *= parseFloat(item);
    }
    var geometrikOrtalama = Math.pow(carpim, parseFloat(1.0 / parametreSayi));
  
    return geometrikOrtalama;
  
}

var histogramOlustur = function(params){
  params.sort(function(a,b){return a-b});

  var minValue = params[0];
  var len = params.length;
  var maxValue = params[len-1];

  var range = maxValue - minValue;

  var classNumber = 1 + (3.3* Math.log10(len));

  var grupGenişliği =Math.round( parseFloat(range) / parseFloat(classNumber));

  var labels = new Array(Math.round(classNumber));
  labels[0] = minValue;

  for(var i = 1; i<= Math.round(classNumber);i++){
    labels[i] = labels[i-1] + grupGenişliği;
  }

  var data = new Array(Math.round(classNumber));
  for(var j = 0; j <= Math.round(classNumber);j++){
    var sayac = 0;
    for(var k = 0; k<len ;k++){
      if(params[k]>=labels[j] && params[k] <= (labels[j]+ grupGenişliği -1)){
      sayac++;
      }
    }
    data[j]=sayac;
  }
  var chart= new Chart(document.getElementById('chart'),{
    type:'line',
    data: {
    labels: labels,
    datasets: [{
      label:'sayı histogramı',
      borderColor: '#2EC1AC',
      borderWidth:1,
      data:data 
    }]
    },
    options:{
      legend:{display:false},
      title:{
          display:true,
          text: "Histogram"
      }
    }

  });
  return chart;

}

  


