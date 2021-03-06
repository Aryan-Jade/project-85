var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_img_width=30;
block_img_height=30;
var player_img="";
var block_img="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_img=Img;
        player_img.scaleToWidth(150);
        player_img.scaleToHeight(140);
        player_img.set({
            top:player_y, left:player_x
        });
        canvas.add(player_img);
    });
}
function block_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_img=Img;
        block_img.scaleToWidth(block_img_width);
        block_img.scaleToHeight(block_img_height);
        block_img.set({
            top:player_y, left:player_x
        });
        canvas.add(block_img);
    });
}
