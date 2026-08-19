const playerHealth = 0;

switch (true) {
  case playerHealth >= 80:
    console.log("Play is in great shape.");
    break;
  case playerHealth >= 40:
    console.log("Player is wounded.");
    break;
  case playerHealth <= 0:
    console.log("Player is dead");
    break;
  default:
    console.log("health unknown");
}
