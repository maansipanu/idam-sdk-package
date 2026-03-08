class ApiSingleton {
    static instance = null;

    constructor() {
        if (ApiSingleton.instance) {
            return ApiSingleton.instance;
        }
        ApiSingleton.instance = this;
    }

    getMessage() {
        return "Hello from Singleton";
    }
}

export default new ApiSingleton();