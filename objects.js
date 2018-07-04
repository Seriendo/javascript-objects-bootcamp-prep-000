var playlist = {
  'My Bloody Valentine' : 'Phil Ochs'
}

function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle})
}

function removeFromPlaylist (playlist, artistName) { 
  console.log(delete playlist.artistName
  return playlist
}