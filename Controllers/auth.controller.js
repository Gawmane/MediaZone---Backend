import UserModel from "../Models/user.model.js";
import dotenv from "dotenv"; // Credentials
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


dotenv.config();

class AuthController {
    constructor() {}

    login = async(req, res) => {
        // Destrukturerer form data
        const { username, password } = req.body;

        if (username && password) {
            // Henter db user ud fra username
            const data = await UserModel.findOne({
                where: { email: username }
            });

            // Validerer passwords
            bcrypt.compare(password, data.password, (err, result) => {
                if (result) {
                    // Genererer token ud fra user_id og secret key
                    const token = jwt.sign(data.id, process.env.PRIVATE_KEY)
                    return res.json({ token: token });
                }
                //Hvis der er fejl - skriv 
                else {
                    return res.status(401).send('Ukorekt bruger eller password');

                }

            })
        } else {
            return res.send(403).send('Du har ikke adgang til denne side');
        }
    }

    protected = async(req, res) => {
        return res.sendStatus(200);
    }
}

export default AuthController;