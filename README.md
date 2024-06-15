# Contact Tracker DApp

This project is a decentralized application (DApp) that allows users to store and manage contact details on the blockchain. The system includes a custom smart contract, a backend built with NestJS, a Moralis Streams API to listen to contract events, and a frontend built with Next.js.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contact](#contact)

## Features
1. Custom smart contract to store contact details.
2. Backend system built with NestJS.
3. Moralis Streams API to listen to contract events.
4. Event listener to receive and store contact details with date in the backend.
5. APIs to manage contact details, with Redis caching for performance.
6. Frontend application to display all users, built with Next.js.

## Technologies Used
- Solidity (Smart Contract)
- NestJS (Backend)
- Moralis Streams API
- Redis (Caching)
- Next.js (Frontend)
- TypeScript

## Setup Instructions

### Prerequisites
- Node.js
- npm or yarn
- Redis
- Moralis account

### Clone the Repository
```sh
git clone https://github.com/iamnas/contact-tracker-dapp.git
cd contact-tracker-dapp
```

### Install Dependencies
#### Backend
```sh
cd backend
npm install
```

#### Frontend
```sh
cd ../frontend
npm install
```

### Environment Variables
Create a `.env` file in both `backend` and `frontend` directories and set the necessary environment variables.

#### Backend
```
MORALIS_API_KEY = your_moralis_api_key
CONTRACT_ADDRESS = your_contract_address
TOPIC = your_topic
DB = your_database_url
```

#### Frontend
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Running the Project
#### Backend
```sh
cd backend
npm run start
```

#### Frontend
```sh
cd ../frontend
npm run dev
```

## Usage
1. Deploy the custom smart contract to your preferred blockchain network.
2. Setup Moralis Streams API to listen to the events from the deployed smart contract.
3. Run the backend server to receive events and store contact details.

4. Access the frontend application to view and manage the stored contact details.
```
