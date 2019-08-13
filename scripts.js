

function throttleRAF (func) {
  let queuedCallback
  return function (...args) {
    if (!queuedCallback) {
      requestAnimationFrame(() => {
        const cb = queuedCallback
        queuedCallback = null
        cb.apply(this, args);
      })
    }
    queuedCallback = func
  }
}




const main = () => {
  const ball = document.querySelector('.ball');
  if (!ball) {
    return;
  }

  const handleMouseMove = (e) => {
    ball.style.top = `${e.clientY}px`;
    ball.style.left = `${e.clientX}px`;
  }
  
  console.log('attaching')
  // document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mousemove', throttleRAF(handleMouseMove))
  
  
}

document.addEventListener('DOMContentLoaded', main)