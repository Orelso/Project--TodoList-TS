import { v4 as uuidV4 } from 'uuid'

const list = document.querySelector<HTMLUListElement>('#list')
const form = document.getElementById('new-task-form') as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>('#new-task-title')

form?.addEventListener('submit', e => {
  e.preventDefault()

  if( input?.value === "" || input?.value === null) 
  return

  const task = {
    id: uuidV4(),
    title: input?.value,
    completed: false,
    createdAt: new Date()
  }
})

// import confetti from 'canvas-confetti';

// confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
//   resize: true,
//   useWorker: true,
// })({ particleCount: 20000, spread: 2000 });
