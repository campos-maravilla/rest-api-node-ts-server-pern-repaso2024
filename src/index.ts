import server from "./server";
import color from "colors";

server.listen(4000, () => {
    console.log(color.cyan.bold('REST API en el puerto 4000'))
})

