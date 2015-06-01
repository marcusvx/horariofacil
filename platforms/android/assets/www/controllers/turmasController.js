var controller = {
	setNomeCurso : function(turma) {
		if (turma != null) {
			location.href = "semestres.html?" + turma;
		} else {
			alert("Ops. Ocorreu um erro, vamos tentar de novo!");
			location.href = "turmas.html";
		}

	}
};