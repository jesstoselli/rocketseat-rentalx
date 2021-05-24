import { Request, Response, Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory/index";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", (request: Request, response: Response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request: Request, response: Response) => {
    return listCategoryController.handle(request, response);
});

categoriesRoutes.post(
    "/import",
    upload.single("file"),
    (request: Request, response: Response) => {
        // const { file } = request;
        // console.log(file);
        // return response.send();
        return importCategoryController.handle(request, response);
    }
);

export { categoriesRoutes };
