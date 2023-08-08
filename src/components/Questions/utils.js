export function login({ email, password }) {
    const delay = (0.7 + Math.random() * 2) * 1000;
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        if (password === "password123" && !!email) {
          resolve();
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, delay);
    });
}
  
// !! convert a non-Boolean value to Boolean using the double exclamation shorthand. 
//This can be useful especially in TypeScript (which has strict type definitions) where you need to return a Boolean value using a non-Boolean result or variables.
//