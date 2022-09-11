            var adet = 0,toplam=0;
            var num=Number(sayi.value);
            console.log(num);
            while(num != 0)
            {
               toplam=(num%10)+toplam;
               num =Math.floor(num / 10);
                ++adet;
            }
            
            sonuc.value=toplam;
        } 


İf(sonuc.value%2==0){
Print(“sayı çift”)

}
Else {
Print(“sayı tektir”)}


	
