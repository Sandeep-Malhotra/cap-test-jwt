const cds = require('@sap/cds');
module.exports = async function () {
    this.on("getJWTToken", async (req) => {
        //  As no Approuter module and XSUAA service is added
        //  That is why JWT Token is undefined 
        //  Therefore Function Import return empty string
        let sToken = "";
        if (req.headers.authorization) {
            sToken = req.headers.authorization;
        }
        return sToken;

    })
}