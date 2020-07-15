const fs = require('fs')
const chalk = require('chalk')
const  getNotes =(title) => {
  const notes=loadNotes()
  const getNote=notes.find((notes)=>notes.title===title)
  if(getNote){
    console.log(chalk.bold.green(getNote.title))
    console.log(getNote.body)
  }
  else {
    console.log(chalk.red('No note found'))
  }
}
const addNotes = (title,body) => {
 const notes=loadNotes()
 const duplicateNote=notes.find((notes)=> notes.title===title
 )
 if(!duplicateNote){
  notes.push({
    title: title,
    body: body
  })
  saveNotes(notes)
  console.log('New note added!!')
}
else{
  console.log('Note title already taken')
}

}
const saveNotes=(notes)=>{
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json',dataJSON)

}
const loadNotes= ()=>{
  try{
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
   }
   catch (e){
     return []
   }
 
}
const removeNotes = (title)=>{
  const notes= loadNotes()
  const notesToKeep=notes.filter(function(notes){
   return notes.title!==title
  })
  if(notesToKeep.length === notes.length){
    console.log(chalk.bgRed('Note noy found'))
  }
  else{
    saveNotes(notesToKeep)
    console.log(chalk.bgGreen('Note removed!!'))

  }

}
const listNotes = ()=>{
   const notes=loadNotes()
  console.log(chalk.bgGreen('Your Notes....'))
  notes.forEach((notes) => {
    console.log(notes.title)
  });

}

module.exports={
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
}