class ExampleController {
  index(req, res) {
    res.send(`Example, funcionando bem, esta é a sua requisição: ${req}`);
  }
}

export default new ExampleController();
