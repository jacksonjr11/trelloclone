const connection = require('../database/connection');

module.exports = {
  async index(req, res){
    try {
      const list_id = req.headers.authorization;

      if(!list_id){
        return res.status(400).json({error: "this list doesn't exists"});
      }

      const response = await connection('cards')
      .where({list_id})
      .orderBy('id')
      .select('*')
      .finally();

      return res.json(response);

    } catch (error) {
      return res.json(error);
    }
  },

  async create(req, res){
    try {
      const list_id = req.headers.authorization;
      const { content } = req.body;

      if(!list_id){
        return res.status(401).json({error: "unauthorizated"});
      }

      const insert = await connection('cards')
      .insert({
        content,
        list_id
      });
      
      return res.status(201).send();

    } catch (error) {
      return res.json(error);
    }
  },

  async update(req, res){
    try {
      const { id } = req.query;
      const { content } = req.body;

      if(!id){
        return res.status(401).json({error: "unauthorizated"});
      }

      const update = await connection('cards')
      .where({id})
      .update({
        content
      });

      if(!update){
        return res.status(400).json({error: "this card doesn't exists"});
      }

      return res.status(201).send();

    } catch (error) {
      return res.json(error);
    }
  },

  async delete(req, res){
    try {
      const { id } = req.query;

      if(!id){
        return res.status(401).json({error: "unauthorizated"});
      }

      const del = await connection('cards')
      .where({id})
      .del();

      if(!del){
        return res.status(400).json({error: "this card doesn't exists"});
      }

      return res.status(201).send();

    } catch (error) {
      return res.json(error);
    }
  }
};