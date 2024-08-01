function logar() {
  let login = document.querySelector("#login").value;
  let senha = document.querySelector("#senha").value;
  const avaliacao = document.querySelector(".aluno");
  const retorno = document.querySelector(".professor");

  if (login == "Professor" && senha == "prof1234") {
    window.location.href = "professor.html";
  } else if (login == "Aluno" && senha == "aluno1234") {
    window.location.href = "index.html";
  } else {
    alert("Dados inválidos");
  }
}
