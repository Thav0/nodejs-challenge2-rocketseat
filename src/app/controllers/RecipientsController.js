import * as Yup from 'yup';
import Recipients from '../models/Recipients';

class RecipientsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.string().required(),
      complemento: Yup.string().required(),
      estado: Yup.string()
        .required()
        .max(20),
      cidade: Yup.string()
        .required()
        .max(25),
      cep: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Data provided is invalid' });
    }

    const {
      nome,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    } = await Recipients.create(req.body);
    return res.json({ nome, rua, numero, complemento, estado, cidade, cep });
  }

  async update(req, res) {
    const destinationID = req.params.id;
    const schema = Yup.object().shape({
      nome: Yup.string(),
      rua: Yup.string(),
      numero: Yup.string(),
      complemento: Yup.string(),
      estado: Yup.string().max(20),
      cidade: Yup.string().max(25),
      cep: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return req.res(400).json({ error: 'Data provided is invalid' });
    }

    const destinationExists = await Recipients.findByPk(destinationID);

    if (!destinationExists) {
      return res.status(400).json({ error: 'Destination not found' });
    }

    const {
      nome,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    } = await destinationExists.update(req.body);

    return res.json({
      nome,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    });
  }
}

export default new RecipientsController();
