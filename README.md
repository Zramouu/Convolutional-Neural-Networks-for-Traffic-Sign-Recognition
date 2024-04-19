# Convolutional-Neural-Networks-for-Traffic-Sign-Recognition

## Overview
Built a Traffic Sign Recognition Web App that allows users to upload images of traffic signs and quickly receive predictions, using CNN models developed with TensorFlow and Keras, to provide accurate classifications of various traffic sign classes.

## Technology
- **Backend**: Flask (Python)
- **Frontend**: React (JavaScript)
- **Machine Learning**: TensorFlow and Keras APIs
- **Deployment**: Localhost (Development Mode)



### Prerequisites
- Python 3.x
- Node.js and npm/yarn (for React frontend)
- TensorFlow and Keras

### Installation

#### Backend Setup
```bash
# Clone the repository
git clone https://github.com/Zramouu/Convolutional-Neural-Networks-for-Traffic-Sign-Recognition
cd Convolutional-Neural-Networks-for-Traffic-Sign-Recognition

# Set up and activate a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

# Install Python dependencies
pip install -r requirements.txt
```

#### Frontend Setup
```bash
# Navigate to the frontend directory
cd traffic-signs

# Install JavaScript dependencies
npm install
# or
yarn install
```

### Running the Application

#### Start the Backend Server
```bash
# Navigate back to the root of the repository if needed
cd Convolutional-Neural-Networks-for-Traffic-Sign-Recognition

# Run the Flask app
python app.py
```

#### Start the Frontend

# Start the React app
npm start
# or
yarn start
```

The web application will be available at `http://localhost:3000`, and the backend API at `http://localhost:5000` by default.

##Usage

Upload an image of a traffic sign through the web interface, then click the "Predict" button to see the classification result.

Model Information

This project employs a Convolutional Neural Network (CNN) to accurately classify traffic signs. The CNN model is implemented using TensorFlow and the Keras API, and it's capable of processing images to extract features through convolutional layers before classifying them into 43 different traffic sign categories.

In Practice
The tool's practical application includes a CNN model that was trained using the German Traffic Sign Recognition Benchmark (GTSRB) dataset, which provided a robust set of over 50,000 images across various lighting conditions and angles, enhancing the model's ability to recognize and classify traffic signs in real-world conditions.

Data Preparation and Preprocessing
All images were standardized to 30x30 pixels, reducing the computational load and allowing for a uniform input format to the CNN model.

Model Architecture and Training
The architecture starts with an input layer, followed by convolutional stages with 32 filters and a 5x5 kernel using ReLU activation. To combat overfitting, max pooling and a dropout rate of 0.25 were used. Additional convolutional layers with 64 filters and a 3x3 kernel were added to capture more complex patterns. The model concludes with a dense layer and a high dropout rate before the final classification layer.

Dataset Splitting
The dataset was divided into training and testing sets, using 80% for training to ensure ample learning data, and 20% for testing to evaluate the model's performance.

Interface and User Experience
The screenshots below demonstrate the web app's interface:



Future Work

Further development could include enhancing the model's accuracy, implementing additional features like support for more languages, and improving the app's responsiveness across various devices.


