import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'REST API Node.js / Express / TypeScript',
            version: "1.0.0",
            description: "API Docs for Products"
        }
    },
    apis: ['./src/route.ts']
}
const swaggerSpec = swaggerJSDoc(options)
const swaggerUiOptions: SwaggerUiOptions = {
    customCss: `
    .topbar-wrapper .link {
       content: url('https://myfirstsiteweb2023.netlify.app/assets/logo-tony-f6e6deec.jpg');
    
       height: 50px;
       width: 60px;
       width: auto;
       object-fit:contain;
        
   }
   .swagger-ui .topbar {
       background-color: #2b3b45;
   }
   `,
    customSiteTitle: 'Documentación REST API Express / TypeScript'
}

export default swaggerSpec
export {
    swaggerUiOptions
}