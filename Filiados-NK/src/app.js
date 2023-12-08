  import express from "express";
  import connectDataBase from "./config/dbConnect.js";
  import idade from "./models/idade.js";

  const conexao = await connectDataBase();

  conexao.on("error", (erro)=>{
    console.log("Erro de conexão: ", erro);
  });

  conexao.once("open", ()=>{
    console.log("Conexão com o banco realizada devidamente!")
  });

  const app = express();
  app.use(express.json())
  /*const idade = [
      {id: 1, "titulo": "De Recife pra Manaus"},
      {id: 2, "titulo": "De Recife para Bahia"},
      {id: 3, "titulo": "De Recife para Fortaleza"}
    ]
  */
    app.get('/', (req, res) => {
      res.status(200).send('Inicio Filiados NK');
    }) 
    
    app.get('/rota', async(req, res)=> {
      const listarota = await rota.find({});
        res.status(200).json(listarota);
    })

   /* app.post('/rota', (req, res) => {
      rota.push(req.body);
      res.status(201).send('Rota cadastrada com Sucesso!')
    })

    app.put('/rota/:id', (req, res) => {
      let index = BuscaRota(req.params.id);
      rota[index].titulo = req.body.titulo;
      res.json(rota);
    })
    
    app.get('/Rota/:id', (req, res)=>{
      const index = BuscaRota(req.params.id);
      res.status(201).json(rota[index]);

    })

    app.delete('/rota/:id',(req, res)=>{
      const index = buscaRota(req.params.id);
      if (index !== -1) {
       rota.splice(index, 1); // Remove 1 elemento a partir da posição index
        res.status(204).send(); // 204 significa "No Content" (sucesso, mas sem conteúdo)
      } else {
        res.status(404).send('Rota não encontrada'); // Retorna um erro se o ID não for encontrado
      }
    })
    

    function buscaRota(id) {
      return rota.findIndex(rota => rota.id == id)
    }*/
    export default app 

        

