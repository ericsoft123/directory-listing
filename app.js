
const path = require( "path" );
const fs = require( 'fs' );

const express= require('express');
const app=express();


const folder =path.join(__dirname,"foldelist_examples");//note you can change this this is example
//const folder =path.join(__dirname,"./");//this is example to get all files and folders of this locations

//const folder =path.join('C:/Users/Hp/Desktop/',"/Downlod");//note you can change this




const listdata=[];
app.get('/',(req,res)=>{




fs.readdir(folder, function(err, items) {
 
  if (err) return res.json(err)
  
  for (var i=0; i<items.length; i++) {
     // console.log(folder+ '/' + items[i]);
      var file = path.join(folder,items[i]);
      details_callback(file);
         
  }
  res.json(listdata); 
 
});

function details_callback (file) {
  
  var stats = fs.statSync(file);
  var extname=path.extname(file);
  var myfile=path.basename( file, extname );
  //console.log(myfile);

  const jsondata={
    dev: stats["dev"],
    path:file,
    isfile:stats.isFile(),
    name:`${myfile}`,
    size:stats["size"],
    extension:stats.isFile()?extname:'none',
    mode:stats["mode"],

  permission:[
    
    {
     others:[
    {
      eXecute:(stats["mode"] & 1 ? 'x' : '-'),
      Write:(stats["mode"] & 2 ? 'w' : '-'),
      Read:(stats["mode"] & 4 ? 'r' : '-')
    }
    ],
     group:[
        {
      eXecute:(stats["mode"] & 10 ? 'x' : '-'),
      Write:(stats["mode"] & 20 ? 'w' : '-'),
      Read:(stats["mode"] & 40 ? 'r' : '-')
     
        }
    ],
    owner:[
    {
      eXecute:(stats["mode"] & 100 ? 'x' : '-'),
      Write:(stats["mode"] & 200 ? 'w' : '-'),
      Read:(stats["mode"] & 400 ? 'r' : '-')
    }
    ]    


    }
    
    ],
    other_details:[
        {
            nlink: stats["nlink"],
            uid:stats["uid"],
            gid:stats["gid"],
            rdev: stats["rdev"],
            blksize:stats["blksize"],
            ino:stats["ino"],
            blocks:stats["blocks"],
            atimeMs:stats["atimeMs"],
            mtimeMs: stats["mtimeMs"],
            ctimeMs:stats["ctimeMs"],
            birthtimeMs: stats["birthtimeMs"],
            atime:stats["atime"], 
            mtime:stats["mtime"],
            ctime:stats["ctime"],
            birthtime:stats["birthtime"],
        }
    ]
    


};


listdata.push(jsondata)


     
};





})



app.listen(8000,()=>{
    console.log("app is running");
})