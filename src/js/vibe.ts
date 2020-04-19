function vibeChange(): void {
  const vibes = [
    "...and you are awesome!",
    "...have a wonderful day!",
    "...and you've got this!",
    "...and so is this puppy! 🐶"
  ];
  var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];
  var existance_vibe = document.querySelector('.vibe');
  if (existance_vibe) {
    existance_vibe.append(vibe);
  } else {
    return;
  }
}
vibeChange();