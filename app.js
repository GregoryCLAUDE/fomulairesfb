
console.log("yipikai");

$(document).ready()function {

	$(".form").on("submit",function(e){
		e.preventDefault();

		var $this = $(this);
		var name = $("#name").val();
		var forname = $("#forname").val();
		var login = $("#login").val();
		var password = $("#password").val();
		var day = $("#dayBirthdate").val();
		var month = $("#monthBirthdate").val();
		var year =("#yearBirthdate").val();
		var sexe =("#").val();

		if(name ===""||login ==="" ){
			console.log("les champs doivent etre rempli")
		}else{
			$.ajax({
				url: $this.attr("action"),
				type : $this.attr("method"),
				data : $this.serialize(),
				success : function(json){
					if(json.response === "ok"){
						console.log("envoyé")
					}else{
						"erreur"
					}
				}

			});
		};
	});
};