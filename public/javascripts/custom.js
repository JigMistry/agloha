$(document).ready(function(){
$("#addNew").click(function(){
  var x = document.getElementsByClassName('eventform');
  x[0].style.display ='block';
  x[1].style.display ='block';
  document.getElementById('addNew').style.display = 'none';
});
$("#hideForm").click(function(){
  var y = document.getElementsByClassName('eventform');
  y[0].style.display = 'none';
  y[1].style.display = 'none';
  
  document.getElementById('addNew').style.display = 'inline';
});
 $('[data-toggle="popover"]').popover();
 $('[data-toggle="tooltip"]').tooltip(); 
 $("#closeTable").click(function(){
   document.getElementById('staffTable').style.display = 'none';
  document.getElementById('a').style.display = 'inline';
  document.getElementById('b').style.display = 'inline';
  document.getElementById('c').style.display = 'inline';
  document.getElementById('d').style.display = 'inline';
});

 $("#showStaff").click(function(){
  $("#staffTable").fadeIn(2000);
  document.getElementById('a').style.display = 'none';
  document.getElementById('b').style.display = 'none';
  document.getElementById('c').style.display = 'none';
  document.getElementById('d').style.display = 'none';
 
  
});
 
});

function getFileName(fileName) {
	var a = document.getElementById('filePopUp').src = '/images/uploads/'+fileName ;
	document.getElementById('download').href = '/images/uploads/'+fileName ;
}

 function initMap() {
        var uluru = {lat: 28.079787, lng: 74.618534};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
 }
 
 function checkUserName(username){
	if(username.value === 'school@admin'){
			document.getElementById('upImageUser').style.display = 'inline';
			document.getElementById('downImageUser').style.display = 'none';
			document.getElementById('user').style.display = 'none';
			
			
	}else{
			document.getElementById('downImageUser').style.display = 'inline';
			document.getElementById('upImageUser').style.display = 'none';
			document.getElementById('user').style.display = 'none';
	
	}
 }
 
  function checkPassword(password){
	if(password.value === 'letmein#1234$'){
			document.getElementById('upImagePwd').style.display = 'inline';
			document.getElementById('downImagePwd').style.display = 'none';
			document.getElementById('pwd').style.display = 'none';
			
			
	}else{
			document.getElementById('downImagePwd').style.display = 'inline';
			document.getElementById('upImagePwd').style.display = 'none';
			document.getElementById('pwd').style.display = 'none';
	
	}
 }
 