function getSize(width, height, depth){
    let volume = width * height * depth;
    let area = (width * height + width * depth + height * depth)*2;
    return [area,volume];
  }