import express from 'express'

const route = express.Router();


route.post('/subscribe', (req,res) => {
    const { email } = req.body; // This 'email' comes from the frontend

    if (!email) {
        return res.status(400).json({ message: "Email is required!" });
    }

    console.log("Saving email to database:", email);
    
    // Send a success response back to Axios
    res.status(201).json({ message: "You are now connected!" });
});


export default route;
