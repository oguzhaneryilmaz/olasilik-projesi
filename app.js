function sayfa(){
  data =document.getElementById("data").value;
  var veri = data.split(",");
  var uzunluk = veri.length;
  for(var i = 0;i<uzunluk;i++){
    Number(veri[i]);
  }
  //document.getElementById("dataset").innerHTML = veri;
  document.getElementById("modsonuc").innerHTML ='Sonuc:' + modHesapla(veri);
  document.getElementById("medyansonuc").innerHTML ='Sonuc:' + medyanHesapla(veri);
  document.getElementById("sapmasonuc").innerHTML ='Sonuç: ' + standartSapmaHesapla(veri) + ', yaklaşık:' + Math.round(standartSapmaHesapla(veri));
  document.getElementById("varyanssonuc").innerHTML ='Sonuç: ' + varyansHesapla(veri) + ', yaklaşık: ' + Math.round(varyansHesapla(veri));
  document.getElementById("aortsonuc").innerHTML ='Sonuç: ' + aritmetikOrtHesapla(veri) + ', yaklaşık: ' + Math.round(aritmetikOrtHesapla(veri));
  document.getElementById("hortsonuc").innerHTML ='Sonuç: ' + harmonikOrtHesapla(veri) + ', yaklaşık: ' + Math.round(harmonikOrtHesapla(veri));
  document.getElementById("gortsonuc").innerHTML ='Sonuç: ' + geometrikOrtHesapla(veri) + ', yaklaşık: ' + Math.round(geometrikOrtHesapla(veri));
  document.getElementById("osapmasonuc").innerHTML ='Sonuç: ' + ortalamaMutlakSapmaHesapla(veri) + ', yaklaşık: ' + Math.round(ortalamaMutlakSapmaHesapla(veri));
  document.getElementById("dkatsayısısonuc").innerHTML ='Sonuç: ' + degiskenKatsayisiHesapla(veri) + ', yaklaşık: ' + Math.round( degiskenKatsayisiHesapla(veri));
  histogramOlustur(veri);
}
//$("histogram chart").html(histogramOlustur(veri));


