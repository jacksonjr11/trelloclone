const connection = require('../database/connection');

module.exports = {
  async index(req, res){
    try {
      const id = req.headers.authorization;

      if(!id){
        return res.status(401).json({error: "Unauthorizated"});
      }

      const response = await connection('users')
      .where({id})
      .select('*')
      .first();

      if(!response){
        return res.status(400).json({error: "This user doesn't exist"});
      }

      return res.json(response);

    } catch (error) {
      return res.json(error);
    }
  },

  async create(req, res){
    try {
      const { username, password } = req.body;

      const response = await connection('users')
      .insert({
        username,
        password
      });

      if(!response){
        return res.status(500).json({error: "Attempt failed, try again"});
      }

      return res.status(201).send();

    } catch (error) {
      return res.json(error);
    }
  },

  async update(req, res){
    try {
      const id = req.headers.authorization;
      const { username, password } = req.body;

      if(!id){
        return res.status(401).json({error: "unathourizated"});
      }

      const data = new Date();
      var timestamp = (`${data.getFullYear()}-${data.getUTCMonth()}-${data.getDate()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);

      const response = await connection('users')
      .where({id})
      .update({
        username,
        password,
        updated_at: timestamp
      });

      if(!response){
        return res.status(400).json({error: "this user doesn't exists"});
      }

      return res.status(201).send();
    
    } catch (error) {
      return res.json(error);
    }
  },

  async delete(req, res){
    try {
      const id = req.headers.authorization;
      
      if(!id){
        return res.status(401).json({error: "Unauthorizated"});
      }

      const request = await connection('users')
      .where({id})
      .delete();

      if(!request){
        return res.status(400).json({
          error: "this user doesn't exists"
        });
      }

      return res.status(201).send();

    } catch (error) {
      return res.json(error);
    }
  }
}