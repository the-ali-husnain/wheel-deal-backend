const pool = require("../connections/postgre");
const { API_STATUS_CODES } = require("../constants/constants");

const { hostsTableQueries } = require("../utils/queries");
const { getAllHostsQuery } = hostsTableQueries;

const { SUCCESS, NOT_FOUND, AUTHORIZATION_FAILED } = API_STATUS_CODES;

const getAllHost = async (req, res) => {
  console.log("all hosts");
  try {
    const result = await pool.query(getAllHostsQuery);
    console.log("result here", result);
    res.status(SUCCESS).json(result.rows);
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllHost };
