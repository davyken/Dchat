import { defineConfig } from "vite";  
import react from "@vitejs/plugin-react";  

export default defineConfig({  
    plugins: [react()],  
    server: {  
        port: 3000,  
        proxy: {  
            "/api": {  
                target: "https://dchat-backend-1.onrender.com",  // Update with your render link  
                changeOrigin: true,  // Required if the API is on a different origin  
                secure: false,  // You might need this if using self-signed certs, otherwise set to true  
            },  
        },  
    },  
});
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })