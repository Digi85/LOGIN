function validar()
		{
			var usuario = document.getElementById("usuario").value;
			var contraseña = document.getElementById("pass").value;	

			if(usuario == "digi" && contraseña == "12345")
			{
				alert("Usuario y Contraseña validos");
			}
			else
			{
				alert("Verifique sus credenciales");
			}
		}
        function pagina1()
        {
        location.href="pagina1.html"
        }