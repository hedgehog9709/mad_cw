/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {

  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {

    document.getElementById("navbar").style.top = "0";
  } 

  else {
    document.getElementById("navbar").style.top = "-111px";
  }
  
  prevScrollpos = currentScrollPos;
}



// log in
var loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function (event) {
	event.preventDefault();

	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;

	if (email === '' || password === '') {
		swal({
		  type: 'error',
		  title: 'Error',
		  text: 'Please fill all the required fields',
		})
	} else {

		if (email === 'bunyod.kh@gmail.com' && password === '123') {
			swal(
			  'Welcome!',
			  'You are logged in as an admin',
			  'success'
			)
		} else {
			swal({
			  type: 'error',
			  title: 'Wrong credentials',
			  text: 'Try again. 2 more attempts left.',
			})
		}

	}
	
}); 