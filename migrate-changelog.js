var fs = require('fs')

var oldPath = './node_modules/@hydrogen-design-system/hydrogen.css/changelog.yml'
var newPath = './_data/changelog.yml'

if (fs.existsSync(newPath) == true) {
  fs.unlink(newPath, (err) => {
    if (err) {
      console.error(err)
      return
    }
  })
}

fs.copyFile(oldPath, newPath, 1, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("You've copied the changelog.")
  }
})
