// Target class (position and width)
class Target
{
  constructor(x, y, w, l, id, c)
  {
    this.x      = x;
    this.y      = y;
    this.width  = w;
    this.label  = l;
    this.id     = id;
    this.c  = color(c[0],c[1],c[2]);
    
    this.mouseIsOver = false; // Initialize mouse over flag
  }
  
  // Checks if a mouse click took place
  // within the target
  clicked(mouse_x, mouse_y)
  {
    return dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2;
  }
  
  hovered(mouse_x, mouse_y)
  {
    return dist(this.x, this.y, mouse_x, mouse_y) < this.width;
  }
  
  // Draws the target (i.e., a circle)
  // and its label
  draw(currentT)
  {
    if(!currentT || currentT != this.label[1].replace("é", "e") )
      this.drawColor(false);
    else
      this.drawColor(true);
  }
  
  drawColor(all) 
  {
    
    const l = (this.width + 40) / 2;
    
    // Draw target
    fill(this.c);
    
    circle(this.x, this.y, this.width);
    
    
    const k = this.label.length;
    
    const title = this.label.slice(0,3);
    
    //all = true;
    
    if(all) {
      // Draw indicator
      textFont("Arial", 20);
      textStyle(BOLD);
      fill(color(255,255,255));
      textAlign(CENTER);
      text(title,this.x, this.y-20);

      // Draw label
      textFont("Arial", 15);
      fill(color(255,255,255));
      textAlign(CENTER);
      text(this.label, this.x, this.y+5); 
    } else {
      // Draw letter
      textFont("Arial", 30);
      fill(color(255,255,255));
      textAlign(CENTER);
      text(title.slice(0,2), this.x, this.y); 
    }
  }
  
  update(mouse_x, mouse_y)
  {
    // Check if mouse is currently over the target
    const isOver = this.clicked(mouse_x, mouse_y);
    
    // If the mouse just entered the target
    if (isOver && !this.mouseIsOver) {
      this.drawColor(true)
      
      this.mouseIsOver = true; // Update flag
    }
    
    // If the mouse just left the target
    else if (!isOver && this.mouseIsOver) {
      this.drawColor(false);
      this.mouseIsOver = false; // Update flag
    }
    
    return this.mouseIsOver ? this.label[1].replace("é", "e") : "";
  }
}