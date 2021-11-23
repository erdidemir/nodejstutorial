var Tarih = new Date(); 
var Saat = Tarih.getHours();
if ( Saat > 6 && Saat <=10) 
{
document.write("Günaydın");
}
else if (Saat > 11 && Saat <=16) 
{
document.write("Tünaydın");
}
else if (Saat  > 17 && Saat <=22) 
{
document.write("İyi akşamlar");
}
else 
{
document.write("İyi geceler");
}