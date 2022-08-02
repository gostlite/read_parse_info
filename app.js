/**
 if Input is text{
 then read text and split by special char using regex expression
  if a special char is in txt then split by the special character
return a list of strings in the right format
}


 */



document.getElementById('input')
    .addEventListener('change', function() {
      
    var readme=new FileReader();
    readme.onload=function(env){
        const the_files = env.target.result.split(/[$%]/)
        document.getElementById('text_field')
                .textContent=the_files
        console.log(env.target.result);

    }
      
    readme.readAsText(this.files[0])
    docs = this.files;
    console.log(docs);
    // readme.result;
})
