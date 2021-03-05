module.exports = function(formData){
    if(formData.userId && formData.title && formData.body){
        return true;
    }
    return false;
}