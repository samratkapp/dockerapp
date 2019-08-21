import templateModel from './template-model'

class TemplateController {
    constructor() {

    }

    getTemplate = async (req, res) => {

        console.log("req.query==>" + req.query);
        console.log("TemplateController :: getTemplate");
        try {
         const result=   await templateModel.getTemplate();
         res.render('index', { 
             title: 'Template get Url  query ==> ' + JSON.stringify(req.query) + "result:" +JSON.stringify( result) ,
             
            });
        } catch (error) {
            console.log("TemplateController error :: error", error);

        }


        
        //  res.send( { title: 'Template gett Url  query ==> ' + JSON.stringify(req.query)});

    }

    addTemplate = () => {
        console.log("TemplateController :: addTemplate");
    }
}

export default new TemplateController();