# Weather Application 🌦️

A lightweight and intuitive web application to get real-time weather updates for any location worldwide.

---

## Live Link : https://developed-by-pratik.github.io/Weather-Application/

## 📄 Description  

**WeatherApp** is a web application built to provide users with current weather information. It leverages a weather API to fetch data and presents it through a simple and user-friendly interface. The application supports searching for weather details by city name and can also potentially show weather for the user's current location.

---

## ✅ Features

- Get real-time weather updates for any city.  
- (Potentially) Display weather for your current location.  
- Simple and intuitive user interface.  

---

## 🛠️ Technologies Used

- **Frontend:** HTML, CSS, JavaScript, EJS (Templating)  
- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL (Optional, based on search results)  
- **API:** OpenWeather API  

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### ✅ Prerequisites

- Node.js installed on your machine.  
- npm (Node package manager) or yarn.  
- A PostgreSQL database instance running (if the application uses it for storing data).  
- An API key from [OpenWeatherMap](https://openweathermap.org/).  

---

### 🔧 Installation

1. **Clone the repository:**  

   ```bash
   git clone https://github.com/Developed-by-Pratik/Weather-Application.git
   ```

2. **Navigate to the project directory:**  

   ```bash
   cd Weather-Application
   ```

3. **Install dependencies:**  

   ```bash
   npm install
   ```
   Or using yarn:

   ```bash
   yarn install
   ```

4. **Create a `.env` file** in the root directory and add your API key and potentially database credentials:

   ```env
   OPENWEATHER_API_KEY=YOUR_API_KEY

   # If using PostgreSQL:
   DB_USER=your_db_user
   DB_HOST=your_db_host
   DB_DATABASE=your_db_name
   DB_PASSWORD=your_db_password
   DB_PORT=your_db_port
   ```

   Replace `YOUR_API_KEY` and database details with your actual credentials.

---

### 🚀 Running the Application

1. **Start the server:**  

   ```bash
   npm start
   ```

2. **Open your web browser** and visit:  
   - [http://localhost:3000](http://localhost:3000) (or the port specified in your application).

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.  
(Note: You might need to create a `LICENSE` file if one doesn't exist in the repository).

---

## 🤝 Contributing

Contributions are welcome!  
If you'd like to contribute, please fork the repository and create a pull request with your changes.

---

## 📞 Contact

If you have any questions or suggestions, feel free to **open an issue** on the GitHub repository.
