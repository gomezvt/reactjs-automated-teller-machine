// api-client to simulate service api calls

// 1.
// for actual implementation, a deployed backend service could be on Node.js, as an example, and this api-client would call the respective service endpoint
// based on the user's interactions on the UI to either authenticate with pin, check balance, withdraw funds, deposit funds, or exit the application

// 2.
// api endpoints would be designed and implemented in the live service to include params such as the user's pin, and request validation  
// and error handling to return applicable http status codes (400 - bad request, 404 - not found, 401 - not auth, 500 - technical error)

// 3.
// this api-client can use the fetch API, or the axios library to instantiate an axios instance to make HTTP requests, and
// it can implement try/catch with async functions to await promises and catch errors from the service to display meaningful error messages on the UI

// 4.
// based on the user's interactions on the UI to either check balance, withdraw funds, deposit funds, or exit the application, a call from the atm-screen component
// in this project would be made to the respective function in this api-client to call the backend service using async/await in order to await a promise (response) 
// and display the information (such as the user's balance) on the screen


const api = {
    // HTTP POST method for underlying service API
    authenticateUserWithPin: async (pin) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // return status of OK if user is successfully authenticated, or reject as in the case of an error
                // http status code of 200 would be returned by the service for successful call, or 500 for technical error, etc.
                resolve({ data: { status: "OK" } });
            }, 500); // Simulate network latency
        });
    },
    // HTTP PUT method for underlying service API
    withdrawFunds: async (amount) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // return status of OK if funds are successfully withdrawn, or reject as in the case of an error
                // http status code of 200 would be returned by the service for successful call, or 500 for technical error, etc.
                resolve({ data: { status: "OK" } });
            }, 500); // Simulate network latency
        });
    },
    // HTTP PUT method for underlying service API
    depositFunds: async (amount) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // return status of OK if funds are successfully deposited, or reject as in the case of an error
                // http status code of 200 would be returned by the service for successful call, or 500 for technical error, etc.
                resolve({ data: { status: "OK" } });
            }, 500); // Simulate network latency
        });
    },
    // HTTP GET method for underlying service API
    getBalance: async () => {
        return new Promise((resolve) => {
                // return status of OK if balance is successfull retrieved, or reject as in the case of an error
                // http status code of 200 would be returned by the service for successful call, or 500 for technical error, etc.
            setTimeout(() => {
                resolve({ data: { status: "OK" } });
            }, 500); // Simulate network latency
        });
    },
    exitApplication: async () => {
        return new Promise((resolve) => {
                // return status of OK for any updates to the service on user exit, or reject as in the case of an error
                // http status code of 200 would be returned by the service for successful call, or 500 for technical error, etc.
            setTimeout(() => {
                resolve({ data: { status: "OK" } });
            }, 500); // Simulate network latency
        });
    }
};

export default api;