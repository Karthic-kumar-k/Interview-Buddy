module.exports = function(app){
    app.get("/", (req , res) => {
        console.log("called upload page");
        res.render('inputForm');
    });    
}