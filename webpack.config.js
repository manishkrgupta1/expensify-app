
const path = require('path');
const ExportTextPlugin= require('extract-text-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//used to  grab tha plugin we installed

//optput should be absolute path
module.exports =(env)=>{
         const isProduction = env ==='production'; 
         const  CSSExtract =new ExtractTextPlugin('styles.css');
   
    return{
        entry:'./src/app.js',
        output: {
        path: path.join(__dirname,'public'),
        filename : 'bundle.js'
        },
        module:{
            rules:[{
                loader : 'babel-loader',
                test :/\.js$/,
                exclude:/node_modules/
            },{
                test : /\.s?css$/,
                use:CSSExtract.extract({
                   use :[
                       {
                           loader : 'css-loader',
                           options:{
                               sourceMap: true
                           }
                       },
                       {
                        loader : 'sass-loader',
                        options:{
                            sourceMap: true
                        }
                    }
                       
                   ]    
                })
            }
      ]
        },
         plugins:[
             CSSExtract
         ],
        devtool : isProduction ?'source-map' :'inline-source-map',
        devServer:{
            contentBase : path.join(__dirname,'public'),
            historyApiFallback: true
          }
  
    };
}

