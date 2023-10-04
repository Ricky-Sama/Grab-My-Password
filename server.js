require("dotenv").config();

const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  });