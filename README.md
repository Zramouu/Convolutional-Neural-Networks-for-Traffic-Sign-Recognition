# BreadcrumbsConvolutional-Neural-Networks-for-Traffic-Sign-Recognition

## Overview
Built a Traffic Sign Recognition Web App that allows users to upload images of traffic signs and quickly receive predictions, using CNN models developed with TensorFlow and Keras, to provide accurate classifications of various traffic sign classes.

## Technology Stack
- **Backend**: Flask (Python)
- **Frontend**: React (JavaScript)
- **Machine Learning**: TensorFlow and Keras APIs
- **Deployment**: Localhost (Development Mode)

## Getting Started

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

## Usage
Upload an image of a traffic sign through the web interface, then click the "Predict" button to see the classification result.

## Model Information


