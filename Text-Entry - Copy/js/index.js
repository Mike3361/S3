$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function submitText() {
	var name = $('#name').val();
    var email = $('#email').val();
    var telephonenumber = $('#telephonenumber').val();
    var dateofbirth = $('#dateofbirth').val();
    var password = $('#password').val();
    storeValue(name, email,telephonenumber,dateofbirth,password);
	alert(name);
}

function storeValue(name, email,telephonenumber,dateofbirth,password) {
	//add some code to store the key-value pair in persistant storage 
    window.localStorage.setItem(name,email,telephonenumber,dateofbirth,password);
}