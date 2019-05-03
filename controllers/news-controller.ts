import newsService from '../services/news-services';
import * as HttpStatus from 'http-status';
import Helper from "../infra/helper";

class newsController{
    get(req, res){
        newsService.get()
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    getById(req, res){
        newsService.getById(req.params.id)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    create(req, res){
        newsService.create(req.body)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, 'Success!'))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    update(req, res){
        newsService.update(req.params.id, req.body)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, `${news.title} updated successfully!`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    delete(req, res){
        newsService.delete(req.params.id)
            .then(() => Helper.sendResponse(res, HttpStatus.OK, 'Deleted successfully!'))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}

export default new newsController;