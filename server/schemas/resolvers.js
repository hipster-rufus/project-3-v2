const { AuthenticationError } = require("apollo-server-express");
const { User, Rating } = require("../models");
const { signToken } = require("../utils/auth");

// Map resolvers to query on typedefs
const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("ratings");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("ratings");
    },
    // ratings: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Rating.find(params).sort({ createdAt: -1 });
    // },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  // Map mutations to mutations on typedefs
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addrating: async (parent, { value }, context) => {
      if (context.user) {
        const rating = await Rating.create({
          value,
          user: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { ratings: rating._id } }
        );

        return thought;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
