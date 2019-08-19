import templateModel from './template-model'

class TemplateController {
    constructor() {

    }

    getTemplate = async (req, res) => {

        console.log("req.query==>" + req.query);
        console.log("TemplateController :: getTemplate");
        try {
            await templateModel.getTemplate();
        } catch (error) {
            console.log("TemplateController error :: error", error);

        }


        res.render('index', { title: 'Template get Url  query ==> ' + JSON.stringify(req.query) });
        //  res.send( { title: 'Template gett Url  query ==> ' + JSON.stringify(req.query)});

    }

    addTemplate = () => {
        console.log("TemplateController :: addTemplate");
    }
}

export default new TemplateController();