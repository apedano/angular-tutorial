export class AuthService {

    loggedIn: boolean = false;


    /**
     * A method which mocks the behavior to call a service to 
     * check if the user is authenticated. 
     * It returns after 800 ms
     */
    isAuthenticated() {
        const promise = new Promise(
            (resolve, _reject) => {
                setTimeout(
                    () => {
                        resolve(this.loggedIn);
                    }, 800);
            }
        );
        return promise;
    }
    
    login() {
      this.loggedIn = true;  
    }

    logout() {
        this.loggedIn = false;
    }
}