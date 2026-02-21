///subscribe
export const subscribe = (req, res) => {
    try {
        console.log("email has been registered" + req.body.email)
        res.status(200).json({ message: "email saved you will get info" })
    } catch (error) {
        return res.status(400).json({ message: "something is wrong" })
    }
}

//login

export const loginController = (req, res) => {
    try {
        console.log("user attempting log in :", req.body.email)
        res.status(200).json({ message: "user logged in" })
    } catch (error) {
        return res.status(400).json({ message: "unable to log in" })
    }
}


//register
export const registerController = (req, res) => {
    try {
        console.log("user registered :" + req.body.email ,"&& user name:" +req.body.name)
        res.status(200).json({ message: "you have been registered" })
    } catch (error) {
        return res.status(400).json({ message: "Error exe" })
    }
}