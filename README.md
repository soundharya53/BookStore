# BookStore

Backend :
  Need to create a Config.js with required Port numbefr and Mongodb Url and it should be in backend folder
  It allows GET , PUT , POST ,DELETE , UPDATE option in backend.
  Database name -Book need to write schema for this database and routes can be placed in separate file called book route

Frontend:
  2 option : Book can be visible in the format of Card or Table 
  There are options like Create , Edit, Delete, Display all can be placed under page folder. It is routed in home.js 

For css , This project can be done using TailWindCss 
To install :
  npm install -D tailwindcss
  npx tailwindcss init
Update this to index.css :
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
Config Tailwind.css
  module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
  }
