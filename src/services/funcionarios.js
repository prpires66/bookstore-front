const { axios, urlAPI } = require("./config");

module.exports = class Funcionarios {
  //Login
  static async LoginForm(req, res) {
    const token = req.cookies.token;
    if (!token) res.render("funcionarios/login", { layout: "main_log_false" });
    else {
      res.clearCookie("token", { path: "/" });
      res.redirect("/");
    }
  }

  //Login Funcionário
  static async Login(req, res) {
    const token = req.cookies.token;
    let valores = req.body;
    const options = {
      url: urlAPI + "login",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },

      data: valores,
    };
    axios(options)
      .then((funcionario) => {
        if (funcionario != undefined) {
          res.cookie("token", funcionario.data.token, {
            maxAge: 900000,
            httpOnly: true,
          });
          const mensagem =
            "<span class='text-primary'>" +
            funcionario.data.nome +
            "</span>, Seja bem-vindo!";
          res.render("mensagem", {
            mensagem: mensagem,
            Layout: "main_log_true",
          });
        }
      })
      .catch((error) => {
        res.clearCookie("token", { path: "/" });
        if (error.code === "ECONNREFUSED") {
          var mensagem = "Conexão Recusada";
          var descricao =
            "Verifique se a API está em execução e se a variável de ambiente URL_API foi definida.";
        } else {
          var mensagem = error.response
            ? error.response.status + " - " + error.response.data.message
            : "Erro desconhecido";
          var descricao = error.config ? error.config.url : " ";
        }
        res.render("mensagem", {
          mensagem: mensagem,
          descricao: descricao,
          layout: "main_log_false",
        });
      });
  }

  //Create Funcionario
  static async FuncionarioCadastrarForm(req, res) {
    const token = req.cookies.token;
    if (!token)
      res.render("funcionarios/Cadastrar", { layout: "main_log_false" });
    else res.render("funcionarios/Cadastrar", { layout: "main_log_true" });
  }

  //Create Funcionário
  static async FuncionarioCadastrar(req, res) {
    const token = req.cookies.token;
    let valores = req.body;
    const options = {
      url: urlAPI + "funcionarios",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },

      data: valores,
    };
    axios(options)
      .then(() => {
        const mensagem = "Cadastro realizado com sucesso!";
        const token = req.cookies.token;
        if (!token)
          res.render("mensagem", {
            mensagem: mensagem,
            layout: "main_log_false",
          });
        else
          res.render("mensagem", {
            mensagem: mensagem,
            layout: "main_log_true",
          });
      })
      .catch((error) => {
        res.clearCookie("token", { path: "/" });
        const mensagem =
          error.response.status + " - " + error.response.data.message;
        const descricao = error.config.url;
        res.render("mensagem", {
          mensagem: mensagem,
          descricao: descricao,
          layout: "main_log_false",
        });
      });
  }

  //Listar Funcionários
  static async FuncionarioListar(req, res) {
    const token = req.cookies.token;
    const options = {
      url: urlAPI + "funcionarios",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },

      data: {},
    };
    axios(options)
      .then((response) => {
        const funcionario = response.data;
        res.render("funcionarios/listar", {
          funcionario,
          layout: "main_log_true",
        });
      })
      .catch((error) => {
        res.clearCookie("token", { path: "/" });
        const mensagem =
          error.response.status + " - " + error.response.data.message;
        const descricao = error.config.url;
        res.render("mensagem", {
          mensagem: mensagem,
          descricao: descricao,
          layout: "main_log_false",
        });
      });
  }

  //Alterar Funcionários
  static async FuncionarioAlterarForm(req, res) {
    const token = req.cookies.token;
    const id = req.params.id;
    const options = {
      url: urlAPI + "funcionarios/" + id,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },

      data: {},
    };
    axios(options)
      .then((response) => {
        const funcionario = response.data;
        res.render("funcionarios/Update", {
          funcionario,
          layout: "main_log_true",
        });
      })
      .catch((error) => {
        const mensagem =
          error.response.status + " - " + error.response.data.message;
        const descricao = error.config.url;
        res.render("mensagem", {
          mensagem: mensagem,
          descricao: descricao,
          layout: "main_log_true",
        });
      });
  }

  //Alterar Funcionários
  static async FuncionarioAlterar(req, res) {
    const token = req.cookies.token;
    let valores = req.body;
    let id = valores.idFuncionario;
    const options = {
      url: urlAPI + "funcionarios/" + id,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },

      data: valores,
    };
    axios(options)
      .then((response) => {
        res.redirect("/funcionarios");
      })
      .catch((error) => {
        const mensagem =
          error.response.status + " - " + error.response.data.message;
        const descricao = error.config.url;
        res.render("mensagem", {
          mensagem: mensagem,
          descricao: descricao,
          layout: "main_log_true",
        });
      });
  }

  //Delete Funcionário
  static async FuncionarioDeletar(req, res) {
    const token = req.cookies.token;
    const id = req.params.id;
    const options = {
      url: urlAPI + "funcionarios/" + id,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },

      data: {},
    };
    axios(options)
      .then((response) => {
        res.redirect("/funcionarios");
      })
      .catch((error) => {
        res.clearCookie("token", { path: "/" });
        const mensagem =
          error.response.status + " - " + error.response.data.message;
        const descricao = error.config.url;
        res.render("mensagem", {
          mensagem: mensagem,
          descricao: descricao,
          layout: "main_log_true",
        });
      });
  }
};
