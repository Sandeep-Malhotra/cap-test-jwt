const cds = require('@sap/cds');
module.exports = async function () {
    this.on("getJWTToken", async (req) => {
        //  As Approuter module and XSUAA service is added
        //  That is why JWT Token is returned after user got authenticated by Approuter from UAA service
        let sToken = "";
        if (req.headers.authorization) {
            sToken = req.headers.authorization;
        }
        return sToken;

    })
}