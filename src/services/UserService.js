const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { genneralAccessToken, genneralRefreshToken } = require("./JwtService");
const { JsonWebTokenError } = require("jsonwebtoken");

const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone, createUserdAt } =
      newUser;

    try {
      // Check email
      const checkUser = await User.findOne({
        email: email,
      });
      if (checkUser !== null) {
        resolve({
          status: "ERR",
          message: "The email is already!",
        });
      }

      // Mã hóa pasword
      const hash = bcrypt.hashSync(password, 10);

      //Khi test phone: 0123456789 bị lỗi??
      const createdUser = await User.create({
        name,
        email,
        password: hash,
        phone,
        createUserdAt,
      });
      if (createdUser) {
        resolve({
          status: "OK",
          message: "SUCCESS!",
          data: createdUser,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const loginUser = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { email, password } = userLogin;

    try {
      // Check email có tồn tại trong database không
      const checkUser = await User.findOne({
        email: email,
      });
      if (checkUser === null) {
        resolve({
          status: "ERR",
          message: "The user is not defined!",
        });
      }

      const comparePassword = bcrypt.compareSync(password, checkUser.password);

      if (!comparePassword) {
        resolve({
          status: "ERR",
          message: "The password or user is incorrect!",
        });
      }
      const access_token = await genneralAccessToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });

      const refresh_token = await genneralRefreshToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });

      resolve({
        status: "OK",
        message: "SUCCESS!",
        access_token,
        refresh_token,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const updateUser = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Check email có tồn tại trong database không
      const checkUser = await User.findOne({
        _id: id,
      });
      //console.log('checkUser', checkUser)
      if (checkUser === null) {
        resolve({
          status: "OK",
          message: "The user is not defined!",
        });
      }

      const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });

      resolve({
        status: "OK",
        message: "SUCCESS!",
        data: updatedUser,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Check email có tồn tại trong database không
      const checkUser = await User.findOne({
        _id: id,
      });

      if (checkUser === null) {
        resolve({
          status: "OK",
          message: "The user is not defined!",
        });
      }

      await User.findByIdAndDelete(id);

      resolve({
        status: "OK",
        message: "Delete user seccess!",
      });
    } catch (e) {
      reject(e);
    }
  });
};

const deleteManyUser = (ids) => {
  return new Promise(async (resolve, reject) => {
    try {
      await User.deleteMany({ _id: ids });

      resolve({
        status: "OK",
        message: "Delete user seccess!",
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getAllUser = (sort, filter) => {
  //console.log('filter', filter)
  return new Promise(async (resolve, reject) => {
    try {
      if (filter) {
        const label = filter[0];
        const allUser = await User.find({
          [label]: { $regex: filter[1] },
        }).countDocuments();
        resolve({
          status: "OK",
          message: "Success",
          data: allUser,
        });
      }
      if (sort) {
        const objectSort = {};
        objectSort[sort[1]] = sort[0];
        const allUser = await User.find().sort(objectSort);
        resolve({
          status: "OK",
          message: "Get all user seccess!",
          data: allUser,
        });
      } else {
        const allUser = await User.find();
        //console.log(allUser)
        //trả về kết quả
        resolve({
          status: "OK",
          message: "Get all user seccess!",
          data: allUser,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
const getAllUserCount = (filter) => {
  // console.log('filter', filter)
  return new Promise(async (resolve, reject) => {
    try {
      if (filter) {
        const label = filter[0];
        const allUser = await User.find({
          [label]: { $regex: filter[1] },
        }).countDocuments();
        // console.log('allUserCount2024', allUser)
        resolve({
          status: "OK",
          message: "Success",
          data: allUser,
        });
      } else {
        const allUserCount = await User.countDocuments();
        //console.log('allUserCount', allUserCount)
        //trả về kết quả
        resolve({
          status: "OK",
          message: "Get all user seccess!",
          data: allUserCount,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const getDetailsUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Check email có tồn tại trong database không
      const user = await User.findOne({
        _id: id,
      });

      if (user === null) {
        resolve({
          status: "OK",
          message: "The user is not defined!",
        });
      }

      resolve({
        status: "OK",
        message: "SUCCESS!",
        data: user,
      });
    } catch (e) {
      reject(e);
    }
  });
};
const getEmailUser = (getEmail) => {
  return new Promise(async (resolve, reject) => {
    const { email } = getEmail;

    try {
      // Check email có tồn tại trong database không
      const checkUser = await User.findOne({
        email: email,
      });
      if (checkUser === null) {
        resolve({
          status: "ERR",
          message: "The user is not defined!",
        });
      }

      resolve({
        status: "OK",
        message: "SUCCESS!",
        data: checkUser,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const changePassword = (data) => {
  const { email, password, confirmPassword } = data;
  const hash = bcrypt.hashSync(password, 10);
  console.log(hash);
  console.log(password, email);
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({ email: email });

      const updatedUser = await User.findByIdAndUpdate(
        user._id,
        { password: hash },
        { new: true }
      );

      resolve({
        status: "OK",
        message: "SUCCESS!",
        data: updatedUser,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getAllUser,
  getDetailsUser,
  deleteManyUser,
  getAllUserCount,
  getEmailUser,
  changePassword,
};
