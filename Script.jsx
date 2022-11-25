var docRef = app.activeDocument;
var frameRef = docRef.textFrames[0];
var options = new ImageCaptureOptions();

options.antiAliasing  = true;
options.resolution = 200;

/*Array of names */
var names = ["test 1", "test 2", "test 3","test 4","test 5"]; 

/*For loop each name and save */
for (var i = 0; i < names.length; i++) 
{
frameRef.contents = names[i];
app.activeDocument.imageCapture(File("F:/Downloads/engraving-hand-drawn-ornamental-certificate/file/"+names[i]+".jpeg"),null,options);
}