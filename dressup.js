function saveindex(){
    var o = { pant: pants_picker.i,
             shirt: shirts_picker.i,
             bed: beds_picker.i,
             wardrobe: wardrobes_picker.i,
             desk: desks_picker.i,
             light: lights_picker.i,
             decoration: decorations_picker.i
    }

    sessionStorage.ind=JSON.stringify(o);
}

function ImageSwitcher(elem, choices) {
    this.i = 0;
    this.elem = elem;
    this.choices = choices;

    this.Next = function(elem, arr) {
        this.i ++;
        if(this.i == (choices.length)) this.i = 0;
        this.elem.src = this.choices[this.i];
        //saveindex();
        console.log(this.i,this.elem.src);
    }
    this.set = function (ind) {
        this.i = ind;
        this.elem.src = this.choices[ind];
    }
}

var pants = [
    "image/vuota.png",
    "image/pants1.png",
    "image/pants2.png",
    "image/pants3.png"
]
var shirts = [
    "image/vuota.png",
    "image/shirt1.png",
    "image/shirt2.png",
    "image/shirt3.png",
    "image/shirt4.png",
    "image/shirt5.png",
    "image/shirt6.png",
    "image/shirt7.png"
]

var beds = [
    "image/vuota.png",
    "image/letto.png", 
    "image/letto2.png",
    "image/letto4.png"
]

var wardrobes = [
    "image/vuota.png",
    "image/armadio1.png"
]

var desks = [
    "image/vuota.png",
    "image/scrivania1.png",
    "image/specchio.png",
    "image/specchiera2.png",
    "image/specchiera3.png"
]

var lights = [
    "image/vuota.png",
    "image/luci.png",
    "image/luci2.png",
    "image/stars.png"
]

var decorations = [
    "image/vuota.png",
    "image/mirror1.png",
    "image/mirror2.png",
    "image/finestra.png",
    "image/orologio1.png",
    "image/orologio3.png"
]

var pants_picker;
var shirts_picker;
var beds_picker;
var wardrobes_picker;
var desks_picker;
var lights_picker;
var decorations_picker;

$(document).ready(function(){
        
     pants_picker = new ImageSwitcher(pants_img,pants);
     pant_button.onclick = function() {pants_picker.Next(); };
     shirts_picker=new ImageSwitcher(shirts_img, shirts);
     shirt_button.onclick = function() {shirts_picker.Next(); };
     beds_picker = new ImageSwitcher(beds_img, beds);
     bed_button.onclick = function() {beds_picker.Next();};
     wardrobes_picker = new ImageSwitcher(wardrobes_img, wardrobes);
     wardrobe_button.onclick = function() {wardrobes_picker.Next();};
     desks_picker = new ImageSwitcher(desks_img,desks);
     desk_button.onclick = function() {desks_picker.Next(); };
     lights_picker = new ImageSwitcher(lights_img,lights);
     light_button.onclick = function() {lights_picker.Next(); };
     decorations_picker = new ImageSwitcher(decorations_img,decorations);
     decoration_button.onclick = function() {decorations_picker.Next(); };

    
    if (sessionStorage.ind) {
        //alert("LS")
        var o = JSON.parse(sessionStorage.ind);
        pants_picker.set(o.pant);
        shirts_picker.set(o.shirt);
        beds_picker.set(o.bed);
        wardrobes_picker.set(o.wardrobe);
        desks_picker.set(o.desk);
        lights_picker.set(o.light);
        decorations_picker.set(o.decoration);
    }
    
    window.addEventListener("beforeunload", saveindex, false);
});

function takeScreenshot() {
    html2canvas(document.body, {
      onrendered: function(canvas) {
      $('#container').html("");
      $('#container').append(canvas);
   
    doc = new jsPDF('l', 'mm'); //l:landscape 
    doc.addImage(canvas.toDataURL("image/png"), 'JPEG', 0,0,297, 240);
    doc.save('DressUpGame.pdf');
      
      }
    });
}