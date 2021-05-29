$(document).ready(function(){
    var veri = [];
    veri = $("#numberData").click(function () {
        var dataarr = $("#contact-form #data").val();
        dataarr = dataarr.split(",");
        var tempData = [];
        for(var i = 0 ; i < dataarr.length ; i++){
            tempData[i] = parseInt(dataarr[i]);
        }
        return tempData;
    });
    /* ilk sayfadan diziyi alma ve  ikinci sayfada sarı kutuya yazdırma*/ 
    $("#dataSet").text(veri);

    $("#selectMod").on("click",function(){
        $("#mod").fadeToggle();
        $('#modsonuc').text('Sonuc:' + modHesapla(veri));
    });

    $("#selectMedyan").on("click",function(){
        $("#medyan").fadeToggle();
        $('#medyansonuc').text('Sonuç: ' + medyanHesapla(veri));
    });

    $("#selectSapma").on("click",function(){
        $("#sapma").fadeToggle();
        $("#sapmasonuc").text('Sonuç: ' + standartSapmaHesapla(veri) + ', yaklaşık:' + Math.round(standartSapmaHesapla(veri)));
    });

    $("#selectVaryans").on("click",function(){
        $("#varyans").fadeToggle();
        $("#varyanssonuc").text('Sonuç: ' + varyansHesapla(veri) + ', yaklaşık: ' + Math.round(varyansHesapla(veri)));
    });

    $("#selectAOrt").on("click",function(){
        $("#aort").fadeToggle();
        $("#aortsonuc").text('Sonuç: ' + aritmetikOrtHesapla(veri) + ', yaklaşık: ' + Math.round(aritmetikOrtHesapla(veri)));
    });

    $("#selectHOrt").on("click",function(){
        $("#hort").fadeToggle();
        $('#hortsonuc').text('Sonuç: ' + harmonikOrtHesapla(veri) + ', yaklaşık: ' + Math.round(harmonikOrtHesapla(veri)));
    });

    $("#selectGOrt").on("click",function(){
        $("#gort").fadeToggle();
        $("#gortsonuc").text('Sonuç: ' + geometrikOrtHesapla(veri) + ', yaklaşık: ' + Math.round(geometrikOrtHesapla(veri)));
    });

    $("#selectOSapma").on("click",function(){
        $("#osapma").fadeToggle();
        $('#osapmasonuc').text('Sonuç: ' + ortalamaMutlakSapmaHesapla(veri) + ', yaklaşık: ' + Math.round(ortalamaMutlakSapmaHesapla(veri)));
    });
    
    $("#selectDKat").on("click",function(){        
        $("#dkatsayısı").fadeToggle();
        $("#dkatsayısısonuc").text('Sonuç: ' + degiskenKatsayisiHesapla(veri) + ', yaklaşık: ' + Math.round( degiskenKatsayisiHesapla(veri)));
    });

    $("histogram chart").html(histogramOlustur(veri));
});