# Directory-listing

Step 1:Clone this Repository

git clone https://github.com/ericsoft123/directory-listing.git

Step 2:Go to project directory and use git or any terminal

step 3:Under project directory type on your Terminal

docker build -t filelist .        //note this command means that we are going to build images container called filelist

step 4:Run docker

docker run -p 8000:8000 filelist  //this command means that we are going to run our docker (filelist) on port 8000

step 5:Open your browser and type

localhost:8000


Note:

-Please if you will get any errors please double check your port(stop some app to use this port) or change this port 8000 inside Dockerfile and inside app.js too
      
-Note have a look to my Screenshot(Screenshot location under foldelist_examples) to help you to install this app and also it will show you the final rest api result images
      
-By default when you run this app it will give you result of foldelist_examples but you can be able to change folder name or directory path on line 9 inside app.js 
     


