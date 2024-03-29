/**
 * Todo: List all class names in a order as ['8A','8B',...] 
 * Todo: Add an email account to the list inside the student object (email: 'jirik.evangeline@hicoders.ch',) by using firstname, lastname of the students and with @hicoders.ch domain name.
 * Todo: Find the profession(s) of the richest parents.
 * Todo: Create a login information for each student and add it as an object (logInfo:{username:fLastname,password:the day of the birthdate+the last_three_chars_of_the_lastname+zipCode}) Output:logInfo: { username: 'ejirik', password: '18rik1978' }
 * Todo: Create a new list that shows only classes, students id, fullname, gender and average of the lessons for each student.
 * Todo: Create a new list that shows only classnames and all lessons's average.[{class:'8D',averages:{math:45,ict:63, chemistry: 54, biology: 46 }},{...}]
 * Todo: Create a new list that shows only classnames and all lessons's average.[{class:8A, average:75},{...}]
 * Todo: Show the GPA (not necessary)
 * Todo: Find the most succesfull student(s) among the all classes.
 * Todo: Make a statistic [{fullClassName="8A",male:6,female:8,total:14},{...}]
 * Todo: Find the male, female and total number of students.{male:24,female:29,total:53}
 * Todo: Make a list of shirt sizes and amount of need.{s:6,m:18,l:12,xl:4,...}
 * Todo: Make a student list who was born in 2008.[{fullname:"John Doe",bod:24/11/2008},{...}] 
 * Todo: Compare the female and male students grade. Exmp Output: Female students are more successful
 * Todo: School secretary wants to send a warning letter some parents whose children grades' are so bad. You need to help the secretary. First task: find the five(5) children who has the lowest grade({id,firstname,lastname,average of the grades}). Second task: Make a new list with those five students parents name and their addresses.
 */


/* Yapılacaklar: Tüm sınıf adlarını ['8A','8B',...] şeklinde sırayla listeleyin.
  * Yapılacaklar: Öğrenci nesnesinin (email: 'jirik.evangeline@hicoders.ch',) içindeki listeye öğrencilerin ad, soyad ve @hicoders.ch alan adıyla bir e-posta hesabı ekleyin.
  * Yapılacaklar: En zengin ebeveynlerin mesleklerini bulun.
  * Yapılacak: Her öğrenci için bir oturum açma bilgisi oluşturun ve bunu bir nesne olarak ekleyin (logInfo:{username:fLastname,password:the day of the doğumdate+the last_three_chars_of_the_lastname+zipCode}) Output:logInfo: { username: 'ejirik', password : '18rik1978' }
  * Yapılacaklar: Her öğrenci için yalnızca sınıfları, öğrenci kimliğini, tam adı, cinsiyeti ve derslerin ortalamasını gösteren yeni bir liste oluşturun.
  * Yapılacaklar: Yalnızca sınıf adlarını ve tüm derslerin ortalamasını gösteren yeni bir liste oluştur.[{class:'8D',averages:{math:45,ict:63, chemistry: 54, biyoloji: 46 }},{...} ]
  * Yapılacaklar: Yalnızca sınıf adlarını ve tüm derslerin ortalamasını gösteren yeni bir liste oluştur.[{sınıf:8A, ortalama:75},{...}]
  * Yapılacaklar: GPA'yı göster (gerekli değil)
  * Yapılacaklar: Tüm sınıflar arasında en başarılı öğrenciyi/öğrencileri bulun.
  * Yapılacak: Bir istatistik oluştur [{fullClassName="8A",male:6,female:8,total:14},{...}]
  * Yapılacak: Erkek, kız ve toplam öğrenci sayısını bulun.{male:24,bale:29,total:53}
  * Yapılacaklar: Gömlek bedenlerinin ve ihtiyaç miktarının bir listesini yapın.{s:6,m:18,l:12,xl:4,...}
  * Yapılacaklar: 2008 doğumlu bir öğrenci listesi yapın.[{fullname:"John Doe",bod:24/11/2008},{...}]
  * Yapılacaklar: Kız ve erkek öğrencilerin notlarını karşılaştırın. Exmp Çıktısı: Kız öğrenciler daha başarılı
  * Yapılacak: Okul sekreteri, çocuklarının notları çok kötü olan bazı velilere bir uyarı mektubu göndermek istiyor. Sekretere yardım etmelisin. Birinci görev: en düşük nota sahip beş (5) çocuğu bulun ({id,ad,soyadı,notların ortalaması}). İkinci görev: Bu beş öğrencinin ebeveynlerinin adlarını ve adreslerini içeren yeni bir liste yapın.
  */
import *as fnc from './functions.js'
// console.log(fnc.classNames);
// console.log(fnc.listWithEmail.forEach(pClass => console.log(pClass.students)));
// console.log(fnc.professionOfRichestParents());
// console.log(fnc.listWithLogin[0].students);
// console.log(fnc.averageOfLessonsEachStudent.forEach(pClass => console.log(pClass)))
// console.log(fnc.classesAndLessonsAverages);
// console.log(fnc.onlyClassesAndAverages)
// console.log(fnc.mostSuccessfulStudent())
// console.log(fnc.classMaleFemale);
// console.log(fnc.allMaleFemale());
// console.log(fnc.sizes())
// console.log(fnc.bornIn2008)
// console.log(fnc.whoIsBetter())
// console.log(fnc.wishesOfTheSecretary())