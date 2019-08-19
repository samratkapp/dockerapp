import sqlConnection from '../../config/mysql-config'

class TemplateModel {
    constructor() {

    }

    getTemplate = (req, res) => {
        console.log("TemplateModel :: getTemplate");

        return new Promise(function (resolve, reject) {
            try {
                sqlConnection.query('SELECT * from template ', (error, results, fields) => {
                    // if (error) {
                    //     throw error;
                    // }
                    console.log('The solution is: ', results);
    
                    resolve(results);
    
                });
                
                 
            } catch (error) {

                console.log(error)

            }
            
        });

    }

    addTemplate = () => {
        console.log("TemplateModel :: addTemplate");
    }
}

export default new TemplateModel();