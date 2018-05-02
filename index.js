// Code your solution in this file!
function distanceFromHqInBlocks(block){
  const distance = 42 - block
  return Math.abs(distance)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(startBlock, endBlock) {
  return Math.abs(startBlock - endBlock)*264
}

function calculatesFarePrice() {

}
