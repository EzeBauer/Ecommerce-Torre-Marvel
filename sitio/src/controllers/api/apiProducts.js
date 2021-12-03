const db = require("../../database/models");
const getURL = (req) =>
  `${req.protocol}://${req.get("host")}${req.originalUrl}`;
const getURLBase = (req) => `${req.protocol}://${req.get("host")}`;
const { Op } = require("sequelize");

const throwError = (res, error) => {
  return res.status(error.status || 500).json({
    status: error.status || 500,
    message: error.message,
  });
};

module.exports = {
  list: async (req, res) => {
    try {
      const products = await db.Product.findAll({
        include: [{ association: "category" }],
      });
      let response = {
        status: 200,
        meta: {
          cantidad: products.length,
          url: getURL(req),
        },
        data: products,
      };
      return res.status(200).json(response);
    } catch (error) {
      throwError(res, error);
    }
  },
  detail: async (req, res) => {
    if (req.params.id % 1 != 0) {
      ///si no es un numero
      return res.status(422).json({
        status: 422,
        message: "ID incorrecto",
      });
    }

    try {
      const product = await db.Product.findByPk(req.params.id, {
        include: [{ association: "category" }],
      });
      if (product) {
        let response = {
          status: 200,
          meta: {
            url: getURL(req),
          },
          data: product,
        };
        return res.status(200).json(response);
      } else {
        const error = new Error("Producto inexistente");
        error.status = 400;
        throw error;
      }
    } catch (error) {
      throwError(res, error);
    }
  },
  create: async (req, res) => {
    console.log(req.body);
    try {
      const product = await db.Product.create({
        ...req.body,
      });
      let response = {
        status: 201,
        meta: {
          url: getURLBase(req) + "/api/products/" + product.id,
        },
        message: "Producto agregado con éxito",
      };
      return res.status(201).json(response);
    } catch (error) {
      return res.status(400).json({
        status: 400,
        messages: error.errors.map((error) => error.message),
      });
    }
  },
  search: async (req, res) => {
    console.log(req.query.keywords);
    try {
      let products = await db.Product.findAll({
        include: [{ association: "category" }],
        where: {
          [Op.or]: [
            {
              title: {
                [Op.substring]: req.query.keywords,
              },
            },
            {
              description: {
                [Op.substring]: req.query.keywords,
              },
            },
          ],
        },
      });
       let response = {
        status: 200,
        meta: {
          total: products.length,
          url: getURL(req),
        },
        data: products,
      };
      console.log(response);
      return res.status(200).json(response);
      /*  }) */
    } catch (error) {
      throwError(res, error);
    }
  },
  ropa: async(req, res) => {
    try { 
      let ropa= await db.Category.findOne({ where: { name: "ropa" }, include: [{ association: "products" }] })
      
     let response = {
        status: 200,
        meta: {
          total:ropa.products.length,
          url: getURL(req),
        },
        data: ropa,
      };
      console.log(response);
      return res.status(200).json(response);
      
    } catch (error) {
       throwError(res, error);
    }
   
  },

  figuras: async(req, res) => {
    try { 
      let figuras= await db.Category.findOne({ where: { name: "figuras" }, include: [{ association: "products" }] })
      
     let response = {
        status: 200,
        meta: {
          total: figuras.products.length,
          url: getURL(req),
        },
        data: figuras,
      };
      console.log(response);
      return res.status(200).json(response);
      
    } catch (error) {
       throwError(res, error);
    }
   
  },
  mercha: async(req, res) => {
    try { 
      let merchandinsing= await db.Category.findOne({ where: { name: "merchandising" }, include: [{ association: "products" }] })
      
     let response = {
        status: 200,
        meta: {
          total: merchandinsing.products.length,
          url: getURL(req),
        },
        data: merchandinsing,
      };
      console.log(response);
      return res.status(200).json(response);
      
    } catch (error) {
       throwError(res, error);
    }
   
  },
  comics: async(req, res) => {
    try { 
      let comics= await db.Category.findOne({ where: { name: "comics" }, include: [{ association: "products" }] })
      
     let response = {
        status: 200,
        meta: {
          total: comics.products.length,
          url: getURL(req),
        },
        data: comics,
      };
      console.log(response);
      return res.status(200).json(response);
      
    } catch (error) {
       throwError(res, error);
    }
   
  },
};
