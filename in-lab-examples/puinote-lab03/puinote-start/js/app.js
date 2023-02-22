// console.log('Started Application.');

const notecard =
{
  noteTitle: 'This is the Title of the Note!',
  noteBody: 'And here is the body of the note.',
  noteImageURL: 'assets/warhol-frog.png',
}

function updateElement() {
    const noteImageElement = document.querySelector('.notecard-thumbnail');
    const noteTitleElement = document.querySelector('.note-title');
    const noteBodyElement = document.querySelector('.note-body');
  
    noteImageElement.src = notecard.noteImageURL;
    noteTitleElement.innerText = notecard.noteTitle;
    noteBodyElement.innerText = notecard.noteBody;
}

notecard.element = document.querySelector('#notecard-one');

// function updateElement() {
//     const noteImageElement = notecard.element.querySelector('.notecard-thumbnail');
//     const noteTitleElement = notecard.element.querySelector('.note-title');
//     const noteBodyElement = notecard.element.querySelector('.note-body');
// }

function submitNote() {
    const editorTitleElement = document.querySelector('#note-editor-title');
    const editorBodyElement = document.querySelector('#note-editor-body');
    
    notecard.noteTitle = editorTitleElement.value;
    notecard.noteBody = editorBodyElement.value;

    updateElement();
}

const btnSubmit = document.querySelector('#btn-submit');
btnSubmit.onclick = submitNote
