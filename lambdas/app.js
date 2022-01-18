// import middy from "@middy/core";
// import cors from "@middy/http-cors";
// import middyJsonBodyParser from "@middy/http-json-body-parser";

const middy = require("@middy/core");
const cors = require("@middy/http-cors");
const middyJsonBodyParser = require("@middy/http-json-body-parser");

const middify = (handler) => {
  return middy(handler).use(middyJsonBodyParser()).use(cors());
};

const helloWorld = async (event, context) => {
  try {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "hello world",
      }),
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
      // },
    };
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

exports.handler = middify(helloWorld);
