var url = window.location.search.replace("?", "");
var itens = url.split("&");

if (itens.length > 1) {
	alert("Ops... Algo deu errado,\noi/n vamos tentar de novo!");
	location.href = "turmas.html";
}

var controller = {
	getNomeCurso : function() {
		return itens[0];
	},
	voltar: function(){
		location.href = "turmas.html";
	}
};