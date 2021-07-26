var quotes = [
    ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
    ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
    ["Argue with idiots, and you become an idiot.", "Paul Graham"],
    ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
    ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
  ];
  
  function newquote()
  {
      var randomNumber = Math.floor(Math.random()*(quotes.length));
      document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
  }

  var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() ;
  var dateTime = date+' '+time;
   
  document.getElementById("displayDateTime").innerHTML = dateTime + ' <br>  ' + daylist[day];

  var url = "http://google.com";
var text = "Replace this with your text";
window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');