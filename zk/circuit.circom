template Coordinates() {
     signal private input hider_x;
     signal private input hider_y;
     signal input seeker_x;
     signal input seeker_y;
     signal output same_coordinates;
 
     signal temp1;
     signal temp2;

     temp1 <== (hider_x - seeker_x) * (hider_x - seeker_x);
     temp2 <== (hider_y - seeker_y) * (hider_y - seeker_y);
     same_coordinates <== temp1 + temp2;
 }
 
 component main = Coordinates();