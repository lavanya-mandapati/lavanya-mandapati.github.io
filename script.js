function valid(){
				var name=document.getElementById("name").value;
				var msg=document.getElementById("msg").value;;
				var email=document.getElementById("email").value;
				
				if(name==''){
					alert("NAME CANNOT BE EMPTY")
				}
				
				else if(email==''){
					alert("ENTER VALID EMAIL ID")
				}
				
				else if(msg==''){
						alert("MESSAGE CANNOT BE EMPTY");
				}
						
				
			}
