/* eslint-disable no-undef */
/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    showUserForm: function(req, res) {
      return res.view('pages/crudUserForm');
    },
    create: async function(req, res) {
      try {
        const newUser = await Usuario.create(req.body).fetch();
        res.status(201).json(newUser);
      } catch (err) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
      }
    },
    read: async function(req, res) {
      try {
        const user = await Usuario.findOne({ id: req.params.id });
        if (!user) {
          throw new Error('Usuário não encontrado');
        }
        res.json(user);
      } catch (err) {
        res.status(404).json({ error: err.message });
      }
    },
  };
  

