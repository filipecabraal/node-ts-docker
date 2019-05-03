import StartUp from './app';

let port = process.env.PORT || '3050';

StartUp.app.listen(port, function(){
    console.log(`Server running on port ${port}...`);
});