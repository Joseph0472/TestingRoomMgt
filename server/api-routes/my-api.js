import mongoose from 'mongoose'

export default router => {
    router.get("/msg", (req, res) => {
        //res.header("Access-Control-Allow-Origin", "*");
        //res.json({ message: `Hello, How's testing room going?` });
        res.send("API is working well");
        //res.send(`Hello you touched the server and the id is ${uuid()}`)
    });

}