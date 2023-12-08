import Motoristas from "../models/motoristas.js";

class MotoristasController {
  static async listarMotoristas(req, res) {
    try {
      const listaMotoristas = await Motoristas.find({});
      res.status(200).json(listaMotoristas);
    } catch (erro) {
      res.status(500).json({ message: `Erro ao listar os motoristas cadastrados - ${erro.message}` });
    }
  }

  static async listarMotoristaPorId(req, res) {
    try {
      const id = req.params.id;
      const motoristaEncontrado = await Motoristas.findById(id);
      res.status(200).json(motoristaEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `Erro ao listar motorista por ID - ${erro.message}` });
    }
  }

  static async adicionarMotorista(req, res) {
    try {
      const novoMotorista = await Motoristas.create(req.body);
      res.status(201).send({ message: 'Motorista cadastrado com sucesso!', motorista: novoMotorista });
    } catch (erro) {
      res.status(500).json({ erro: `${erro.message} - Falha ao adicionar motorista` });
    }
  }

  static async atualizarMotorista(req, res) {
    try {
      const id = req.params.id;
      await Motoristas.findOneAndUpdate(id, req.body);
      res.status(200).json({ message: `Motorista atualizado com sucesso` });
    } catch (erro) {
      res.status(500).json({ message: `Erro ao atualizar motorista - ${erro.message}` });
    }
  }

  static async removerMotorista(req, res) {
    try {
      const id = req.params.id;
      await Motoristas.findOneAndDelete(id, req.body);
      res.status(200).json({ message: `Motorista removido!` });
    } catch (erro) {
      res.status(500).json({ message: `Erro ao remover motorista - ${erro.message}` });
    }
  }
}

export default MotoristasController;
