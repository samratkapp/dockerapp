import templateModel from './template-model'

class TemplateVallidation {

    constructor() { 
    }

    getTemplate = (req, res, next) => {

        console.log(" FILE  TemplateVallidation :: getTemplate");
        next();
    }

    addTemplate = () => {
        console.log("TemplateVallidation :: addTemplate");
    }
}

export default new TemplateVallidation();