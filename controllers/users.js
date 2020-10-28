
import User from '../models/User.js';


export const getUsers = async (req, res) => {
    const users = await User.find();
    res.send(users);
};

export const createUser = async (req, res) => {
    const newUser = new User(req.body);
    try {
        const user = await newUser.save();
        if (!user) {
            throw Error('Something wrong!!');
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ msg: error });
    }

};

export const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const foundUser = await User.findById(id);
        if (!foundUser) {
            throw Error('Usuario not found!');
        }
        res.status(200).json({ foundUser });
    } catch (error) {
        res.status(400).json({ msg: 'something wrong!' });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await User.findByIdAndDelete(id, (err) => {
            if (err) res.status(400).json({ msg: 'something wrong!' });
            res.send(`User with ${id} deleted from database.`)
        });
    } catch (error) {
        res.status(400).json({ msg: 'something wrong!' });
    }

};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    await User.findOneAndUpdate(
        {_id: id},{
            name: updatedUser.name,
        lastName: updatedUser.lastName,
        age: updatedUser.age
    },
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
};