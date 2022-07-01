import Typewriter from 'typewriter-effect';
import About from '../sections/about.js'

export default function Hello() {
  return (
    <>
    <h1 style={{ fontSize: '3em', fontWeight: 100}}>
      <Typewriter 
        onInit={(typewriter) => {
          typewriter.typeString('안녕하세요~')
            .callFunction(() => {
              console.log('Start introduction')
            })
            .pauseFor(1000)
            .deleteAll()
            .typeString('Hello!')
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
      />
    </h1>
    </>
  );
}